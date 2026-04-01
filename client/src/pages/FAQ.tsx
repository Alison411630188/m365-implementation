import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Search } from "lucide-react";
import { useState } from "react";

/**
 * 問答區頁面
 * 設計理念：企業級知識庫風格
 * - 可搜尋的常見問題
 * - 按類別組織
 * - 可展開/收起的答案
 */

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: "1",
    category: "帳戶和訪問",
    question: "我忘記了我的密碼，我應該怎麼辦？",
    answer:
      "訪問 account.microsoft.com，點擊「無法訪問您的帳戶」，然後按照步驟重置密碼。您可以使用備用電子郵件地址或電話號碼進行驗證。如果您無法訪問這些選項，請聯繫您的 IT 部門。",
  },
  {
    id: "2",
    category: "帳戶和訪問",
    question: "什麼是多因素驗證 (MFA)？",
    answer:
      "多因素驗證是一種安全功能，需要您在登入時提供兩種或更多驗證方法。這可能包括您的密碼、手機上的代碼或生物識別驗證。MFA 大大提高了您帳戶的安全性。",
  },
  {
    id: "3",
    category: "帳戶和訪問",
    question: "我可以在多個設備上使用 M365 嗎？",
    answer:
      "是的，您可以在最多 5 個設備上同時使用 M365。這包括 PC、Mac、平板電腦和手機。您可以在 account.microsoft.com 上管理您的設備。",
  },
  {
    id: "4",
    category: "Teams 和協作",
    question: "如何在 Teams 中創建新團隊？",
    answer:
      "打開 Teams，點擊左側邊欄的「加入或創建團隊」，然後選擇「創建團隊」。選擇隱私設置（私人或公開），輸入團隊名稱和描述，然後添加成員。",
  },
  {
    id: "5",
    category: "Teams 和協作",
    question: "我可以恢復已刪除的 Teams 消息嗎？",
    answer:
      "如果您在 21 天內刪除消息，您可以恢復它。編輯消息，點擊「...」，然後選擇「刪除」。在刪除前，您可以選擇「恢復」。超過 21 天後，消息將被永久刪除。",
  },
  {
    id: "6",
    category: "Teams 和協作",
    question: "如何在 Teams 中共享屏幕？",
    answer:
      "在 Teams 通話或會議中，點擊工具欄中的「共享屏幕」按鈕。選擇您要共享的屏幕或應用程式窗口。要停止共享，點擊「停止共享」。",
  },
  {
    id: "7",
    category: "文件和存儲",
    question: "OneDrive 和 SharePoint 有什麼區別？",
    answer:
      "OneDrive 是您的個人雲存儲，用於存儲個人文件。SharePoint 是企業協作平台，用於團隊共享文件和信息。您可以在 OneDrive 中存儲個人文件，在 SharePoint 中存儲團隊文件。",
  },
  {
    id: "8",
    category: "文件和存儲",
    question: "我可以恢復已刪除的文件嗎？",
    answer:
      "是的，已刪除的文件會進入「回收站」。在 OneDrive 或 SharePoint 中，點擊「回收站」，找到您要恢復的文件，然後點擊「恢復」。文件將在 93 天後被永久刪除。",
  },
  {
    id: "9",
    category: "文件和存儲",
    question: "如何共享文件和設置權限？",
    answer:
      "右鍵點擊文件，選擇「共享」。輸入您要共享的人員的電子郵件地址，選擇權限級別（查看或編輯），然後點擊「共享」。您也可以生成共享鏈接。",
  },
  {
    id: "10",
    category: "Office 應用程式",
    question: "我可以離線使用 Office 應用程式嗎？",
    answer:
      "是的，您可以在沒有互聯網連接的情況下使用 Office 應用程式。但是，某些功能（如實時協作和雲存儲訪問）需要互聯網連接。當您重新連接時，您的更改將自動同步。",
  },
  {
    id: "11",
    category: "Office 應用程式",
    question: "如何在 Excel 中使用公式？",
    answer:
      "在單元格中輸入 = 符號，然後輸入公式（例如 =SUM(A1:A10)）。按 Enter 鍵執行公式。您也可以使用函數嚮導來幫助您構建複雜的公式。",
  },
  {
    id: "12",
    category: "安全性和隱私",
    question: "M365 如何保護我的數據？",
    answer:
      "M365 使用多層安全措施，包括加密、多因素驗證、威脅防護和合規性工具。所有數據都在傳輸和存儲時進行加密。Microsoft 遵守國際安全標準和法規。",
  },
  {
    id: "13",
    category: "安全性和隱私",
    question: "我可以控制我的數據隱私嗎？",
    answer:
      "是的，您可以在帳戶設置中控制您的隱私設置。您可以選擇哪些信息是公開的，哪些是私人的。您也可以選擇退出某些數據收集功能。",
  },
  {
    id: "14",
    category: "安全性和隱私",
    question: "如何識別釣魚電子郵件？",
    answer:
      "釣魚電子郵件通常要求您提供個人信息或點擊可疑鏈接。檢查發件人的電子郵件地址，查找拼寫錯誤，不要點擊未知鏈接。如果您不確定，請聯繫 IT 部門。",
  },
  {
    id: "15",
    category: "Power Automate 和自動化",
    question: "什麼是 Power Automate？",
    answer:
      "Power Automate 是一個自動化工具，可以幫助您創建自動化工作流程。您可以連接不同的應用程式，根據特定條件自動執行任務，例如自動發送電子郵件或創建任務。",
  },
];

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

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        {/* 頁面標題 */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            M365 問答區
          </h1>
          <p className="text-lg text-foreground/70 mb-8">
            常見問題解答和故障排除指南
          </p>

          {/* 搜尋框 */}
          <div className="relative max-w-2xl">
            <Search
              size={20}
              className="absolute left-4 top-3.5 text-foreground/50"
            />
            <input
              type="text"
              placeholder="搜尋問題..."
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

                <Card className="p-6">
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
              沒有找到相關問題
            </p>
            <p className="text-foreground/50">
              請嘗試使用不同的搜尋詞或瀏覽所有問題
            </p>
          </div>
        )}

        {/* 底部提示 */}
        <div className="mt-16 p-8 bg-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-lg font-bold text-foreground mb-2">
            ❓ 沒有找到您的問題？
          </h3>
          <p className="text-foreground/70">
            如果您找不到答案，請聯繫您的 IT 部門或訪問 Microsoft 官方支持頁面。
          </p>
        </div>
      </div>
    </div>
  );
}
