import React from 'react';

const About = () => {
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
    fontSize: '28px',
    marginBottom: '20px',
  };

  const iconStyle = {
    fontSize: '24px',
    marginRight: '10px',
  };

  return (
    <section id='about' style={sectionStyle}>
      <div style={wrapperStyle}>
        <h1 style={h1Style}>About CartHome.lk</h1>
        <h2 style={h2Style}>Why Choose Us?</h2>
        <p>
          We are a dedicated online platform for the vehicle market. We are passionate about
          connecting dreams to driveways. At CartHome.lk, we live, breathe, and drive all things
          automotive. Our user-friendly interface and expert insights make finding your perfect
          ride a joyful adventure.
        </p>
        <p>
          <i style={iconStyle} className="fas fa-car"></i>
          <strong>Wide Selection:</strong> Choose from a wide range of vehicles.
        </p>
        <p>
          <i style={iconStyle} className="fas fa-check-circle"></i>
          <strong>Expert Insights:</strong> Our experts are here to guide you.
        </p>
        <p>
          <i style={iconStyle} className="fas fa-users"></i>
          <strong>Seller Support:</strong> We're your vehicle's biggest fan club.
        </p>
        <p>
          <i style={iconStyle} className="fas fa-rocket"></i>
          <strong>Smooth Transactions:</strong> We simplify the process for you.
        </p>
        <p>
          Your automotive aspirations deserve the best. Choose CartHome.lk for an exhilarating
          journey in the vehicle market.
        </p>
      </div>
    </section>
  );
};

export default About;
