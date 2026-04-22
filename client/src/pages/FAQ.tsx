import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Search, User } from "lucide-react";
import { useState } from "react";
import { faqItems, FAQItem } from "@/data/faq";

/**
 * 問答區頁面 - 更新聯絡人資訊
 */

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");

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

  const contacts = [
    { name: 'Boris Cho (卓家全)', title: '永續辦公室', email: 'x0102@cvilux.com' },
    { name: 'Taco Chang (張祥育)', title: '永續辦公室', email: 'x0103@cvilux.com' },
    { name: 'Jerry Chang (張哲禎)', title: '永續辦公室', email: 'Jerry.Chang@cvilux.com' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        {/* 頁面標題 */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            常見問答
          </h1>
          <p className="text-lg text-foreground/70 mb-8">
            我們整理了一些常見的問題，希望能為您解惑。如果找不到您想要的答案，請隨時與我們聯繫。
          </p>

          {/* 搜尋框 */}
          <div className="relative max-w-2xl">
            <Search
              size={20}
              className="absolute left-4 top-3.5 text-foreground/50"
            />
            <input
              type="text"
              placeholder="搜尋問題或關鍵字..."
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
              找不到符合的結果
            </p>
            <p className="text-foreground/50">
              請試試看其他的關鍵字，或直接與我們聯繫。
            </p>
          </div>
        )}

        {/* 聯繫我們部分 (優化後) */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">有問題可以聯繫</h2>

          <Card className="p-8 border-2 border-border/60">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {contacts.map((contact) => (
                <div key={contact.email} className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-border/50 hover:border-primary/50 hover:bg-muted/100 transition-colors">
                  <div className="p-2.5 rounded-full bg-primary/10">
                    <User size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{contact.name}</p>
                    <p className="text-xs text-foreground/60 font-semibold tracking-wide">{contact.title}</p>
                    <a href={`mailto:${contact.email}`} className="text-sm text-primary hover:underline mt-1 inline-block">
                      {contact.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
