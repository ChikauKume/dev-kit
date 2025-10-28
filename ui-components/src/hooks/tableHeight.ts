import { useState, useEffect, useRef, RefObject } from 'react';

interface UseTableHeightOptions {
  minHeight?: number;
  footerHeight?: number | null;
  bottomMargin?: number;
  defaultRowHeight?: number;
  searchHeight?: number;
  tabsHeight?: number;
  paginationHeight?: number;
  cardPadding?: number;
}

interface UseTableHeightReturn {
  tableHeight: string;
  needsScroll: boolean;
  containerRef: RefObject<HTMLDivElement>;
}

/**
 * テーブルの高さを動的に計算するカスタムフック
 * ビューポートの高さとフッターの位置を考慮して最適な高さを自動調整
 * 行数に基づいてスクロールの必要性も判定
 *
 * @param options - 設定オプション
 * @param options.minHeight - 最小高さ（デフォルト: 400）
 * @param options.footerHeight - フッターの高さ（デフォルト: null で自動検出）
 * @param options.bottomMargin - 下部の余白（デフォルト: 8）
 * @param options.defaultRowHeight - デフォルトの行高さ（デフォルト: 52）
 * @param options.searchHeight - 検索パネルの高さ（デフォルト: 0）
 * @param options.tabsHeight - タブナビゲーションの高さ（デフォルト: 0）
 * @param options.paginationHeight - ページネーションの高さ（デフォルト: 0）
 * @param options.cardPadding - カードのパディング（デフォルト: 0）
 * @returns tableHeight, needsScroll, containerRef
 */
export function useTableHeight(options: UseTableHeightOptions = {}): UseTableHeightReturn {
  const {
    minHeight = 400,           // 最小高さ
    footerHeight = null,       // フッターの高さ（null の場合は自動検出）
    bottomMargin = 8,          // 下部の余白
    defaultRowHeight = 52,     // デフォルトの行高さ
    searchHeight = 0,          // 検索パネルの高さ
    tabsHeight = 0,            // タブナビゲーションの高さ
    paginationHeight = 0,      // ページネーションの高さ
    cardPadding = 0            // カードのパディング
  } = options;

  const [tableHeight, setTableHeight] = useState<string>(`${minHeight}px`);
  const [needsScroll, setNeedsScroll] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // SSR対応：windowが存在しない場合は処理しない
    if (typeof window === 'undefined') return;

    // 高さを計算する関数
    const calculateHeight = () => {
      if (!containerRef.current) return;

      // ビューポートの高さ
      const viewportHeight = window.innerHeight;

      // テーブルコンテナの位置を取得
      const rect = containerRef.current.getBoundingClientRect();
      const topPosition = rect.top;

      // 各コンポーネントの高さを実測またはオプション値から取得
      // 検索パネルの高さ
      const searchPanel = containerRef.current.querySelector('.search-filter-panel');
      const actualSearchHeight = searchPanel ? (searchPanel as HTMLElement).offsetHeight : searchHeight;

      // タブナビゲーションの高さ
      const tabsNav = containerRef.current.querySelector('.tab-navigation');
      const actualTabsHeight = tabsNav ? (tabsNav as HTMLElement).offsetHeight : tabsHeight;

      // テーブルカードの要素
      const tableCard = containerRef.current.querySelector('.bg-white.rounded-lg.shadow-sm');
      let actualCardPadding = cardPadding;
      if (tableCard) {
        const cardStyles = window.getComputedStyle(tableCard);
        const paddingTop = parseFloat(cardStyles.paddingTop) || 0;
        const paddingBottom = parseFloat(cardStyles.paddingBottom) || 0;
        actualCardPadding = paddingTop + paddingBottom;
      }

      // テーブルヘッダーの高さ
      const tableHeader = containerRef.current.querySelector('.bg-white.rounded-lg.shadow-sm thead');
      const headerHeight = tableHeader ? (tableHeader as HTMLElement).offsetHeight : 48; // デフォルト48px

      // ページネーションの高さ
      const pagination = containerRef.current.querySelector('.pagination-panel');
      const actualPaginationHeight = pagination ? (pagination as HTMLElement).offsetHeight : paginationHeight;

      // フッターの高さを自動検出または指定値を使用
      let actualFooterHeight = footerHeight;
      if (actualFooterHeight === null) {
        const footer = document.querySelector('footer');
        if (footer) {
          actualFooterHeight = (footer as HTMLElement).offsetHeight;
        } else {
          // フッターが見つからない場合のデフォルト値
          actualFooterHeight = 48;
        }
      }

      // 利用可能な高さを計算
      // ビューポート高さ - テーブル上部位置 - フッター高さ - 余白
      const availableHeight = viewportHeight - topPosition - actualFooterHeight - bottomMargin;

      // テーブル内の行を取得
      const tbody = containerRef.current.querySelector('tbody');
      const rows = tbody ? tbody.querySelectorAll('tr') : [];
      const rowCount = rows.length;

      // 行の高さを取得（最初の行から、なければデフォルト値）
      let actualRowHeight = defaultRowHeight;
      if (rows.length > 0) {
        actualRowHeight = (rows[0] as HTMLElement).offsetHeight || defaultRowHeight;
      }

      // テーブルボディに必要な高さを計算
      const requiredBodyHeight = rowCount * actualRowHeight;

      // 利用可能なボディの高さを計算
      // 利用可能高さ - 検索パネル - タブ - ヘッダー - ページネーション - カードパディング - 安全マージン
      const safetyMargin = 8; // 安全マージンを小さくしてより多くの空間を利用
      const availableBodyHeight = availableHeight - actualSearchHeight - actualTabsHeight - headerHeight - actualPaginationHeight - actualCardPadding - safetyMargin;

      // スクロールが必要かどうかを判定（バッファを追加してより正確な判定）
      const scrollBuffer = 20; // スクロールバー表示の余裕を持たせる
      const scrollNeeded = requiredBodyHeight > (availableBodyHeight + scrollBuffer);

      // 最終的な高さを決定
      let finalHeight: number;
      if (scrollNeeded) {
        // スクロールが必要な場合は利用可能な高さ全体を使用
        finalHeight = availableBodyHeight;
      } else {
        // スクロールが不要な場合は必要な分だけの高さ
        finalHeight = requiredBodyHeight;
      }

      // 最小高さを保証
      finalHeight = Math.max(minHeight, finalHeight);

      setTableHeight(`${finalHeight}px`);
      setNeedsScroll(scrollNeeded);
    };

    // ResizeObserverの作成（存在チェック付き）
    let resizeObserver: ResizeObserver | null = null;
    if (window.ResizeObserver) {
      resizeObserver = new ResizeObserver(() => {
        // 要素のサイズが変更されたら再計算
        requestAnimationFrame(calculateHeight);
      });

      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }
    }

    // ウィンドウのリサイズも監視
    const handleWindowResize = () => {
      requestAnimationFrame(calculateHeight);
    };

    // 初回計算（複数回実行して確実性を高める）
    setTimeout(calculateHeight, 0);
    setTimeout(calculateHeight, 100);
    setTimeout(calculateHeight, 300);

    // イベントリスナー登録
    window.addEventListener('resize', handleWindowResize);

    // ページ内容の変更を検知（オプション）
    const handleMutation = () => {
      requestAnimationFrame(calculateHeight);
    };

    const mutationObserver = new MutationObserver(handleMutation);
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: false
    });

    // クリーンアップ
    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      window.removeEventListener('resize', handleWindowResize);
      mutationObserver.disconnect();
    };
  }, [minHeight, footerHeight, bottomMargin, defaultRowHeight, searchHeight, tabsHeight, paginationHeight, cardPadding]);

  return { tableHeight, needsScroll, containerRef };
}
