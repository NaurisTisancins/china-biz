import Image from 'next/image';
import Link from 'next/link';

import LaptopIcon from '../../public/icons/laptop-icon.svg';
import Computer from '../icons/Computer';

function ServicesSection() {
  return (
    // add icons
    <section className="services-section ">
      <div className="service-item ">
        <Link href="/teaching">
          <h2 className="service-title text-cyan-600 hover:text-amber-300">
            教学 Teaching
          </h2>
        </Link>

        <p className="service-text">科技最新动态</p>
      </div>
      <div className="service-item ">
        <Link href="/consulting">
          <h2 className="service-title text-cyan-600 hover:text-amber-300">
            咨询 Consulting
          </h2>
        </Link>
        <p className="service-text">为行业领导者带来最先进的专业知识</p>
      </div>
      <div className="service-item ">
        <div className="service-icon-container"></div>
        {/* <Image src={LaptopIcon} alt="laptop icon" width={50} height={50} /> */}
        <Computer color="#0891B2" width="50px" height="50px" />
        <h2 className="service-title text-cyan-600 hover:text-amber-300">
          软件
          <span>Software</span>
        </h2>

        <p className="service-text">构建独特的软件解决方案</p>
      </div>
    </section>
  );
}

export default ServicesSection;
