import nodemailer from "nodemailer";
import { ENV } from "./_core/env";

let transporter: ReturnType<typeof nodemailer.createTransport> | null = null;

export async function getEmailTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: ENV.gmailUser,
        pass: ENV.gmailAppPassword,
      },
    });
  }
  return transporter;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export async function sendContactFormEmail(data: ContactFormData) {
  try {
    const transporter = await getEmailTransporter();

    // 發送給管理員的郵件
    await transporter.sendMail({
      from: ENV.gmailUser,
      to: ENV.gmailUser,
      subject: `【M365 導入專案】新的聯繫表單提交 - ${data.subject}`,
      html: `
        <h2>新的聯繫表單提交</h2>
        <p><strong>姓名：</strong> ${data.name}</p>
        <p><strong>電子郵件：</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>電話：</strong> ${data.phone}</p>` : ""}
        <p><strong>主題：</strong> ${data.subject}</p>
        <p><strong>訊息：</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // 發送確認郵件給提交者
    await transporter.sendMail({
      from: ENV.gmailUser,
      to: data.email,
      subject: "【M365 導入專案】感謝您的聯繫",
      html: `
        <h2>感謝您的聯繫</h2>
        <p>親愛的 ${data.name}，</p>
        <p>感謝您提交聯繫表單。我們已收到您的訊息，將盡快回覆您。</p>
        <p><strong>您提交的內容：</strong></p>
        <p><strong>主題：</strong> ${data.subject}</p>
        <p><strong>訊息：</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p>此為自動回覆郵件，請勿直接回覆。</p>
        <p>如有任何問題，請聯繫我們：</p>
        <p>電子郵件：zhuojiaquan520@gmail.com</p>
        <p>電話：0984-261917</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("[Email] Failed to send contact form email:", error);
    throw error;
  }
}
