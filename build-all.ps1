# 모든 프로젝트를 빌드하고 메인 포트폴리오에 통합하는 PowerShell 스크립트
# 실행: .\build-all.ps1

$ErrorActionPreference = "Stop"

$BASE_DIR = "C:\Users\user\Documents\claudecode-project"
$MAIN_PROJECT = "$BASE_DIR\portfolio4"
$OUTPUT_DIR = "$MAIN_PROJECT\out"

Write-Host "🚀 전체 프로젝트 빌드 시작..." -ForegroundColor Cyan

# 메인 포트폴리오 빌드
Write-Host "📦 메인 포트폴리오 빌드 중..." -ForegroundColor Yellow
Set-Location $MAIN_PROJECT
npm run build

# 서브 프로젝트 목록 (폴더명 = basePath)
$PROJECTS = @{
    "hotel" = "$BASE_DIR\hotel-site"
    "resort" = "$BASE_DIR\resort-site"
    "studio" = "$BASE_DIR\studio-site"
    "shop" = "$BASE_DIR\shop-site"
    "photopick" = "$BASE_DIR\photopick"
    # photopick-v2는 별도 Cloudflare Pages 프로젝트로 배포
}

foreach ($PROJECT_NAME in $PROJECTS.Keys) {
    $PROJECT_PATH = $PROJECTS[$PROJECT_NAME]

    Write-Host "📦 $PROJECT_NAME 빌드 중..." -ForegroundColor Yellow
    Set-Location $PROJECT_PATH
    npm run build

    # 빌드 결과를 메인 out 폴더로 복사
    $SOURCE = "$PROJECT_PATH\out\$PROJECT_NAME"
    $DEST = "$OUTPUT_DIR\$PROJECT_NAME"

    Write-Host "📁 $PROJECT_NAME → out\$PROJECT_NAME 복사 중..." -ForegroundColor Green

    if (Test-Path $DEST) {
        Remove-Item -Recurse -Force $DEST
    }
    Copy-Item -Recurse $SOURCE $DEST
}

Set-Location $MAIN_PROJECT

Write-Host ""
Write-Host "✅ 전체 빌드 완료!" -ForegroundColor Green
Write-Host "📂 출력 위치: $OUTPUT_DIR" -ForegroundColor Cyan
Write-Host ""
Write-Host "URL 구조:" -ForegroundColor White
Write-Host "  /          - 메인 포트폴리오" -ForegroundColor Gray
Write-Host "  /studio    - 사진 스튜디오" -ForegroundColor Gray
Write-Host "  /hotel     - 호텔 예약" -ForegroundColor Gray
Write-Host "  /resort    - 리조트" -ForegroundColor Gray
Write-Host "  /shop      - 전자제품 쇼핑몰" -ForegroundColor Gray
Write-Host "  /photopick - 스튜디오 예약 플랫폼" -ForegroundColor Gray
Write-Host ""
Write-Host "별도 배포:" -ForegroundColor White
Write-Host "  photopick-v2.withstudiogroup.com - PhotoPick 풀스택 (별도 Cloudflare Pages)" -ForegroundColor Gray
