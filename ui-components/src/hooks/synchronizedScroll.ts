import { useRef, useState, useEffect, RefObject } from 'react';

interface UseSynchronizedScrollReturn {
  headerRef: RefObject<HTMLDivElement>;
  bodyRef: RefObject<HTMLDivElement>;
  showScrollbar: boolean;
  isScrollbarDetectionComplete: boolean;
  handleHeaderScroll: (e: React.UIEvent<HTMLDivElement>) => void;
  handleBodyScroll: (e: React.UIEvent<HTMLDivElement>) => void;
}

/**
 * テーブルのヘッダーとボディのスクロールを同期するカスタムフック
 *
 * @param data テーブルデータ（判定に使用）
 * @param needsScroll スクロールの必要性（外部から指定される場合）
 * @returns スクロール同期に必要なrefs、ハンドラー、状態
 */
export function useSynchronizedScroll(
  data: unknown[] = [],
  needsScroll: boolean | null = null
): UseSynchronizedScrollReturn {
  const headerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [showScrollbar, setShowScrollbar] = useState<boolean>(false);
  const [isScrollbarDetectionComplete, setIsScrollbarDetectionComplete] = useState<boolean>(false);

  // スクロールバーの表示状態をチェック
  useEffect(() => {
    const checkScrollbar = () => {
      // 外部からneedsScrollが指定されている場合はそれを使用
      if (needsScroll !== null) {
        setShowScrollbar(needsScroll);
      } else if (bodyRef.current) {
        // そうでない場合は従来の判定ロジック
        const hasVerticalScrollbar = bodyRef.current.scrollHeight > bodyRef.current.clientHeight;
        setShowScrollbar(hasVerticalScrollbar);
      }
      setIsScrollbarDetectionComplete(true);
    };

    // 非常に短い遅延で判定
    const timeoutId = setTimeout(checkScrollbar, 50);

    // リサイズ時にもチェック
    window.addEventListener('resize', checkScrollbar);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', checkScrollbar);
    };
  }, [data, needsScroll]);

  // ヘッダーのスクロールをボディに同期
  const handleHeaderScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (bodyRef.current && e.target !== bodyRef.current) {
      bodyRef.current.scrollLeft = (e.target as HTMLDivElement).scrollLeft;
    }
  };

  // ボディのスクロールをヘッダーに同期
  const handleBodyScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (headerRef.current && e.target !== headerRef.current) {
      headerRef.current.scrollLeft = (e.target as HTMLDivElement).scrollLeft;
    }
  };

  return {
    headerRef,
    bodyRef,
    showScrollbar,
    isScrollbarDetectionComplete,
    handleHeaderScroll,
    handleBodyScroll,
  };
}
