import { useEffect } from 'react';
import { ActiveTab, FormData } from './pageState';

interface UseEffectsProps {
  showNotificationDropdown: boolean;
  notificationRef: React.RefObject<HTMLDivElement>;
  setShowNotificationDropdown: (show: boolean) => void;
  activeTab: ActiveTab;
  setFormData: (data: FormData) => void;
}

export const useEffects = (props: UseEffectsProps) => {
  // 外部クリックで通知ドロップダウンを閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (props.notificationRef.current && !props.notificationRef.current.contains(event.target as Node)) {
        props.setShowNotificationDropdown(false);
      }
    };

    if (props.showNotificationDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [props.showNotificationDropdown, props.notificationRef, props.setShowNotificationDropdown]);

  // データ編集画面でフォームに初期値をセット
  useEffect(() => {
    if (props.activeTab === 'data-edit') {
      props.setFormData({
        title: 'Webサイトリニューアル',
        description: 'コーポレートサイトの全面リニューアルプロジェクト。レスポンシブデザイン対応とSEO最適化を実施します。',
        category: 'web',
        status: 'in-progress',
        priority: 'high',
        tags: 'Web, デザイン, SEO',
        startDate: '2024-09-15',
        endDate: '2024-12-31'
      });
    }
  }, [props.activeTab, props.setFormData]);
};
