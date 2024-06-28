import React from 'react';

const Service = () => {
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

  return (
    <section id='services' style={sectionStyle}>
      <div style={wrapperStyle}>
        <h1 style={h1Style}>Services for You</h1>

        <div className='cta1'>
          <h1 style={h2Style}>Vehicle Buying</h1>
          <p>
            <i style={iconStyle} className="fas fa-shopping-cart"></i>
            "Buying a vehicle should be an exhilarating experience, not an exhaustive one. At CartHome.lk, we've reimagined vehicle buying to put the thrill back into it. With an extensive inventory of quality vehicles, personalized search options, and trusted seller profiles, you'll find your dream ride in no time. Our transparent listings and expert advice ensure that you make an informed choice, so you drive away with not just a vehicle, but a piece of your dream."
          </p>
        </div>

        <div className='cta2'>
          <h1 style={h2Style}>Vehicle Selling</h1>
          <p>
            <i style={iconStyle} className="fas fa-car-side"></i>
            "Selling your vehicle can be just as exciting as buying one. CartHome.lk is your trusted partner in this journey. We offer a platform where you can showcase your vehicle to a wide and eager audience. With features like detailed listings, professional photography, and real-time insights, we help your vehicle shine in the spotlight. Our goal is simple - to help you find the right buyer swiftly, so you can embark on your next automotive adventure."
          </p>
        </div>

        <div className='cta3'>
          <h1 style={h2Style}>Additional Services</h1>
          <p>
            <i style={iconStyle} className="fas fa-tools"></i>
            "CartHome.lk offers a range of additional services to enhance your automotive experience. Whether it's financing options, vehicle maintenance, or expert advice, we're here to support you every step of the way. Our goal is to make your journey in the vehicle market as smooth and enjoyable as possible."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service;
