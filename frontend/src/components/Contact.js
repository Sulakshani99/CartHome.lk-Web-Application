import React from 'react';

const Contact = () => {
  const sectionStyle = {
    backgroundColor: '#f7f7f7',
    color: '#000',
    padding: '40px 0',
    textAlign: 'center',
  };

  const wrapperStyle = {
    maxWidth: '800px',
    margin: '0 auto',
  };

  const h1Style = {
    fontSize: '36px',
    fontWeight: 'bold',
  };

  const h2Style = {
    padding: 20,
    fontSize: '28px',
    marginBottom: '20px',
  };

  const iconStyle = {
    fontSize: '36px',
    marginRight: '10px',
  };

  const contactInfoStyle = {
    listStyle: 'none',
    padding: 0,
  };

  const socialMediaLinks = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  };

  const socialIconStyle = {
    fontSize: '36px',
    margin: '0 10px',
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.3s ease-in-out',
  };

  return (
    <section id='contact' style={sectionStyle}>
      <div style={wrapperStyle}>
        <h1 style={h1Style}>Contact Us</h1>

        <div className='cta4'>
          <h2 style={h2Style}>Technical Support</h2>
          <ul style={contactInfoStyle}>
            <li>
              <i style={iconStyle} className="fas fa-wrench"></i>
              Tech Glitches? No Worries: Email us at <a href="mailto:techsupport@carthome.lk">techsupport@carthome.lk</a>.
            </li>
            <li>
              <i style={iconStyle} className="fas fa-comment"></i>
              Real-Time Help: Use our live chat feature for instant assistance.
            </li>
            <li>
              <i style={iconStyle} className="fas fa-question-circle"></i>
              Got Questions? Check our <a href="/faq">FAQs</a> for quick answers.
            </li>
          </ul>
        </div>

        <div className='cta5'>
          <h2 style={h2Style}>General Inquiries</h2>
          <ul style={contactInfoStyle}>
            <li>
              <i style={iconStyle} className="fas fa-envelope"></i>
              Get in Touch: Email us at <a href="mailto:contact@carthome.lk">contact@carthome.lk</a>.
            </li>
            <li>
              <i style={iconStyle} className="fas fa-phone"></i>
              Hear Our Voice: Call us at +1-123-456-7890 to talk to our friendly customer support team.
            </li>
            <li>
              <i style={iconStyle} className="fas fa-map-marker"></i>
              Visit Us: Drop by our headquarters at 123 Vehicle Street, Cityville, 12345, for a cup of coffee and a chat.
            </li>
          </ul>
        </div>

        <div style={socialMediaLinks}>
          <a href="#" style={socialIconStyle}><i className="fab fa-facebook"></i></a>
          <a href="#" style={socialIconStyle}><i className="fab fa-twitter"></i></a>
          <a href="#" style={socialIconStyle}><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
