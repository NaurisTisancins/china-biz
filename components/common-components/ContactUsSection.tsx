// add everything to the left
// just leave the chinese part
// info@thalesians as main contact - for everything in the footer plus copyright
function ContactUsSection() {
  return (
    <section className="contact-us-section section-container">
      <h2 className="contact-us-title">Contact us联系我们:</h2>
      <p className="contact-us-contact-detail">
        <span className="contact-us-name">Mona Zhang: </span>
        mona@thalesiansmarine.com
      </p>
      <p className="contact-us-contact-detail">
        {/* not not in consultacies */}
        {/* create a sapareate contact us in the footer */}
        <span className="contact-us-name">Celine Wu: </span>
        celine@thalesiansmarine.cn
      </p>
    </section>
  );
}

export default ContactUsSection;
