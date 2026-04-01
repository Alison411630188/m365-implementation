import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/**
 * 使用手冊頁面
 * 設計理念：企業級知識庫風格
 * - 分類標籤頁組織內容
 * - 清晰的步驟指南
 * - 可掃描的內容結構
 */

export default function Handbook() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        {/* 頁面標題 */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            M365 使用手冊
          </h1>
          <p className="text-lg text-foreground/70">
            完整的逐步指南和最佳實踐，幫助您快速上手 Microsoft 365
          </p>
        </div>

        {/* 標籤頁內容 */}
        <Tabs defaultValue="getting-started" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-5 mb-8">
            <TabsTrigger value="getting-started">快速開始</TabsTrigger>
            <TabsTrigger value="setup">設置指南</TabsTrigger>
            <TabsTrigger value="collaboration">協作工具</TabsTrigger>
            <TabsTrigger value="security">安全性</TabsTrigger>
            <TabsTrigger value="tips">技巧與訣竅</TabsTrigger>
          </TabsList>

          {/* 快速開始 */}
          <TabsContent value="getting-started" className="space-y-6">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                快速開始指南
              </h2>

              <div className="space-y-8">
                {/* 步驟 1 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground font-bold">
                      1
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      登入您的 M365 帳戶
                    </h3>
                    <p className="text-foreground/70 mb-4">
                      使用您的公司帳戶登入 Microsoft 365。訪問 office.com 或使用您的組織提供的登入連結。
                    </p>
                    <ul className="list-disc list-inside text-foreground/70 space-y-2">
                      <li>輸入您的公司電子郵件地址</li>
                      <li>輸入您的密碼</li>
                      <li>完成多因素驗證（如需要）</li>
                    </ul>
                  </div>
                </div>

                {/* 步驟 2 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground font-bold">
                      2
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      探索應用程式啟動器
                    </h3>
                    <p className="text-foreground/70 mb-4">
                      點擊左上角的應用程式啟動器（網格圖示）以訪問所有 M365 應用程式。
                    </p>
                    <ul className="list-disc list-inside text-foreground/70 space-y-2">
                      <li>查看所有可用的應用程式</li>
                      <li>釘選常用應用程式以快速訪問</li>
                      <li>搜尋特定應用程式</li>
                    </ul>
                  </div>
                </div>

                {/* 步驟 3 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground font-bold">
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      設置您的個人資料
                    </h3>
                    <p className="text-foreground/70 mb-4">
                      完成您的個人資料設置以改善協作體驗。
                    </p>
                    <ul className="list-disc list-inside text-foreground/70 space-y-2">
                      <li>添加個人資料照片</li>
                      <li>填寫職位和部門信息</li>
                      <li>設置您的可用性狀態</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* 設置指南 */}
          <TabsContent value="setup" className="space-y-6">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                設置和配置
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    安裝 Office 應用程式
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    在您的設備上安裝 Word、Excel、PowerPoint 和其他 Office 應用程式。
                  </p>
                  <ol className="list-decimal list-inside text-foreground/70 space-y-2">
                    <li>訪問 account.microsoft.com</li>
                    <li>點擊「安裝 Office」</li>
                    <li>選擇您的語言和版本</li>
                    <li>完成安裝過程</li>
                  </ol>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    配置電子郵件客戶端
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    在 Outlook 中設置您的公司電子郵件帳戶。
                  </p>
                  <ol className="list-decimal list-inside text-foreground/70 space-y-2">
                    <li>打開 Outlook</li>
                    <li>點擊「文件」→「帳戶設置」</li>
                    <li>輸入您的電子郵件地址</li>
                    <li>允許 Outlook 自動配置您的帳戶</li>
                  </ol>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    同步設置
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    啟用設置同步以在多個設備上保持一致的體驗。
                  </p>
                  <ol className="list-decimal list-inside text-foreground/70 space-y-2">
                    <li>進入「設置」→「帳戶」</li>
                    <li>選擇「同步您的設置」</li>
                    <li>啟用所需的同步選項</li>
                  </ol>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* 協作工具 */}
          <TabsContent value="collaboration" className="space-y-6">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                協作工具最佳實踐
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    在 Teams 中進行有效協作
                  </h3>
                  <ul className="list-disc list-inside text-foreground/70 space-y-2">
                    <li>使用頻道組織不同的主題和項目</li>
                    <li>利用線程回覆保持對話有序</li>
                    <li>使用 @提及來吸引特定人員的注意</li>
                    <li>定期檢查已釘選的消息和文件</li>
                  </ul>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    SharePoint 文件管理
                  </h3>
                  <ul className="list-disc list-inside text-foreground/70 space-y-2">
                    <li>使用有意義的文件夾結構組織文件</li>
                    <li>利用版本控制跟蹤文件更改</li>
                    <li>設置適當的權限以保護敏感信息</li>
                    <li>使用搜尋功能快速查找文件</li>
                  </ul>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    實時共同編輯
                  </h3>
                  <ul className="list-disc list-inside text-foreground/70 space-y-2">
                    <li>在 Office 應用程式中打開共享文件</li>
                    <li>邀請其他人進行實時編輯</li>
                    <li>查看其他人的光標和更改</li>
                    <li>使用評論功能進行反饋</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* 安全性 */}
          <TabsContent value="security" className="space-y-6">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                安全性和隱私
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    保護您的帳戶
                  </h3>
                  <ul className="list-disc list-inside text-foreground/70 space-y-2">
                    <li>使用強密碼並定期更改</li>
                    <li>啟用多因素驗證（MFA）</li>
                    <li>不要在公共計算機上保存密碼</li>
                    <li>定期檢查登入活動</li>
                  </ul>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    識別釣魚攻擊
                  </h3>
                  <ul className="list-disc list-inside text-foreground/70 space-y-2">
                    <li>檢查發件人的電子郵件地址</li>
                    <li>懷疑要求提供個人信息的消息</li>
                    <li>不要點擊可疑鏈接或下載附件</li>
                    <li>向 IT 部門報告可疑電子郵件</li>
                  </ul>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    數據分類
                  </h3>
                  <ul className="list-disc list-inside text-foreground/70 space-y-2">
                    <li>了解您組織的數據分類政策</li>
                    <li>正確標記敏感文件</li>
                    <li>遵守數據保留政策</li>
                    <li>在共享前檢查文件權限</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* 技巧與訣竅 */}
          <TabsContent value="tips" className="space-y-6">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                提高生產力的技巧
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-border rounded-lg p-4">
                  <h3 className="font-bold text-foreground mb-2">
                    ⌨️ 鍵盤快捷鍵
                  </h3>
                  <ul className="text-sm text-foreground/70 space-y-1">
                    <li>Ctrl+N：新建文件</li>
                    <li>Ctrl+S：保存文件</li>
                    <li>Ctrl+Z：撤銷</li>
                    <li>Ctrl+Y：重做</li>
                  </ul>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h3 className="font-bold text-foreground mb-2">
                    🔍 搜尋技巧
                  </h3>
                  <ul className="text-sm text-foreground/70 space-y-1">
                    <li>使用引號搜尋精確短語</li>
                    <li>使用 - 排除特定單詞</li>
                    <li>使用通配符 * 進行模糊搜尋</li>
                  </ul>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h3 className="font-bold text-foreground mb-2">
                    📌 快速訪問
                  </h3>
                  <ul className="text-sm text-foreground/70 space-y-1">
                    <li>釘選常用文件和文件夾</li>
                    <li>使用快速訪問欄</li>
                    <li>創建自定義快捷方式</li>
                  </ul>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h3 className="font-bold text-foreground mb-2">
                    🤖 自動化工作流程
                  </h3>
                  <ul className="text-sm text-foreground/70 space-y-1">
                    <li>使用 Power Automate 自動化任務</li>
                    <li>設置自動回复和規則</li>
                    <li>創建模板以節省時間</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
