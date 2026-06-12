/* ============================================================================
   VELLORIA × eBay 외부 리스팅 URL
   ----------------------------------------------------------------------------
   각 제품의 "구매하러 가기" 버튼이 이동할 eBay URL을 여기서 관리합니다.
   이 한 파일만 수정하면 한국어/영어 페이지 모두에 자동으로 반영됩니다.

   ▸ 본인의 eBay 리스팅 페이지 URL로 6개 값을 교체하세요.
     예) "https://www.ebay.com/itm/123456789012"
   ▸ 비워두면 자동으로 검색 결과 페이지로 폴백됩니다.
   ▸ "fallbackSearch"는 모든 키워드 검색을 본인 셀러 페이지로 좁히는
     기본 검색어입니다. 본인 셀러명을 _ssn 파라미터에 넣어두는 것을 권장합니다.
   ========================================================================== */

window.VELLORIA_EBAY = {
  fallbackSearch: "https://www.ebay.com/sch/i.html?_nkw=diamond+tennis+bracelet+platinum",

  // 사이트 제품 키        : eBay 리스팅 URL
  "eternite-grand":      "",  // Éternité Grand Rivière   (12.04 ct)
  "solitaire-riviere":   "",  // Solitaire Rivière        (8.20 ct)
  "atelier-line":        "",  // Atelier Line             (6.48 ct)
  "maison-signature":    "",  // Maison Signature         (10.12 ct)
  "couture-eclat":       "",  // Couture Éclat            (9.06 ct)
  "classique-riviere":   ""   // Classique Rivière        (7.14 ct)
};
