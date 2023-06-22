import Link from 'next/link';

function Footer() {
  return (
    <section className="footer-container">
      <div className="footer-links-container">
        <div className="footer-links-section-1">
          <Link href="/" className="footer-link">
            Contact us
          </Link>
          <Link href="https://thalesians.com" className="footer-link">
            www.thalesians.com
          </Link>
        </div>

        <div className="footer-links-section-2">
          <p className="footer-address">Shanghai address</p>
          <p className="footer-address">
            One Canada Square, Canary Wharf, London E14 5AB
          </p>
        </div>
      </div>
      <div className="footer-links-container">
        <p className="footer-link footer-trademark">
          ©2023 Thalesians Marine All Rights Reserved
        </p>
      </div>
    </section>
  );
}

export default Footer;
