import { useState, useEffect } from 'react';

type ViewMode = 'pc' | 'sp';

const STORAGE_KEY = 'app-view-mode';

/**
 * ViewModeをlocalStorageと同期するカスタムフック
 * ページ遷移してもviewModeが維持される
 */
export const useViewMode = (): [ViewMode, (mode: ViewMode) => void] => {
  // 初期値をlocalStorageから取得、なければ'pc'
  const [viewMode, setViewModeState] = useState<ViewMode>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      return (stored === 'sp' || stored === 'pc') ? stored : 'pc';
    }
    return 'pc';
  });

  // viewModeが変更されたらlocalStorageに保存
  const setViewMode = (mode: ViewMode) => {
    setViewModeState(mode);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, mode);
    }
  };

  return [viewMode, setViewMode];
};
