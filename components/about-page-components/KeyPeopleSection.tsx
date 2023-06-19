import Image from 'next/image';
import PaulBilokonImage from '../../public/photos/image5.jpeg';
import SaeedImage from '../../public/photos/saeed-amen.jpg';
import MatthewDixonImage from '../../public/photos/matthew-dixon-140.jpeg';
import MonaZhangImage from '../../public/photos/mona.jpg';

import { useTabletWidth } from '@/hooks/screenHooks';

function KeyPeopleSection() {
  const isTabletWidth = useTabletWidth();
  return (
    <section className="about-page-key-people-section section-container">
      <h2 className="secondary-title-1">关键人物 Key People</h2>
      <div className="about-page-key-people-container">
        <div className="about-page-key-people-item">
          {!isTabletWidth && (
            <Image
              className="person-image"
              src={PaulBilokonImage}
              alt="Paul Bilokon Image"
              width={300}
              height={300}
            />
          )}

          <div className="">
            <h2 className="secondary-title-2">
              关键人物 保罗·比洛克（Paul Bilokon）
            </h2>
            {isTabletWidth && (
              <Image
                className="person-image w-full pb-16"
                src={PaulBilokonImage}
                alt="Paul Bilokon Image"
                width={300}
                height={300}
              />
            )}
            <p className="key-people-paragraph">
              关键人物 保罗·比洛克（Paul Bilokon）博士 Paul是Thalesians
              Ltd的首席执行官兼创始人。 曾担任德意志银行（Deutsche
              Bank）全球信贷和核心电子业务总监兼负责人 他
              也曾供职于摩根士丹利，雷曼兄弟和野村证券， 与保罗与罗伯·史密斯
              和威廉·奥斯本成为业内最著名电子交易领军人物。
              保罗毕业于牛津大学Christ
              Church学院，并获得最佳表现奖。他也曾伦敦帝国理工学院毕业。并为伦敦帝国理工学院的机器学习以及数学和金融硕士课程讲座，被学生们评为排名第一的讲师。
              保罗也为数学逻辑领域，随机过滤理论，还有阿巴斯·埃达拉特（Abbas
              Edalat）方面做出贡献并发表了著名的LICS论文。保罗也是畅销书作家，其出版书籍由著名出版商Wiley和Springer出版。
              Bilokon博士也是是英国计算机学会的会员，欧洲工程技术研究所复杂系统协会。
            </p>
          </div>
        </div>
        <div className="about-page-key-people-item">
          {!isTabletWidth && (
            <Image
              className="person-image"
              src={SaeedImage}
              alt="Saeed Amen Image"
              width={300}
              height={300}
            />
          )}

          <div className="">
            <h2 className="secondary-title-2">Saeed Amen</h2>
            {isTabletWidth && (
              <Image
                className="person-image w-full pb-16"
                src={SaeedImage}
                alt="Saeed Amen Image"
                width={300}
                height={300}
              />
            )}
            <p className="key-people-paragraph">
              Saeed Amen 萨伊德 阿曼 是 Cuemacro 的创始人，Turnleaf Analytics 和
              Thalesians 的联合创始人。 玛丽皇后大学讲师 他是《交易
              Thalesians：古代世界可以教给我们今天交易的知识》一书的作者。
              在过去的 15 年里，Saeed 制定了系统的交易策略
            </p>
          </div>
        </div>
        <div className="about-page-key-people-item">
          {!isTabletWidth && (
            <Image
              className="person-image"
              src={MatthewDixonImage}
              alt="Matthew Dixon Image"
              width={300}
              height={300}
            />
          )}

          <div className="">
            <h2 className="secondary-title-2">马修 迪克森Matthew Dixon</h2>
            {isTabletWidth && (
              <Image
                className="person-image w-full pb-16"
                src={MatthewDixonImage}
                alt="Matthew Dixon Image"
                width={300}
                height={300}
              />
            )}
            <p className="key-people-paragraph">
              马修 迪克森Matthew Dixon 教授，博士
              斯坦福大学和加州大学戴维斯分校的客座教授，伊利奥诺瓦理工大学学院应用数学系助理教授。他的研究是由英特尔资助的计算机金融
              。Matthew的职业生涯始于雷曼兄弟，量化交易咨询和风险建模。他拥有帝国大学的应用数学博士学位并曾担任博士后和
              斯坦福大学和加州大学戴维斯分校的客座教授。Matthew发表过20多个同行评审的出版物，机器学习和财务建模，并已被引用
              在彭博市场和金融时报担任人工智能金融科技专家。
            </p>
          </div>
        </div>
        <div className="about-page-key-people-item">
          {!isTabletWidth && (
            <Image
              className="person-image"
              src={MonaZhangImage}
              alt="Mona Zhang Image"
              width={300}
              height={300}
            />
          )}

          <div className="">
            <h2 className="secondary-title-2"> 伦敦团队负责人（Mona Zhang）</h2>
            {isTabletWidth && (
              <Image
                className="person-image w-full pb-16"
                src={MonaZhangImage}
                alt="Mona ZhangImage"
                width={300}
                height={300}
              />
            )}
            <p className="key-people-paragraph">
              伦敦团队负责人（Mona Zhang） 张烨
              曾供职于伦敦雷曼兄弟，德意志银行以及德意志房地产银行，Harwell
              Capital风险投资 ，及Roselle Capital
              洛神资本合伙人，英国投资经纪人。毕业于伦敦政治经济大学（LSE）金融及地产系，并取得欧洲商学院房地产管理人资格执照
              。Mona曾担任伦敦大学学院科技孵化器Conception
              X的行业导师，并在伦敦科技周组织开展科技初创项目融资展会等。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KeyPeopleSection;
