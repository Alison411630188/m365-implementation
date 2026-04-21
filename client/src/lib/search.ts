import { SCENARIOS } from '@/data/cases';
import { faqItems } from '@/data/faq';
import { TOOLS_DATA } from '@/data/tools';

export interface SearchResult {
  type: 'case' | 'faq' | 'handbook';
  category: string;
  title: string;
  content: string;
  path: string;
}

let searchIndex: SearchResult[] | null = null;

function getSearchIndex(): SearchResult[] {
  if (searchIndex === null) {
    const newIndex: SearchResult[] = [];
    
    // 1. 處理應用案例 (Cases)
    SCENARIOS.forEach(scenario => {
      newIndex.push({
        type: 'case',
        category: '應用案例',
        title: scenario.title,
        content: `目標對象: ${scenario.targetAudience}. 解決痛點: ${scenario.context}. 使用者故事: ${scenario.userStory}. 步驟: ${scenario.steps.join(' ')}`.toLowerCase(),
        path: `/cases#${scenario.id}`
      });
    });

    // 2. 處理常見問答 (FAQ)
    faqItems.forEach(faq => {
      newIndex.push({
        type: 'faq',
        category: `常見問題 > ${faq.category}`,
        title: faq.question,
        content: faq.answer.toLowerCase(),
        path: `/faq#${faq.id}`
      });
    });

    // 3. 處理工具說明 (Tools)
    TOOLS_DATA.forEach(tool => {
      newIndex.push({
        type: 'handbook',
        category: '工具說明',
        title: tool.name,
        content: tool.desc.toLowerCase(),
        path: `/tools/${tool.id}`
      });
    });
    searchIndex = newIndex;
  }
  return searchIndex;
}

/**
 * 在知識庫中搜尋，並根據相關性排序。
 * @param query 使用者的搜尋關鍵字。
 * @returns 回傳匹配的結果陣列。
 */
export function searchKnowledgeBase(query: string): SearchResult[] {
  if (!query || query.length < 2) {
    return [];
  }

  const index = getSearchIndex();
  const lowerCaseQuery = query.toLowerCase();

  const scoredResults = index
    .map(item => {
      let score = 0;
      const lowerCaseTitle = item.title.toLowerCase();

      if (lowerCaseTitle.includes(lowerCaseQuery)) {
        // 標題完全匹配，最高分
        if (lowerCaseTitle === lowerCaseQuery) {
          score += 10;
        }
        // 標題開頭匹配，次高分
        else if (lowerCaseTitle.startsWith(lowerCaseQuery)) {
          score += 5;
        }
        // 標題包含，基本分
        else {
          score += 2;
        }
      }

      // 內容包含，加分
      if (item.content.includes(lowerCaseQuery)) {
        score += 1;
      }

      // 為 SearchResult & { score: number } 類型
      return { ...item, score };
    })
    .filter(item => item.score > 0);

  // 根據分數降序排序
  // 如果分數相同，則按標題字母順序排序以保持一致性
  return scoredResults.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return a.title.localeCompare(b.title);
  });
}
