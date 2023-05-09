import Link from 'next/link';

function ServicesSection() {
  return (
    <section className="services-container">
      <div className="service-item ">
        <Link href="/">
          <h2 className="service-title text-xl text-cyan-600 hover:text-amber-300">
            Education
          </h2>
        </Link>

        <p className="service-text">
          Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed
          eiusmod tempor.
        </p>
      </div>
      <div className="service-item ">
        <h2 className="service-title text-xl text-cyan-600 hover:text-amber-300">
          Consulting
        </h2>
        <p className="service-text">
          Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed
          eiusmod tempor.
        </p>
      </div>
      <div className="service-item ">
        <h2 className="service-title text-xl text-cyan-600 hover:text-amber-300">
          Software
        </h2>
        <p className="service-text">
          Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed
          eiusmod tempor.
        </p>
      </div>
    </section>
  );
}

export default ServicesSection;
