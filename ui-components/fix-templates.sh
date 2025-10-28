#!/bin/bash

# すべてのテンプレートファイルからuseNavigate依存を削除するスクリプト

FILES=(
  "src/pages/templates/auth/LoginPage.tsx"
  "src/pages/templates/auth/ForgotPasswordPage.tsx"
  "src/pages/templates/auth/ResetPasswordPage.tsx"
  "src/pages/templates/auth/SignupConfirmPage.tsx"
  "src/pages/templates/auth/SignupCompletePage.tsx"
  "src/pages/templates/error/Error404Page.tsx"
  "src/pages/templates/error/Error505Page.tsx"
  "src/pages/templates/info/QnaPage.tsx"
  "src/pages/templates/info/PrivacyPage.tsx"
  "src/pages/templates/info/TermsPage.tsx"
  "src/pages/templates/info/CommercialPage.tsx"
  "src/pages/templates/dashboard/DashboardPage.tsx"
  "src/pages/templates/settings/SettingsPage.tsx"
  "src/pages/templates/data/DetailPage.tsx"
  "src/pages/templates/data/DetailPageExample.tsx"
)

for FILE in "${FILES[@]}"; do
  if [ -f "$FILE" ]; then
    echo "Processing $FILE..."

    # useNavigate import削除
    sed -i '' "/import.*useNavigate.*from.*react-router-dom/d" "$FILE"

    # const navigate = useNavigate(); 削除
    sed -i '' "/const navigate = useNavigate();/d" "$FILE"

    # navigate('/xxx') を window.location.href に置換
    sed -i '' 's/navigate(\([^)]*\))/window.location.href = \1/g' "$FILE"

    echo "✓ $FILE fixed"
  fi
done

echo "All files processed!"
