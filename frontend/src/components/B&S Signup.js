import React from 'react';
import styled from 'styled-components';
import { FaUser, FaUsers } from 'react-icons/fa';

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f3f3f3;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Icon = styled.span`
  font-size: 24px;
  margin-right: 10px;
`;

const Subtext = styled.p`
  font-size: 18px;
  color: #555;
  margin-top: 20px;
`;

const BS_SignUp = () => {
  return (
    <SignUpContainer>
      <Title>Welcome to Our Platform</Title>
      <ButtonsContainer>
        <Button onClick={() => (window.location.href = '/signup')}>
          <Icon>
            <FaUser />
          </Icon>
          Buyer Sign Up
        </Button>
        <Button onClick={() => (window.location.href = '/signup2')}>
          <Icon>
            <FaUsers />
          </Icon>
          Seller Sign Up
        </Button>
      </ButtonsContainer>
      <Subtext>
        Join us today and explore a world of opportunities. Whether you are looking to buy or sell, our platform is
        designed for you!
      </Subtext>
    </SignUpContainer>
  );
};

export default BS_SignUp;
