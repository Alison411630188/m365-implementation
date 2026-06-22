import { useEffect } from "react";

const SITE_NAME = "M365 實戰學院 | 瀚荃集團";

/**
 * 動態設定 document.title
 * @param pageTitle 頁面名稱，留空則只顯示 SITE_NAME
 */
export function usePageTitle(pageTitle?: string) {
  useEffect(() => {
    document.title = pageTitle ? `${pageTitle} — ${SITE_NAME}` : SITE_NAME;
    return () => {
      document.title = SITE_NAME;
    };
  }, [pageTitle]);
}
