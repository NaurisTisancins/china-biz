import Image from 'next/image';
import MLILogo from '../../public/photos/pictures/logos_frontpages/MLI_front.jpg';
import QDCImage from '../../public/photos/pictures/logos_frontpages/QDC_front.jpg';
import OtherCoursesImage from '../../public/photos/pictures/sample_stock_pics/istockphoto-174839358-1024x1024.jpg';
import OxfordGroupPhoto from '../../public/photos/pictures/asia_website_add_pictures_20230627/oxford_group_photo.jpg';

function AdultTrainingSection() {
  return (
    <section>
      <h2 className="secondary-title-1-nomargin mb-2 mt-8">
        成人教学/Professional Study:
      </h2>
      <span className="flex justify-center align-center mb-8">
        线上课程/证书培训: Online Courses/Certificate Training
      </span>
      <ul>
        <li className="adult-training-list-item mb-16 flex">
          <Image
            className="adult-training-img"
            src={MLILogo}
            alt="MLI logo"
            width={400}
            height={400}
          />
          <div className="p-2">
            <h3 className="font-bold mb-2">
              英国机器学习研究院金融证书 (MLI) （6个月/兼职/线上)
            </h3>
            为期六个月的综合兼职课程，每周在伦敦或全球在线举办现场讲座。 MLI 由
            2个级别、6
            个模块、25个讲座周、作业、一个实用的期末项目和期末考试组成，可以使用我们的现场监考平台在全球任何地点进行。
          </div>
        </li>
        <li className="adult-training-list-item mb-16 flex">
          <Image
            className="adult-training-img"
            src={QDCImage}
            alt="MLI logo"
            width={400}
            height={400}
          />
          <div className="p-2">
            <h3 className="font-bold mb-2">
              金融量化开发人员证书 (QDC) （6个月/兼职/线上）
            </h3>
            本课程的目标是培养金融量化开发人员的基本技能。该课程属于入门级，不需要编程经验。该课程由具有衍生品定价和系统交易模型开发经验的量化金融从业者设计。
          </div>
        </li>
        <li className="adult-training-list-item mb-16 flex">
          <Image
            className="adult-training-img"
            src={OtherCoursesImage}
            alt="MLI logo"
            width={400}
            height={400}
          />
          <div className="p-2">
            <h3 className="font-bold mb-2">
              其他课程范例：Other Training Courses{' '}
            </h3>
            金融从业领域的GPU全日工坊 频率论和贝叶斯统计推断
            随机滤波、马尔可夫链蒙特卡洛及其应用 应用于数据的火箭科学式处理方法
            使用 KDB+/Q 的大数据和高频数据等
          </div>
        </li>
        <li className="adult-training-list-item mb-16 flex">
          <Image
            className="adult-training-img"
            src={OxfordGroupPhoto}
            alt="MLI logo"
            width={400}
            height={400}
          />
          <div className="p-2">
            <h3 className="font-bold mb-2">
              Oxford Summer AI School (CHN content)
            </h3>
          </div>
        </li>
        <li className="adult-training-list-item mb-16 flex">
          {/* <Image src={MLILogo} alt="MLI logo" width={200} height={200} /> */}
          <div className="p-2">
            <h3 className="font-bold mb-2">
              过往机构培训名单 （链接主要客户）
            </h3>
            “我们定期在牛津举办的ML和AI成人暑期学校,
            吸引了来自各行各业的众多行业领导者。我们是最早参加ML /
            AI革命的人之一，从而突破了教学，研究和开发的界限。“
          </div>
        </li>
      </ul>
    </section>
  );
}
export default AdultTrainingSection;
