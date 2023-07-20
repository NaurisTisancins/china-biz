function ClientsSection() {
  return (
    <section className="about-page-client-list-container">
      <h2 className="secondary-title-1">
        一些泰勒斯人合作单位及机构: Our Partners:
      </h2>
      <div className="flex flex-col align-center justify-center w-full gap-2 font-bold text-lg">
        <ul className="flex flex-row  w-full gap-2">
          <li className="list-item text-end">英国机器学习研究所</li>
          <li className="list-item">Machine Learning Institute</li>
        </ul>
        <ul className="flex flex-row  w-full gap-2">
          <li className="list-item text-end">摩根大通投资银行</li>
          <li className="list-item text-start">JP Morgan Investment Bank</li>
        </ul>
        <ul className="flex flex-row  w-full gap-2">
          <li className="list-item text-end">摩根斯坦利投资银行</li>
          <li className="list-item text-start">
            Morgan Stanley Investment Bank
          </li>
        </ul>
        <ul className="flex flex-row  w-full gap-2">
          <li className="list-item text-end">德意志银行</li>
          <li className="list-item text-start">Deutsche Bank</li>
        </ul>
        <ul className="flex flex-row  w-full gap-2">
          <li className="list-item text-end">伦敦商学院</li>
          <li className="list-item text-start">London Business School</li>
        </ul>
        <ul className="flex flex-row  w-full gap-2">
          <li className="list-item text-end"> 巴克莱银行</li>
          <li className="list-item text-start"> Barclay’s Capital</li>
        </ul>
        <ul className="flex flex-row  w-full gap-2">
          <li className="list-item text-end">法国银行</li>

          <li className="list-item text-start">BNP Paribas</li>
        </ul>
        <ul className="flex flex-row  w-full gap-2">
          <li className="list-item text-end">加州国立大学</li>
          <li className="list-item text-start">California State University</li>
        </ul>
        <ul className="flex flex-row  w-full gap-2">
          <li className="list-item text-end">对冲基金</li>
          <li className="list-item text-start">G-Research </li>
        </ul>
      </div>
    </section>
  );
}

export default ClientsSection;
