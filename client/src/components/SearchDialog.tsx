import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Search, FileText, HelpCircle, BookOpen } from 'lucide-react';
import { searchKnowledgeBase, SearchResult } from '@/lib/search';
import { useLocation } from 'wouter';
import { useDebounce } from '@/hooks/useDebounce';

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [, setLocation] = useLocation();
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery.length > 1) {
      const searchResults = searchKnowledgeBase(debouncedQuery);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [debouncedQuery]);

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setQuery('');
        setResults([]);
      }, 300);
    }
  }, [open]);

  const handleResultClick = (path: string) => {
    setLocation(path);
    onOpenChange(false);
  };

  const getResultIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'case': return <FileText className="text-blue-500" size={24} />;
      case 'faq': return <HelpCircle className="text-green-500" size={24} />;
      case 'handbook': return <BookOpen className="text-purple-500" size={24} />;
      default: return <FileText size={24} />;
    }
  };

  const showInitialState = debouncedQuery.length <= 1;
  const showNoResults = !showInitialState && results.length === 0;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 gap-0 shadow-2xl" onOpenAutoFocus={(e) => e.preventDefault()}>
        <DialogHeader className="p-4 border-b bg-muted/40">
          <div className="relative flex items-center">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="搜尋手冊、案例、常見問題..."
              className="w-full pl-10 pr-4 h-12 text-base rounded-md"
            />
          </div>
        </DialogHeader>
        <div className="min-h-[400px] max-h-[60vh] overflow-y-auto animate-in fade-in duration-200">
          {showInitialState ? (
            <div className="p-10 text-center text-muted-foreground">
              <p>輸入關鍵字來搜尋整個知識庫。</p>
            </div>
          ) : showNoResults ? (
            <div className="p-10 text-center text-muted-foreground">
              <p>找不到與 "{debouncedQuery}" 相關的結果。</p>
            </div>
          ) : (
            <ul>
              {results.map((result, index) => (
                <li 
                  key={index}
                  onClick={() => handleResultClick(result.path)}
                  className="p-4 border-b border-border/50 hover:bg-muted/50 cursor-pointer transition-colors flex items-start gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className='mt-1'>{getResultIcon(result.type)}</div>
                  <div>
                    <div className="text-xs font-semibold text-primary tracking-wide">{result.category}</div>
                    <h4 className="font-bold text-foreground mb-1">{result.title}</h4>
                    <p className="text-sm text-muted-foreground line-clamp-2" title={result.content}>
                      {result.content}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
