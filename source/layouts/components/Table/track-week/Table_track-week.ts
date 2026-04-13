//--|🠊 Table_track-week.ts 🠈|--\\
export function scrollTable(blockAction: 'go-up' | 'scroll-down') {
  // (1) Query safely: allow null
  const tableWeek = document.querySelector('#overtime-main .track-week') as HTMLTableElement | null;
  if (!tableWeek) return;

  // (2) Valid states as a literal tuple (gives you a real union type)
  const romanNumerals = ['I', 'II', 'III'] as const;
  type Roman = (typeof romanNumerals)[number];

  // (3) Detect current state by checking which class exists (order-independent)
  const currentRoman = romanNumerals.find((r) => tableWeek.classList.contains(r)) ?? romanNumerals[0];

  // (4) Convert current roman to an index (guaranteed 0..length-1)
  const currentIndex = romanNumerals.indexOf(currentRoman);

  // (5) Compute next index based on action and clamp it (prevents going out of range)
  const delta = blockAction === 'scroll-down' ? 1 : -1;
  const nextIndex = Math.max(0, Math.min(romanNumerals.length - 1, currentIndex + delta));
  const nextRoman: Roman = romanNumerals[nextIndex];

  // (6) Apply the new class (remove old roman state classes, then add next)
  tableWeek.classList.remove(...romanNumerals);
  tableWeek.classList.add(nextRoman);

  // (7) Optional: If you need a numeric position for other logic
  const position1Based = nextIndex + 1;

  // (8) Logging / side effects go here (NOT needed for the class switching itself)
  console.log('action:', blockAction);
  console.log('from:', currentRoman, 'to:', nextRoman);
  console.log('position (1-based):', position1Based);

  /*
I
II
III
IV
V
VI
VII
VIII
IX
X
XI
XII
XIII
XIV
XV
XVI
XVII
XVIII
XIX
XX
XXI
XXII
XXIII
XXIV
XXV
XXVI
XXVII
XXVIII
XXIX
XXX
XXXI
XXXII
XXXIII
XXXIV
XXXV
XXXVI
XXXVII
XXXVIII
XXXIX
XL
XLI
XLII
XLIII
XLIV
XLV
XLVI
XLVII
XLVIII
XLIX
L
LI
LII
LIII
LIV
LV
LVI
LVII
LVIII
LIX
LX
LXI
LXII
LXIII
LXIV
LXV
LXVI
LXVII
LXVIII
LXIX
LXX
LXXI
LXXII
LXXIII
LXXIV
LXXV
LXXVI
LXXVII
LXXVIII
LXXIX
LXXX
LXXXI
LXXXII
LXXXIII
LXXXIV
LXXXV
LXXXVI
LXXXVII
LXXXVIII
LXXXIX
XC
XCI
XCII
XCIII
XCIV
XCV
XCVI
XCVII
XCVIII
XCIX
C
CI
CII
CIII
CIV
CV
CVI
CVII
CVIII
CIX
CX
CXI
CXII
CXIII
CXIV
CXV
CXVI
CXVII
CXVIII
CXIX
CXX
CXXI
CXXII
CXXIII
CXXIV
CXXV
CXXVI
CXXVII
CXXVIII
CXXIX
CXXX
CXXXI
CXXXII
CXXXIII
CXXXIV
CXXXV
CXXXVI
CXXXVII
CXXXVIII
CXXXIX
CXL
CXLI
CXLII
CXLIII
CXLIV
CXLV
CXLVI
CXLVII
CXLVIII
CXLIX
CL
CLI
CLII
CLIII
CLIV
CLV
CLVI
*/
}
