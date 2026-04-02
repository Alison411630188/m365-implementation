import { describe, it, expect, beforeEach, vi } from "vitest";
import { sendContactFormEmail, ContactFormData } from "./email";
import nodemailer from "nodemailer";

// Mock nodemailer
vi.mock("nodemailer");

describe("Contact Form Email", () => {
  const mockSendMail = vi.fn().mockResolvedValue({ messageId: "test-id" });
  const mockCreateTransport = vi.fn().mockReturnValue({
    sendMail: mockSendMail,
  });

  beforeEach(() => {
    vi.clearAllMocks();
    (nodemailer.createTransport as any).mockImplementation(mockCreateTransport);
  });

  describe("sendContactFormEmail", () => {
    it("should send two emails: one to admin and one to user", async () => {
      const testData: ContactFormData = {
        name: "Test User",
        email: "test@example.com",
        phone: "1234567890",
        subject: "Test Subject",
        message: "This is a test message\nWith multiple lines",
      };

      await sendContactFormEmail(testData);

      // Verify sendMail was called twice
      expect(mockSendMail).toHaveBeenCalledTimes(2);

      // Verify first call (admin notification)
      const firstCall = mockSendMail.mock.calls[0][0];
      expect(firstCall.to).toBe(process.env.GMAIL_USER || "");
      expect(firstCall.subject).toContain("新的聯繫表單提交");
      expect(firstCall.subject).toContain("Test Subject");
      expect(firstCall.html).toContain("Test User");
      expect(firstCall.html).toContain("test@example.com");
      expect(firstCall.html).toContain("1234567890");
      expect(firstCall.html).toContain("This is a test message<br>With multiple lines");

      // Verify second call (user confirmation)
      const secondCall = mockSendMail.mock.calls[1][0];
      expect(secondCall.to).toBe("test@example.com");
      expect(secondCall.subject).toContain("感謝您的聯繫");
      expect(secondCall.html).toContain("Test User");
      expect(secondCall.html).toContain("Test Subject");
      expect(secondCall.html).toContain("This is a test message<br>With multiple lines");
    });

    it("should handle optional phone field", async () => {
      const testData: ContactFormData = {
        name: "Test User",
        email: "test@example.com",
        subject: "Test Subject",
        message: "Test message",
      };

      await sendContactFormEmail(testData);

      expect(mockSendMail).toHaveBeenCalledTimes(2);

      // Verify first call doesn't include phone
      const firstCall = mockSendMail.mock.calls[0][0];
      expect(firstCall.html).not.toContain("<p><strong>電話：</strong>");
    });

    it("should replace newlines with <br> tags", async () => {
      const testData: ContactFormData = {
        name: "Test User",
        email: "test@example.com",
        subject: "Test Subject",
        message: "Line 1\nLine 2\nLine 3",
      };

      await sendContactFormEmail(testData);

      const firstCall = mockSendMail.mock.calls[0][0];
      expect(firstCall.html).toContain("Line 1<br>Line 2<br>Line 3");
    });

    it("should throw error if email sending fails", async () => {
      mockSendMail.mockRejectedValueOnce(new Error("SMTP Error"));

      const testData: ContactFormData = {
        name: "Test User",
        email: "test@example.com",
        subject: "Test Subject",
        message: "Test message",
      };

      await expect(sendContactFormEmail(testData)).rejects.toThrow("SMTP Error");
    });
  });
});
