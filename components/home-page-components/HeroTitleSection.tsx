import CallToActionButton from '@/components/buttons/CallToActionButton';

function HeroTitleSection() {
  return (
    <section className="hero-title-section">
      <h1 className="home-page-title">
        <span>Thalesians Ltd</span> 泰勒斯人简介
      </h1>
      <div className="home-page-about">
        <h2>
          是一家专业的科技科学咨询和智囊团，具有对AI人工智能，机器学习，量化金融，经济学，数学，物理学和计算机科学等方面的深厚教学与行业经验。泰勒斯人的业务包括人工智能教育（线上及线下/短中长期证书类课程/公司指定培训等），企业人工智能技术咨询，量化金融技术与算法开发等。长期为各大一线金融机构培养专业人才，合作单位包括英国机器学习研究院
          （MLI）,
          各大投行，投资公司，医疗科技，互联网科技公司等，拥有业内认可及权威.
        </h2>
        <CallToActionButton text="更多。。。" />
      </div>
    </section>
  );
}

export default HeroTitleSection;
