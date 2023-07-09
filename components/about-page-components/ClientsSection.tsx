function ClientsSection() {
  return (
    <section className="about-page-client-list-container">
      <h2 className="secondary-title-1">
        一些泰勒斯人合作单位及机构: Our Partners:
      </h2>
      <div className="flex align-center justify-center w-full gap-2 font-bold text-lg">
        <ul className="flex flex-col items-end w-full">
          <li className="list-item">英国机器学习研究所</li>
          <li className="list-item">摩根大通投资银行</li>
          <li className="list-item">摩根斯坦利投资银行</li>
          <li className="list-item">德意志银行</li>
          <li className="list-item">伦敦商学院</li>
          <li className="list-item"> 巴克莱银行</li>
          <li className="list-item">法国银行</li>
          <li className="list-item">加州国立大学</li>
          <li className="list-item">对冲基金</li>
        </ul>
        <ul className="flex flex-col justify-flex-start w-full">
          <li className="list-item">Machine Learning Institute</li>
          <li className="list-item">JP Morgan Investment Bank</li>
          <li className="list-item">Morgan Stanley Investment Bank</li>
          <li className="list-item">Deutsche Bank</li>
          <li className="list-item">London Business School</li>
          <li className="list-item"> Barclay’s Capital</li>
          <li className="list-item">BNP Paribas</li>
          <li className="list-item">California State University</li>
          <li className="list-item">G-Research </li>
        </ul>
      </div>
    </section>
  );
}

export default ClientsSection;
