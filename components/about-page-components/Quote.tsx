type Props = {
  quote: string;
};

function Quote(props: Props) {
  return (
    <section className="about-page-quote-section section-container">
      <h2 className="quote-paragraph">{props.quote}</h2>
    </section>
  );
}

export default Quote;
