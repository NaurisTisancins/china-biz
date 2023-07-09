import Link from 'next/link';

import Computer from '../icons/Computer';
import Education from '../icons/Education';
import Handshake from '../icons/Handshake';

function ServicesSection() {
  return (
    <section className="services-section ">
      <Link
        className="service-item fill-cyan-600 text-cyan-600 hover:text-amber-400 hover:fill-amber-400"
        href="/teaching"
      >
        <Education width="54px" height="54px" />
        <h2 className="service-title ">
          教学 <span>Teaching</span>
        </h2>
        <p className="service-text">科技最新动态</p>
      </Link>

      <Link
        className="service-item fill-cyan-600 text-cyan-600 hover:text-amber-400 hover:fill-amber-400"
        href="/consulting"
      >
        <Handshake width="50px" height="50px" />
        <h2 className="service-title ">
          咨询 <span>Consulting</span>
        </h2>
        <p className="service-text">为行业领导者带来最先进的专业知识</p>
      </Link>

      <div className="service-item ">
        <Link
          className="service-item fill-cyan-600 text-cyan-600 hover:text-amber-400 hover:fill-amber-400"
          href="/consulting"
        >
          <Computer width="50px" height="50px" />
          <h2 className="service-title">
            软件
            <span>Software</span>
          </h2>

          <p className="service-text">构建独特的软件解决方案</p>
        </Link>
      </div>
    </section>
  );
}

export default ServicesSection;
