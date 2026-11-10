import QRCode from "react-qr-code";
import { formatGradingDate, getVerifyUrl } from "../data/certificates";
import "../styles/certificates.css";

// "1st Dan Black Belt" -> 1<sup>st</sup> Dan Black Belt (as in the reference).
// Rendered as React elements, never as raw HTML.
function renderGrade(grade) {
  const m = /^(\d+)(st|nd|rd|th)(\s.*)?$/i.exec(String(grade ?? ""));
  if (!m) return String(grade ?? "");
  return (
    <>
      {m[1]}
      <sup>{m[2].toLowerCase()}</sup>
      {m[3] || ""}
    </>
  );
}

// Long names shrink so they stay on one line inside the card.
function nameFontSize(name) {
  const length = Math.max(String(name ?? "").length, 1);
  return Math.max(3.4, Math.min(9.2, (9.2 * 12) / length));
}

function Status({ valid }) {
  if (valid) {
    return (
      <div className="mkai-status mkai-status--valid">
        <svg className="mkai-check" viewBox="80 75 245 237" aria-hidden="true">
          <polygon points="85,200 106,183 165,245 285,80 320,105 163,308" />
        </svg>
        <span className="mkai-status-text">erified</span>
      </div>
    );
  }
  return (
    <div className="mkai-status mkai-status--revoked">
      <svg className="mkai-check mkai-cross" viewBox="0 0 100 100" aria-hidden="true">
        <path d="M14 30 L30 14 L50 34 L70 14 L86 30 L66 50 L86 70 L70 86 L50 66 L30 86 L14 70 L34 50 Z" />
      </svg>
      <span className="mkai-status-text">Revoked</span>
    </div>
  );
}

/**
 * The certificate card, recreated in React + CSS from the MKAI reference image.
 * Everything inside scales with the width of its container, so it looks the same
 * on a phone, on screen and on paper.
 */
export function CertificateDesign({ certificate, valid }) {
  const rows = [
    ["Certificate No.", certificate.certificateNumber, "mkai-value--number"],
    ["Dan Grade", renderGrade(certificate.danGrade), ""],
    ["Grading Date", formatGradingDate(certificate.gradingDate), ""],
    ["Examiner", certificate.examiner, ""],
    ["Issuing Authority", certificate.issuingAuthority, ""],
  ];

  return (
    <div className="mkai-cert-wrap">
      <article
        className="mkai-cert"
        aria-label={`Certificate of ${certificate.studentName}`}
      >
        <img
          className="mkai-logo"
          src="/logos/MKAI-LOGO.png"
          alt="Meishin Karate Association of Integrity logo"
        />

        <h2 className="mkai-title">MKAI KARATE</h2>
        <p className="mkai-subtitle">MEISHIN KARATE ASSOCIATION OF INTEGRITY</p>
        <div className="mkai-rule mkai-rule--top" />

        <div className="mkai-name-box">
          <h1
            className="mkai-name"
            style={{ fontSize: `calc(var(--u) * ${nameFontSize(certificate.studentName)})` }}
          >
            {certificate.studentName}
          </h1>
        </div>

        <Status valid={valid} />

        <dl className="mkai-panel">
          {rows.map(([label, value, extra]) => (
            <div className="mkai-row" key={label}>
              <dt className="mkai-label">{label}</dt>
              <dd className={`mkai-value ${extra}`}>{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mkai-rule mkai-rule--bottom" />
        <p className="mkai-footer">
          This certificate has been issued by MKAI Karate and is officially
          <br />
          recorded in our digital Dojo.
        </p>

        {!valid && <div className="mkai-stamp" aria-hidden="true">REVOKED</div>}
      </article>
    </div>
  );
}

/**
 * QR code for a certificate. It contains ONLY the public verification URL,
 * never any personal information. A QR code on its own is not proof of
 * authenticity: it simply opens the published record on the website.
 */
export function CertificateQr({ certificateId }) {
  const url = getVerifyUrl(certificateId);
  return (
    <div className="mkai-qr-block">
      <div className="mkai-qr-box">
        <QRCode
          value={url}
          size={256}
          level="M"
          bgColor="#FFFFFF"
          fgColor="#000000"
          style={{ height: "auto", width: "100%", display: "block" }}
        />
      </div>
      <div className="mkai-qr-text">
        <strong>Scan to verify</strong>
        <span>{url}</span>
      </div>
    </div>
  );
}

export default CertificateDesign;
