import Image from 'next/image';
import AISummercampImage from '../../public/photos/pictures/Main_site_pics/ai-summer-camp.png';
import Link from 'next/link';

function PreUniTeachingSection() {
  return (
    <section style={{ width: '100%' }}>
      <h2 className="secondary-title-1 ">青少年教学/Pre Uni Teaching:</h2>
      <div className="adult-training-list-item mb-16 flex">
        <Image
          className="adult-training-img"
          src={AISummercampImage}
          alt="MLI logo"
          width={400}
          height={400}
        />
        <div className="p-2">
          <p>
            <h3 className="font-bold mb-2">
              泰勒斯人 人工智能夏季学院/ Thalesians Artificial Intelligence
              Summer Institute ：
            </h3>
            泰勒斯人X帝国理工人工智能量化夏令营
            {/* （link to brochures ENG/CHN） */}
          </p>
          <p>
            *Thelesians X Imperial College AI and quant finance Summer Camps
            {/* (link to brochure) ENG */}
          </p>
          <p>
            (CHN/EN)/QA/company intro{' '}
            <Link
              href="/contact"
              className="text-cyan-600 hover:text-amber-400"
            >
              Contact us to get the PDF
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default PreUniTeachingSection;
