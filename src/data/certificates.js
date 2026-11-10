// -----------------------------------------------------------------------------
// Static certificate register for SKAI Karate Kolathur / MKAI Karate.
//
// !! EVERYTHING IN THIS FILE IS PUBLIC !!
// It is bundled into the website's JavaScript, so anyone can read it.
// Only put information here that you are happy to publish: student name,
// certificate number, grade, date, examiner, issuing authority, status.
// Never add phone numbers, addresses, dates of birth, passwords or API keys.
//
// To add a certificate:
//   1. Copy a record below and give it a NEW, UNIQUE `id` and `certificateNumber`.
//      Never reuse a number for a different student. Use only letters, digits
//      and hyphens in the id (e.g. "SKAI-2026-0002").
//   2. Open  /print-certificate/<id>  on the site, then Print -> Save as PDF.
//   3. Deploy. Test the QR code on the live site.
//
// To revoke a certificate: change its `status` to "revoked" and redeploy.
// Do NOT delete it, otherwise the QR code will show "Not Found" instead.
// -----------------------------------------------------------------------------

// Fallback address, used only when the code runs outside a browser.
export const SITE_URL = "https://www.skaikarate-kolathur.com";

// The address QR codes point to. It follows whatever domain the site is
// opened on (custom domain, *.vercel.app, ...), so the QR code and the
// downloaded PDF always match the live site automatically.
// Tip: open the site on the domain you want printed before you print or
// download a certificate. On localhost the QR would point to localhost.
export function getSiteUrl() {
  if (typeof window !== "undefined" && window.location?.origin) {
    return window.location.origin;
  }
  return SITE_URL;
}

// Default wording from the reference certificate. Override per record if needed.
const DEFAULTS = {
  danGrade: "1st Dan Black Belt",
  gradingDate: "2026-12-06",
  examiner: "Sensei K.MANIKANDAN",
  issuingAuthority: "MKAI Karate, IND",
  status: "valid",
};

const RAW_CERTIFICATES = [
  // ---- DEMO RECORDS: delete these two before issuing real certificates. ----
  {
    id: "DEMO-0001",
    studentName: "Sample Student",
    certificateNumber: "DEMO-0001",
  },
  {
    id: "DEMO-0002",
    studentName: "Sample Revoked Student",
    certificateNumber: "DEMO-0002",
    status: "revoked",
  },
  // ---- REAL RECORDS GO BELOW THIS LINE ----
  // {
  //   id: "SKAI-2026-0001",
  //   studentName: "Student Name",
  //   certificateNumber: "SKAI-2026-0001",
  //   // Optional overrides (defaults above are used when omitted):
  //   // danGrade: "2nd Dan Black Belt",
  //   // gradingDate: "2026-12-06",   // YYYY-MM-DD
  //   // examiner: "Sensei K.MANIKANDAN",
  //   // issuingAuthority: "MKAI Karate, IND",
  //   // status: "valid",             // "valid" or "revoked"
  // },
];

export const certificates = RAW_CERTIFICATES.map((record) => ({
  ...DEFAULTS,
  ...record,
}));

const normalizeId = (value) => String(value ?? "").trim().toLowerCase();

// Safety net: report duplicate ids / certificate numbers in the browser console.
(function reportDuplicates() {
  const seenIds = new Set();
  const seenNumbers = new Set();
  certificates.forEach((c) => {
    const id = normalizeId(c.id);
    const num = normalizeId(c.certificateNumber);
    if (seenIds.has(id)) {
      console.error(`[certificates] Duplicate certificate id: ${c.id}`);
    }
    if (seenNumbers.has(num)) {
      console.error(
        `[certificates] Duplicate certificate number: ${c.certificateNumber}`
      );
    }
    seenIds.add(id);
    seenNumbers.add(num);
  });
})();

/**
 * Find a certificate by its id (case-insensitive, surrounding spaces ignored).
 * Returns the record, or null when the id is unknown or ambiguous.
 * An id that appears more than once is treated as "not found" on purpose:
 * showing no result is safer than showing the wrong student.
 */
export function getCertificateById(id) {
  const wanted = normalizeId(id);
  if (!wanted) return null;
  const matches = certificates.filter((c) => normalizeId(c.id) === wanted);
  return matches.length === 1 ? matches[0] : null;
}

/** Public verification URL that is encoded in the QR code. */
export function getVerifyUrl(id) {
  return `${getSiteUrl()}/verify/${encodeURIComponent(id)}`;
}

/** Anything other than exactly "valid" is treated as revoked (fail closed). */
export function isCertificateValid(certificate) {
  return !!certificate && certificate.status === "valid";
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/** "2026-12-06" -> "06 December 2026". Unrecognised text is shown as written. */
export function formatGradingDate(value) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(value ?? ""));
  if (!m) return String(value ?? "");
  const monthName = MONTHS[Number(m[2]) - 1];
  if (!monthName) return String(value);
  return `${m[3]} ${monthName} ${m[1]}`;
}
