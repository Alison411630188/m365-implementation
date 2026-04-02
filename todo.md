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
