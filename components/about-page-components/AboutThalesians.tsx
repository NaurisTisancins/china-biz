import Image from 'next/image';
import JanNovotnyImage from '../../public/photos/pictures/Main_site_pics/jan-novotny-teaching-1.jpg';

function AboutThalesians() {
  return (
    <section className="about-thalesians-container">
      <div className="about-thalesians-img">
        <Image
          className="w-full pb-16"
          src={JanNovotnyImage}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <div className="about-paragraph-container">
        <h2 className="about-thalesians-paragraph">
          The Thalesians 泰勒斯人 由Paul Bilokon，Matthew Dixon和Saeed
          Amen于2008年成立，三人都是来自顶级投资银行的资深量化分析师及部门总管。
          The Thalesians一直处于数学，科学和技术教育的最前沿，在Matthew Dixon
          将其带到美国纽约真正变得全球化，并与哈维·斯坦（Harvey
          Stein）共同组织了位于美国的学术交流和教育活动。
        </h2>
        <h2 className="about-thalesians-paragraph">
          目前，泰勒斯人在布达佩斯，法兰克福，日内瓦，布拉格，苏黎世设有代表。在全球范围内与牛津剑桥，帝国理工大学以及领先的研究机构的老师和顾问一起组织过数百个研讨会，讨论科学和技术的最新发展，特别是机器学习（ML）和人工智能（AI）领域的最新发展。这些培训被在伦敦，纽约以及全球各地从事定量金融和科学计算的业内人士所参加及认可，几乎全部具有博士学位及以上的高级学位。The
          Thalesians被公认为全球范围内顶级的私人AI教育网络之一。
        </h2>
        <h2 className="about-thalesians-paragraph">
          泰勒斯人等全球网络中有3000名校友，顾问和讲师，几乎遍及科学技术，学术，研究，医疗和金融组织。
          泰勒斯人也是世界上networking最紧密的科技组织之一，为多家大型前沿医疗科技公司提供数据分析咨询业务,
          并为对冲基金，高中频金融交易公司开发交易算法和交易平台。
          我们定期在牛津举办的ML和AI成人暑期学校,
          吸引了来自各行各业的众多行业领导者。我们是最早参加ML /
          AI革命的人之一，从而突破了教学，研究和开发的界限。
        </h2>
      </div>
    </section>
  );
}

export default AboutThalesians;
