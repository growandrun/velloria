# Velloria — Fine Diamond Jewellery

> Maison de Haute Joaillerie · A bilingual luxury landing page for diamond tennis bracelets.
> Purchases are completed through eBay listings — this site exists to build desire, not to take payment.

**Live URL:** *(after deploy)* `https://velloria.vercel.app`
**Languages:** English (`/`), 한국어 (`/ko/`)
**Stack:** Static HTML / CSS / vanilla JS — no build step, no dependencies.

---

## 폴더 구조

```
velloria/
├── index.html              # 영어 랜딩 페이지
├── ko/
│   └── index.html          # 한국어 랜딩 페이지
├── css/
│   └── styles.css          # 단일 스타일시트 (디자인 토큰 + 컴포넌트)
├── js/
│   ├── ebay-links.js       # ★ 6개 eBay 리스팅 URL 관리 ★
│   └── main.js             # 인터랙션 (드로어, 스크롤 리빌, eBay 링크 주입)
├── assets/
│   └── products/           # 7장의 최적화된 WebP 이미지
├── vercel.json             # Vercel 정적 호스팅 설정
├── .gitignore
└── README.md
```

---

## ① 가장 중요한 단계 — eBay 링크 연결

`js/ebay-links.js` 파일을 열어 6개의 빈 URL을 본인 리스팅으로 교체하세요:

```js
window.VELLORIA_EBAY = {
  fallbackSearch: "https://www.ebay.com/sch/i.html?_nkw=diamond+tennis+bracelet+platinum",

  "eternite-grand":    "https://www.ebay.com/itm/XXXXXXXXXXXX",  // ← 본인 리스팅 URL
  "solitaire-riviere": "https://www.ebay.com/itm/XXXXXXXXXXXX",
  "atelier-line":      "https://www.ebay.com/itm/XXXXXXXXXXXX",
  "maison-signature":  "https://www.ebay.com/itm/XXXXXXXXXXXX",
  "couture-eclat":     "https://www.ebay.com/itm/XXXXXXXXXXXX",
  "classique-riviere": "https://www.ebay.com/itm/XXXXXXXXXXXX"
};
```

- 비어 있는 키는 자동으로 `fallbackSearch` URL로 폴백됩니다 (eBay 검색 결과).
- 본인 셀러 페이지로 좁히려면 fallbackSearch에 `&_ssn=YOUR_SELLER_ID` 파라미터를 추가하세요.
- 이 파일 한 곳만 수정하면 **한국어/영어 페이지 모두에 자동 반영**됩니다.

---

## ② 로컬에서 미리보기

Python이 설치되어 있다면:

```powershell
python -m http.server 4173
```

브라우저에서 [http://localhost:4173](http://localhost:4173) 접속.

또는 Node.js가 있다면:

```bash
npx serve .
```

---

## ③ GitHub에 올리기

처음 한 번만 (이미 초기화되어 있다면 4번부터):

```powershell
git init
git add .
git commit -m "Initial commit: Velloria landing page"
git branch -M main
```

GitHub에서 새 저장소 생성 후:

```powershell
git remote add origin https://github.com/<YOUR_USERNAME>/velloria.git
git push -u origin main
```

> **저장소 이름 추천:** `velloria` (또는 `velloria-landing`, `velloria-site`)
> **공개 여부:** Public (Vercel 무료 플랜과 가장 잘 맞음)
> **`.gitignore` / README / license:** 추가하지 **마세요** — 이 저장소에 이미 포함되어 있습니다.

---

## ④ Vercel에 배포하기

1. [vercel.com](https://vercel.com) 가입 (GitHub 계정으로 가입 추천 — 연동이 자동)
2. 대시보드에서 **Add New → Project** 클릭
3. 방금 만든 `velloria` 저장소를 **Import**
4. 다음 설정을 그대로 두고 **Deploy** 클릭:
   - Framework Preset: **Other** (자동 감지됨)
   - Build Command: *(비워두기)*
   - Output Directory: *(비워두기)*
   - Install Command: *(비워두기)*
5. 약 30초 후 배포 완료. `https://velloria.vercel.app` 같은 URL을 받게 됩니다.

이후 `git push`만 하면 자동으로 재배포됩니다 — Vercel이 main 브랜치를 감시합니다.

### 커스텀 도메인 연결 (선택)

Vercel 프로젝트 → **Settings → Domains** → 본인 도메인 입력 →
도메인 등록업체 DNS에서 안내된 CNAME/A 레코드 추가.
가비아·후이즈·Namecheap·GoDaddy 모두 동일한 방식입니다.

---

## 디자인 토큰 빠른 참조

```
색상      : Primary #1C1917 · Accent #A16207 · Gold soft #C9A227 · Ivory bg #FAFAF9
타이포    : Cormorant (영문 헤드라인) / Montserrat (영문 본문)
            Noto Serif KR / Noto Sans KR (한글)
스페이싱  : 4·8·16·24·32·48·64·96·128 px (디자인 토큰)
브레이크포인트 : 480 / 767 / 1023 px
```

상세 토큰은 `css/styles.css` 상단의 `:root` 블록에 정의되어 있습니다.

---

## 문구 수정

- **영어 페이지** — `index.html` 직접 편집
- **한국어 페이지** — `ko/index.html` 직접 편집
- **제품명·가격·스펙** — 각 `<article class="product">` 블록 내부 텍스트만 바꾸면 됩니다.
- **히어로 이미지 교체** — `assets/products/bracelet-01-eternite.webp` 파일을 동일 이름으로 덮어쓰기.

---

## 접근성 & 성능

이 사이트는 Anthropic ui-ux-pro-max 가이드라인을 따라 다음을 충족합니다:

- ✅ 키보드 접근성 (스킵 링크, 모든 인터랙티브 요소 포커스 가능)
- ✅ WCAG AA 색상 대비 (≥4.5:1 본문, ≥3:1 UI 글리프)
- ✅ `prefers-reduced-motion` 감지 시 애니메이션 비활성화
- ✅ 모바일 우선 반응형 (375 / 768 / 1024 / 1440)
- ✅ 44px 터치 타깃, 8px 이상 간격
- ✅ WebP 이미지, `width`/`height` 명시로 CLS = 0
- ✅ hreflang 양방향 연결 (KR ↔ EN)

---

## 라이선스

콘텐츠 및 디자인은 Velloria 소유. 코드는 개인적·상업적 사용 자유.
