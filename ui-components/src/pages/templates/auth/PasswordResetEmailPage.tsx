import React from 'react';
import TemplateNavigation from '../../../components/navigation/TemplateNavigation';
import { useViewMode } from '../../../hooks/useViewMode';
import Icon from '../../../components/icons/Icon';

/**
 * PasswordResetEmailPage Component
 *
 * パスワードリセットメールのHTMLテンプレート表示ページ
 *
 * **用途**: パスワード再設定メールのHTMLテンプレートをプレビューするためのページ
 *
 * @example Laravel実装例
 * ```php
 * // resources/views/emails/password-reset.blade.php
 * // 以下のHTMLをBladeテンプレートとして使用
 * ```
 *
 * @example カスタマイズ可能なProps
 * ```tsx
 * <PasswordResetEmailPage
 *   userName="山田 太郎"
 *   resetUrl="https://example.com/reset-password?token=abc123"
 *   expirationHours={24}
 * />
 * ```
 */
interface PasswordResetEmailPageProps {
  hideNavigation?: boolean;
  userName?: string;
  resetUrl?: string;
  expirationHours?: number;
  supportEmail?: string;
  companyName?: string;
}

const PasswordResetEmailPage: React.FC<PasswordResetEmailPageProps> = ({
  hideNavigation = false,
  userName = 'ユーザー',
  resetUrl = 'https://example.com/reset-password?token=abc123def456',
  expirationHours = 24,
  supportEmail = 'support@example.com',
  companyName = 'AppName',
}) => {
  const [viewMode, setViewMode] = useViewMode();

  return (
    <div className={viewMode === 'sp' ? 'force-mobile' : ''}>
      <TemplateNavigation
        hide={hideNavigation}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />

      <div className="email-preview-container">
        {/* Email Template */}
        <div className="email-template">
          <table
            cellPadding="0"
            cellSpacing="0"
            style={{
              width: '100%',
              maxWidth: '600px',
              margin: '0 auto',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            }}
          >
            <tbody>
              {/* Header */}
              <tr>
                <td style={{ padding: '20px', textAlign: 'center', backgroundColor: '#15346D' }}>
                  <h1 style={{ margin: 0, color: '#ffffff', fontSize: '24px', fontWeight: '600' }}>
                    {companyName}
                  </h1>
                </td>
              </tr>

              {/* Body */}
              <tr>
                <td style={{ padding: '40px 30px', backgroundColor: '#ffffff' }}>
                  <h2 style={{ margin: '0 0 20px 0', color: '#1f2937', fontSize: '20px', fontWeight: '600' }}>
                    パスワード再設定のご案内
                  </h2>

                  <p style={{ margin: '0 0 20px 0', color: '#4b5563', fontSize: '16px', lineHeight: '1.6' }}>
                    {userName} 様
                  </p>

                  <p style={{ margin: '0 0 20px 0', color: '#4b5563', fontSize: '16px', lineHeight: '1.6' }}>
                    以下のボタンをクリックして、新しいパスワードを設定してください。
                  </p>

                  {/* CTA Button */}
                  <table cellPadding="0" cellSpacing="0" style={{ width: '100%', margin: '30px 0' }}>
                    <tbody>
                      <tr>
                        <td style={{ textAlign: 'center' }}>
                          <a
                            href={resetUrl}
                            style={{
                              display: 'inline-block',
                              padding: '14px 40px',
                              backgroundColor: '#15346D',
                              color: '#ffffff',
                              textDecoration: 'none',
                              borderRadius: '6px',
                              fontSize: '16px',
                              fontWeight: '600',
                            }}
                          >
                            パスワードを再設定
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div
                    style={{
                      margin: '30px 0',
                      padding: '16px',
                      backgroundColor: '#fef3c7',
                      borderLeft: '4px solid #f59e0b',
                      borderRadius: '4px',
                    }}
                  >
                    <p style={{ margin: 0, color: '#92400e', fontSize: '14px', lineHeight: '1.6' }}>
                      <strong>重要:</strong> このリンクは{expirationHours}時間後に無効となります。
                      <br />
                      パスワード再設定をリクエストしていない場合は、このメールを無視してください。
                    </p>
                  </div>

                  <p style={{ margin: '20px 0 0 0', color: '#6b7280', fontSize: '14px', lineHeight: '1.6' }}>
                    ご不明な点がございましたら、お気軽にお問い合わせください。
                  </p>
                </td>
              </tr>

              {/* Footer */}
              <tr>
                <td
                  style={{
                    padding: '30px 20px',
                    textAlign: 'center',
                    backgroundColor: '#f9fafb',
                    borderTop: '1px solid #e5e7eb',
                  }}
                >
                  <p style={{ margin: '0 0 10px 0', color: '#6b7280', fontSize: '14px' }}>
                    {companyName} カスタマーサポート
                  </p>
                  <p style={{ margin: '0 0 10px 0', color: '#9ca3af', fontSize: '12px' }}>
                    お問い合わせ:{' '}
                    <a href={`mailto:${supportEmail}`} style={{ color: '#15346D', textDecoration: 'none' }}>
                      {supportEmail}
                    </a>
                  </p>
                  <p style={{ margin: '10px 0 0 0', color: '#9ca3af', fontSize: '12px' }}>
                    このメールに心当たりがない場合は、破棄してください。
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <style>{`
        .email-preview-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: var(--spacing-8);
        }

        .email-preview-header {
          text-align: center;
          margin-bottom: var(--spacing-8);
        }

        .email-preview-title {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-3);
          font-size: var(--font-size-3xl);
          font-weight: var(--font-weight-bold);
          color: var(--color-neutral-900);
          margin-bottom: var(--spacing-2);
        }

        .email-preview-subtitle {
          font-size: var(--font-size-lg);
          color: var(--color-neutral-600);
        }

        .email-template {
          background: #f3f4f6;
          padding: var(--spacing-8);
          border-radius: var(--radius-lg);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 768px) {
          .email-preview-container {
            padding: var(--spacing-4);
          }

          .email-preview-title {
            font-size: var(--font-size-2xl);
          }

          .email-template {
            padding: var(--spacing-4);
          }
        }

        .force-mobile .email-preview-container {
          padding: var(--spacing-4) !important;
          max-width: 428px !important;
        }

        .force-mobile .email-template {
          padding: var(--spacing-4) !important;
        }

        .force-mobile .email-template table {
          max-width: 100% !important;
        }

        .force-mobile .email-preview-title {
          font-size: var(--font-size-xl) !important;
        }

        .force-mobile .email-preview-subtitle {
          font-size: var(--font-size-base) !important;
        }
      `}</style>
    </div>
  );
};

// Helper function to generate email HTML template string
function getEmailHtmlTemplate(
  userName: string,
  resetUrl: string,
  expirationHours: number,
  supportEmail: string,
  companyName: string
): string {
  return `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>パスワード再設定のご案内</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6;">
  <table cellpadding="0" cellspacing="0" style="width: 100%; max-width: 600px; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
    <tbody>
      <!-- Header -->
      <tr>
        <td style="padding: 20px; text-align: center; background-color: #15346D;">
          <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">
            ${companyName}
          </h1>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="padding: 40px 30px; background-color: #ffffff;">
          <h2 style="margin: 0 0 20px 0; color: #1f2937; font-size: 20px; font-weight: 600;">
            パスワード再設定のご案内
          </h2>

          <p style="margin: 0 0 20px 0; color: #4b5563; font-size: 16px; line-height: 1.6;">
            ${userName} 様
          </p>

          <p style="margin: 0 0 20px 0; color: #4b5563; font-size: 16px; line-height: 1.6;">
            以下のボタンをクリックして、新しいパスワードを設定してください。
          </p>

          <!-- CTA Button -->
          <table cellpadding="0" cellspacing="0" style="width: 100%; margin: 30px 0;">
            <tbody>
              <tr>
                <td style="text-align: center;">
                  <a href="${resetUrl}" style="display: inline-block; padding: 14px 40px; background-color: #15346D; color: #ffffff; text-decoration: none; border-radius: 6px; font-size: 16px; font-weight: 600;">
                    パスワードを再設定
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <div style="margin: 30px 0; padding: 16px; background-color: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 4px;">
            <p style="margin: 0; color: #92400e; font-size: 14px; line-height: 1.6;">
              <strong>重要:</strong> このリンクは${expirationHours}時間後に無効となります。<br>
              パスワード再設定をリクエストしていない場合は、このメールを無視してください。
            </p>
          </div>

          <p style="margin: 20px 0 0 0; color: #6b7280; font-size: 14px; line-height: 1.6;">
            ご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="padding: 30px 20px; text-align: center; background-color: #f9fafb; border-top: 1px solid #e5e7eb;">
          <p style="margin: 0 0 10px 0; color: #6b7280; font-size: 14px;">
            ${companyName} カスタマーサポート
          </p>
          <p style="margin: 0 0 10px 0; color: #9ca3af; font-size: 12px;">
            お問い合わせ: <a href="mailto:${supportEmail}" style="color: #15346D; text-decoration: none;">${supportEmail}</a>
          </p>
          <p style="margin: 10px 0 0 0; color: #9ca3af; font-size: 12px;">
            このメールに心当たりがない場合は、破棄してください。
          </p>
        </td>
      </tr>
    </tbody>
  </table>
</body>
</html>`;
}

export default PasswordResetEmailPage;
