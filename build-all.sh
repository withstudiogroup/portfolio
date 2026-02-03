#!/bin/bash

# 모든 프로젝트를 빌드하고 메인 포트폴리오에 통합하는 스크립트
# 실행: bash build-all.sh

set -e

BASE_DIR="C:/Users/user/Documents/claudecode-project"
MAIN_PROJECT="$BASE_DIR/portfolio4"
OUTPUT_DIR="$MAIN_PROJECT/out"

echo "🚀 전체 프로젝트 빌드 시작..."

# 메인 포트폴리오 빌드
echo "📦 메인 포트폴리오 빌드 중..."
cd "$MAIN_PROJECT"
npm run build

# 각 서브 프로젝트 빌드 및 복사
declare -A PROJECTS=(
  ["hotel-site"]="$BASE_DIR/hotel-site"
  ["resort-site"]="$BASE_DIR/resort-site"
  ["studio-site"]="$BASE_DIR/studio-site"
  ["shop-site"]="$BASE_DIR/shop-site"
  ["photopick"]="$BASE_DIR/photopick"
  # photopick-v2는 별도 Cloudflare Pages 프로젝트로 배포
)

for PROJECT_NAME in "${!PROJECTS[@]}"; do
  PROJECT_PATH="${PROJECTS[$PROJECT_NAME]}"
  echo "📦 $PROJECT_NAME 빌드 중..."

  cd "$PROJECT_PATH"
  npm run build

  # 빌드 결과를 메인 out 폴더로 복사
  echo "📁 $PROJECT_NAME → out/$PROJECT_NAME 복사 중..."
  cp -r "$PROJECT_PATH/out/$PROJECT_NAME" "$OUTPUT_DIR/"
done

echo "✅ 전체 빌드 완료!"
echo "📂 출력 위치: $OUTPUT_DIR"
echo ""
echo "배포 방법:"
echo "  1. Vercel에서 portfolio4 프로젝트 배포"
echo "  2. 또는 out 폴더를 정적 호스팅에 업로드"
