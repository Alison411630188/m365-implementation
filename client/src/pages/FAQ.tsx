import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";
import { useTranslation } from "react-i18next";
import { faqItems, FAQItem } from "@/data/faq"; // 從獨立的資料檔案引入

/**
 * 問答區頁面 - Refactored to use external data source
 */

export default function FAQ() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitMutation = trpc.contact.submit.useMutation();

  const handleContactFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitContactForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 驗證表單
    if (
      !contactForm.name ||
      !contactForm.email ||
      !contactForm.subject ||
      !contactForm.message
    ) {
      toast.error(t('faq.fillRequired'));
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await submitMutation.mutateAsync({
        name: contactForm.name,
        email: contactForm.email,
        phone: contactForm.phone || undefined,
        subject: contactForm.subject,
        message: contactForm.message,
      });

      if (result.success) {
        toast.success(result.message);
        setContactForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setShowContactForm(false);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("提交表單失敗:", error);
      toast.error(t('faq.submitFailed'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const categories = Array.from(
    new Set(faqItems.map((item) => item.category))
  );

  const filteredItems = faqItems.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedItems = categories.reduce(
    (acc, category) => {
      acc[category] = filteredItems.filter((item) => item.category === category);
      return acc;
    },
    {} as Record<string, FAQItem[]>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        {/* 頁面標題 */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {t('faq.title')}
          </h1>
          <p className="text-lg text-foreground/70 mb-8">
            {t('faq.description')}
          </p>

          {/* 搜尋框 */}
          <div className="relative max-w-2xl">
            <Search
              size={20}
              className="absolute left-4 top-3.5 text-foreground/50"
            />
            <input
              type="text"
              placeholder={t('faq.searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* 問答內容 */}
        {Object.entries(groupedItems).map(([category, items]) => (
          <div key={category} className="mb-12">
            {items.length > 0 && (
              <>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {category}
                </h2>

                <Card className="p-6 border-2 border-border/60">
                  <Accordion type="single" collapsible className="w-full">
                    {items.map((item) => (
                      <AccordionItem key={item.id} value={item.id}>
                        <AccordionTrigger className="hover:text-primary transition-colors">
                          <span className="text-left">{item.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-foreground/70">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </Card>
              </>
            )}
          </div>
        ))}

        {/* 無結果提示 */}
        {Object.values(groupedItems).every((items) => items.length === 0) && (
          <div className="text-center py-12">
            <p className="text-lg text-foreground/70 mb-4">
              {t('faq.noResults')}
            </p>
            <p className="text-foreground/50">
              {t('faq.tryDifferent')}
            </p>
          </div>
        )}

        {/* 聯繫我們部分 */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">{t('faq.contactTitle')}</h2>

          {/* 聯繫方式卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* 電子郵件 */}
            <Card className="p-8 border-2 border-border/60 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {t('faq.emailTitle')}
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    {t('faq.emailDesc')}
                  </p>
                  <a
                    href="mailto:x0102@cvilux.com"
                    className="text-primary hover:underline font-medium"
                  >
                    x0102@cvilux.com
                  </a>
                </div>
              </div>
            </Card>

            {/* 電話 */}
            <Card className="p-8 border-2 border-border/60 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Phone size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {t('faq.phoneTitle')}
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    {t('faq.phoneDesc')}
                  </p>
                  <a
                    href="tel:0984261917"
                    className="text-primary hover:underline font-medium"
                  >
                    代填入
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* 提問表單 */}
          {!showContactForm ? (
            <Card className="p-8 text-center border-2 border-border/60 hover:border-primary/50 transition-all">
              <h3 className="text-lg font-bold text-foreground mb-4">
                {t('faq.formTitle')}
              </h3>
              <p className="text-foreground/70 mb-6">
                {t('faq.formDesc')}
              </p>
              <Button
                onClick={() => setShowContactForm(true)}
                size="lg"
                className="gap-2"
              >
                <Send size={18} />
                {t('faq.openForm')}
              </Button>
            </Card>
          ) : (
            <Card className="p-8 border-2 border-border/60">
              <h3 className="text-lg font-bold text-foreground mb-6">{t('faq.openForm')}</h3>
              <form onSubmit={handleSubmitContactForm} className="space-y-4">
                {/* 姓名 */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('faq.nameLabel')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactFormChange}
                    placeholder="請輸入您的姓名"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* 電子郵件 */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('faq.emailLabel')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactFormChange}
                    placeholder="請輸入您的電子郵件"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* 電話 */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('faq.phoneLabel')}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={contactForm.phone}
                    onChange={handleContactFormChange}
                    placeholder="請輸入您的電話號碼"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* 主題 */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('faq.subjectLabel')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleContactFormChange}
                    placeholder="請輸入問題主題"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* 訊息 */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('faq.messageLabel')} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactFormChange}
                    placeholder="請詳細描述您的問題或建議"
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>

                {/* 按鈕 */}
                <div className="flex gap-4 pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting || submitMutation.isPending}
                    className="flex-1 gap-2"
                  >
                    <Send size={18} />
                    {isSubmitting || submitMutation.isPending ? t('faq.submitting') : t('faq.submit')}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowContactForm(false)}
                    className="flex-1"
                  >
                    {t('faq.closeForm')}
                  </Button>
                </div>
              </form>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
