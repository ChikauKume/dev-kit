import { useState, useMemo } from 'react';
import { generateInitialDataListItems } from '../mocks/dashboardData';
import { FlashMessage } from './pageState';

interface UseDataListProps {
  dataListCurrentPage: number;
  setDataListCurrentPage: (page: number) => void;
  dataListItemsPerPage: number;
  selectedDataListItems: string[];
  setSelectedDataListItems: (items: string[]) => void;
  dataListActiveFilters: {
    keyword: string;
    category: string;
    dateFrom: string;
    dateTo: string;
    status: string;
  };
  setDataListActiveFilters: (filters: {
    keyword: string;
    category: string;
    dateFrom: string;
    dateTo: string;
    status: string;
  }) => void;
  dataListSearchKeyword: string;
  setDataListSearchKeyword: (keyword: string) => void;
  dataListSearchCategory: string;
  setDataListSearchCategory: (category: string) => void;
  dataListSearchDateFrom: string;
  setDataListSearchDateFrom: (date: string) => void;
  dataListSearchDateTo: string;
  setDataListSearchDateTo: (date: string) => void;
  dataListSearchStatus: string;
  setDataListSearchStatus: (status: string) => void;
  setIsSearchFilterOpen: (open: boolean) => void;
  sortConfig: { key: string | null; direction: 'asc' | 'desc' | null };
  setSortConfig: (config: { key: string | null; direction: 'asc' | 'desc' | null }) => void;
  setShowDataListDeleteModal: (show: boolean) => void;
  setFlashMessage: (message: FlashMessage | null) => void;
}

export const useDataList = (props: UseDataListProps) => {
  const [allDataListItems, setAllDataListItems] = useState(generateInitialDataListItems());
  const itemsPerPage = 10;

  // データリストフィルタリング
  const filteredDataListItems = useMemo(() => {
    return allDataListItems.filter(item => {
      // キーワード検索（ID、タイトル、担当者で検索）
      const matchesKeyword = !props.dataListActiveFilters.keyword ||
        item.id.toLowerCase().includes(props.dataListActiveFilters.keyword.toLowerCase()) ||
        item.title.toLowerCase().includes(props.dataListActiveFilters.keyword.toLowerCase()) ||
        item.assignee.toLowerCase().includes(props.dataListActiveFilters.keyword.toLowerCase());

      // カテゴリーフィルター（今回は優先度で代用）
      const matchesCategory = !props.dataListActiveFilters.category ||
        item.priority === props.dataListActiveFilters.category;

      // ステータスフィルター
      const matchesStatus = !props.dataListActiveFilters.status ||
        item.status === props.dataListActiveFilters.status;

      // 日付範囲フィルター（作成日または更新日でチェック）
      const matchesDateFrom = !props.dataListActiveFilters.dateFrom ||
        item.updated >= props.dataListActiveFilters.dateFrom ||
        item.created >= props.dataListActiveFilters.dateFrom;

      const matchesDateTo = !props.dataListActiveFilters.dateTo ||
        item.updated <= props.dataListActiveFilters.dateTo ||
        item.created <= props.dataListActiveFilters.dateTo;

      return matchesKeyword && matchesCategory && matchesStatus && matchesDateFrom && matchesDateTo;
    });
  }, [allDataListItems, props.dataListActiveFilters]);

  // ソート処理
  const handleDataListSort = (key: string) => {
    let direction: 'asc' | 'desc' | null = 'asc';
    if (props.sortConfig.key === key && props.sortConfig.direction === 'asc') {
      direction = 'desc';
    } else if (props.sortConfig.key === key && props.sortConfig.direction === 'desc') {
      direction = null;
    }
    props.setSortConfig({ key: direction ? key : null, direction });
  };

  // ソート済みデータ
  const sortedDataListItems = useMemo(() => {
    if (!props.sortConfig.key || !props.sortConfig.direction) {
      return [...filteredDataListItems];
    }

    return [...filteredDataListItems].sort((a, b) => {
      const aValue = a[props.sortConfig.key as keyof typeof a];
      const bValue = b[props.sortConfig.key as keyof typeof b];

      if (aValue === null || aValue === undefined) return 1;
      if (bValue === null || bValue === undefined) return -1;

      if (aValue < bValue) {
        return props.sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return props.sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [filteredDataListItems, props.sortConfig]);

  const totalDataListItems = sortedDataListItems.length;
  const totalDataListPages = Math.ceil(totalDataListItems / props.dataListItemsPerPage);
  const dataListStartIndex = (props.dataListCurrentPage - 1) * props.dataListItemsPerPage;
  const dataListEndIndex = dataListStartIndex + props.dataListItemsPerPage;
  const currentDataListItems = sortedDataListItems.slice(dataListStartIndex, dataListEndIndex);

  // チェックボックス選択ロジック
  const handleSelectAllDataList = () => {
    if (props.selectedDataListItems.length === allDataListItems.length) {
      // 全て選択されている場合は解除
      props.setSelectedDataListItems([]);
    } else {
      // 全データを選択（ページネーションの境界を超える）
      props.setSelectedDataListItems(allDataListItems.map(item => item.id));
    }
  };

  const handleSelectDataListItem = (itemId: string) => {
    if (props.selectedDataListItems.includes(itemId)) {
      props.setSelectedDataListItems(props.selectedDataListItems.filter(id => id !== itemId));
    } else {
      props.setSelectedDataListItems([...props.selectedDataListItems, itemId]);
    }
  };

  const isAllDataListSelected = allDataListItems.length > 0 &&
    props.selectedDataListItems.length === allDataListItems.length;

  // データリスト検索実行
  const handleDataListSearch = () => {
    props.setDataListActiveFilters({
      keyword: props.dataListSearchKeyword,
      category: props.dataListSearchCategory,
      dateFrom: props.dataListSearchDateFrom,
      dateTo: props.dataListSearchDateTo,
      status: props.dataListSearchStatus
    });
    props.setDataListCurrentPage(1); // 検索時は1ページ目に戻る
    props.setIsSearchFilterOpen(true); // 検索実行後は開いた状態を維持
  };

  const handleDataListSearchClear = () => {
    props.setDataListSearchKeyword('');
    props.setDataListSearchCategory('');
    props.setDataListSearchDateFrom('');
    props.setDataListSearchDateTo('');
    props.setDataListSearchStatus('');
    props.setDataListActiveFilters({
      keyword: '',
      category: '',
      dateFrom: '',
      dateTo: '',
      status: ''
    });
    props.setDataListCurrentPage(1);
  };

  // データリスト削除処理
  const handleDataListDelete = () => {
    const deletedCount = props.selectedDataListItems.length;

    // 選択されたアイテムをリストから削除
    setAllDataListItems(prevItems =>
      prevItems.filter(item => !props.selectedDataListItems.includes(item.id))
    );
    // モーダルを閉じて選択状態をクリア
    props.setShowDataListDeleteModal(false);
    props.setSelectedDataListItems([]);
    // 削除後、現在のページが空になった場合は前のページに戻る
    props.setDataListCurrentPage(prev => {
      const remainingItems = allDataListItems.filter(item => !props.selectedDataListItems.includes(item.id)).length;
      const maxPage = Math.ceil(remainingItems / itemsPerPage);
      return prev > maxPage ? Math.max(1, maxPage) : prev;
    });

    // フラッシュメッセージを表示
    props.setFlashMessage({
      type: 'success',
      message: `選択した${deletedCount}件のデータを削除しました`
    });

    // 3秒後に自動的にメッセージを消す
    setTimeout(() => {
      props.setFlashMessage(null);
    }, 3000);

    // 実際のプロジェクトではAPIリクエストを送信
  };

  return {
    allDataListItems,
    setAllDataListItems,
    filteredDataListItems,
    sortedDataListItems,
    currentDataListItems,
    totalDataListItems,
    totalDataListPages,
    handleDataListSort,
    handleSelectAllDataList,
    handleSelectDataListItem,
    isAllDataListSelected,
    handleDataListSearch,
    handleDataListSearchClear,
    handleDataListDelete
  };
};
