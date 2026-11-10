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

// Public page opened by the QR code:  /verify/:id
function CertificatePage() {
  const { id } = useParams();
  const certificate = getCertificateById(id);
  const valid = isCertificateValid(certificate);

  usePageMeta(
    certificate
      ? `Certificate ${certificate.certificateNumber} | SKAI Karate Kolathur`
      : "Certificate Not Found | SKAI Karate Kolathur",
    { noindex: true }
  );

  if (!certificate) {
    // React escapes the text; we also cap its length so a long URL cannot
    // break the layout.
    const shownId = String(id ?? "").slice(0, 64);
    return (
      <main className="cert-page">
        <div className="cert-page__inner">
          <div className="cert-notfound">
            <h1>Certificate Not Found</h1>
            <p>
              We could not find a certificate with the number{" "}
              <code>{shownId}</code> in our published records.
            </p>
            <p>
              Please check the number printed on the certificate, or contact
              SKAI Karate Kolathur for help.
            </p>
            <div className="cert-actions">
              <Link className="cert-btn" to="/">
                Back to Website
              </Link>
              <Link className="cert-btn cert-btn--light" to="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="cert-page">
      <div className="cert-page__inner">
        {valid ? (
          <div className="cert-banner cert-banner--valid no-print" role="status">
            <strong>Certificate record found</strong>
            Status: Valid
          </div>
        ) : (
          <div className="cert-banner cert-banner--revoked no-print" role="alert">
            <strong>THIS CERTIFICATE HAS BEEN REVOKED</strong>
            It is no longer valid. Please contact SKAI Karate Kolathur.
          </div>
        )}

        <div className="cert-page__card">
          <CertificateDesign certificate={certificate} valid={valid} />
        </div>

        {/* Shown only on the printed / saved PDF copy */}
        <div className="print-only">
          <CertificateQr certificateId={certificate.id} />
        </div>

        <p className="cert-note no-print">
          This page shows the record published on the SKAI Karate Kolathur
          website for this certificate number. It is a simple record check and
          not cryptographic proof of authenticity. Please compare these details
          with the physical certificate.
        </p>

        <div className="cert-actions no-print">
          {valid && (
            <button
              type="button"
              className="cert-btn"
              onClick={() => window.print()}
            >
              Download Certificate (PDF)
            </button>
          )}
          <Link className="cert-btn cert-btn--light" to="/">
            Back to Website
          </Link>
        </div>
        {valid && (
          <p className="cert-note no-print">
            In the print window choose <strong>Save as PDF</strong> (A4,
            portrait) to download the certificate.
          </p>
        )}
      </div>
    </main>
  );
}

export default CertificatePage;
