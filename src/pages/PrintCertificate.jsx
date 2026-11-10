import { Link, useParams } from "react-router-dom";
import {
  CertificateDesign,
  CertificateQr,
} from "../components/CertificateDesign";
import {
  getCertificateById,
  isCertificateValid,
} from "../data/certificates";
import usePageMeta from "../hooks/usePageMeta";
import "../styles/certificates.css";

// Printable certificate:  /print-certificate/:id
// Open it, check the preview, then use the browser's Print -> Save as PDF.
function PrintCertificate() {
  const { id } = useParams();
  const certificate = getCertificateById(id);
  const valid = isCertificateValid(certificate);

  usePageMeta(
    certificate
      ? `Print ${certificate.certificateNumber} | SKAI Karate Kolathur`
      : "Certificate Not Found | SKAI Karate Kolathur",
    { noindex: true }
  );

  if (!certificate) {
    return (
      <main className="cert-print">
        <div className="cert-print__toolbar">
          <p>
            <strong>No certificate found for:</strong>{" "}
            <code>{String(id ?? "").slice(0, 64)}</code>
          </p>
          <p>
            Add the record to <code>src/data/certificates.js</code> first (ids
            must be unique and match exactly).
          </p>
          <Link className="cert-btn" to="/">
            Back to Website
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cert-print">
      <div className="cert-print__toolbar no-print">
        <p>
          <strong>Print preview:</strong> {certificate.certificateNumber}
          {!valid && " (REVOKED)"}. Click Print, then choose{" "}
          <em>Save as PDF</em> (A4, portrait, scale 100%, margins: none).
          Make sure the QR code and the whole certificate are visible below.
        </p>
        <div className="cert-actions" style={{ justifyContent: "flex-start", marginTop: 0 }}>
          <button type="button" className="cert-btn" onClick={() => window.print()}>
            Print / Save as PDF
          </button>
          <Link className="cert-btn cert-btn--light" to="/">
            Back to Website
          </Link>
        </div>
      </div>

      <div className="cert-print__sheet">
        <div className="cert-print__card">
          <CertificateDesign certificate={certificate} valid={valid} />
        </div>
        <CertificateQr certificateId={certificate.id} />
      </div>
    </main>
  );
}

export default PrintCertificate;
