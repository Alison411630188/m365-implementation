# M365 導入專案 - 任務清單

## 聯繫表單後端集成

- [x] 檢查後端 email.ts 實現（Nodemailer + Gmail SMTP）
- [x] 檢查 tRPC contact.submit 路由實現
- [x] 檢查環境變數配置（GMAIL_USER, GMAIL_APP_PASSWORD）
- [x] 更新 FAQ.tsx 以使用 tRPC contact.submit 端點
- [x] 移除模擬提交邏輯，集成真實 API 調用
- [x] 編寫 vitest 測試驗證郵件功能（4 個測試用例）
- [x] 運行所有測試並確認通過（5/5 tests passed）
- [x] 手動測試聯繫表單端到端功能
- [x] 驗證成功提交消息和表單重置

## 已實現的功能

### 後端功能
- ✅ Nodemailer 郵件發送模組（server/email.ts）
  - 發送管理員通知郵件
  - 發送用戶確認郵件
  - 正確處理換行符轉換為 HTML `<br>` 標籤
  - 支持可選的電話欄位

- ✅ tRPC contact.submit 路由（server/routers.ts）
  - Zod 驗證輸入數據
  - 錯誤處理和回退機制
  - 返回成功/失敗消息

- ✅ 環境變數配置（server/_core/env.ts）
  - GMAIL_USER
  - GMAIL_APP_PASSWORD

### 前端功能
- ✅ FAQ 頁面聯繫表單更新（client/src/pages/FAQ.tsx）
  - 集成 tRPC mutation
  - 表單驗證
  - 成功/失敗反饋
  - 自動表單重置

### 測試
- ✅ 聯繫表單單元測試（server/contact.test.ts）
  - 測試雙郵件發送
  - 測試可選欄位處理
  - 測試換行符替換
  - 測試錯誤處理

## 已驗證的功能

1. ✅ 表單提交成功
2. ✅ 後端 API 正常工作
3. ✅ 成功消息正確顯示
4. ✅ 表單自動重置
5. ✅ 所有單元測試通過


## 主題切換功能

- [x] 更新 ThemeContext 支持黑色/白色主題切換
- [x] 在 Sidebar 左下角添加主題切換按鈕
- [x] 更新 CSS 變數和樣式支持主題切換
- [x] 測試主題切換功能
- [x] 保存檢查點


## 問答區移動到功能區下方

- [x] 檢查導航結構和首頁佈局
- [x] 更新 shared/const.ts 中的導航項目
- [x] 在首頁功能區下方添加問答區卡片
- [x] 測試導航和頁面佈局
- [x] 保存檢查點


## 修正：問答區位置調整

- [x] 將問答區移到【M365 核心工具】功能區下方（而非快速導航下方）
- [x] 測試修正後的首頁佈局
- [x] 保存檢查點


## 修正：問答區移到左侧欄工具說明下方

- [x] 更新 shared/const.ts 將 FAQ 移到工具說明下方
- [x] 恢複首頁佈局 - 移除問答區卡片
- [x] 測試導航結構和首頁佈局
- [x] 保存檢查點


## 新功能：全站搜尋、工具跳轉和內容豐富化

- [x] 建立搜索數據結構和后端 API
- [x] 建立搜索頁面前端 UI
- [x] 添加工具快速跳轉按鈕
- [x] 豐富工工具說明和常見問題內容（FAQ 頁面已包含 15 個常見問題）
- [x] 測試所有功能並保存檢查點


## 修復：搜索功能

- [x] 修復 MySQL 連接問題（使用 mysql2 連接池）
- [x] 修復搜索查詢邏輯（使用 SQL LOWER() 支持不區分大小寫）
- [x] 測試搜索功能正常工作（搜索 "Power"、"SharePoint" 等成功返回結果）
- [x] 驗證類型篩選功能正常工作


## 新功能：Planner 工具頁面嵌入 iframe

- [x] 在 Planner 工具詳情頁面最上方添加 iframe
- [x] 測試 iframe 嵌入功能
- [x] 保存檢查點


## 新功能：集成瀚荃公司 Logo

- [x] 從瀚荃集團網站抷取 Logo
- [x] 將 Logo 集成到網站最顧眼的位置（Sidebar 頂部）
- [x] 測試 Logo 顯示效果
- [x] 保存檢查點


## 修改：Sidebar Logo 區域文字佈局

- [x] 修改 Sidebar 頂部 Logo 區域，添加【瀚荃集團】文字
- [x] 將【M365】文字移到下方
- [x] 測試修改效果
- [x] 保存檢查點


## 新功能：首頁右上角添加 Logo

- [x] 在首頁右上角添加瀚荃 Logo
- [x] 測試效果
- [x] 保存檢查點
