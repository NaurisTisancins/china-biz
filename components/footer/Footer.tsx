import Link from 'next/link';

function Footer() {
  return (
    <section className="footer-container">
      <div className="footer-links-container gap-4">
        <div className="footer-links-section-1">
          <Link href="/contact" className="footer-link">
            Contact us
          </Link>
          <Link href="https://thalesians.com" className="footer-link">
            www.thalesians.com
          </Link>
        </div>

        <div className="footer-links-section-2">
          <p className="footer-address flex flex-col justify-end align-center flex-wrap border-b-zinc-200 border-b-2">
            Office 33-126, Shinmay Union Square, Shanghai, China
          </p>
          <p className="footer-address flex flex-col justify-end align-center flex-wrap border-b-zinc-200 border-b-2">
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
