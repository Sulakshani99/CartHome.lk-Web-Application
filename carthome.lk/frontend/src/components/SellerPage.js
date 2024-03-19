import React from 'react';
import styled from 'styled-components';
import { HiOutlineUserAdd, HiOutlineDocumentAdd } from 'react-icons/hi';

const SellerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f7f7f7;
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
  background-color: #4CAF50;
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45A547;
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

const SellerPage = () => {
  return (
    <SellerContainer>
      <Title>Welcome, Seller</Title>
      <ButtonsContainer>
        <Button onClick={() => (window.location.href = '/vehicles')}>
          <Icon>
            <HiOutlineUserAdd />
          </Icon>
          View Vehicles
        </Button>
        <Button onClick={() => (window.location.href = '/createvehicle')}>
          <Icon>
            <HiOutlineDocumentAdd />
          </Icon>
          Post a Vehicle Ad
        </Button>
      </ButtonsContainer>
      <Subtext>
        Explore a world of opportunities as a seller. Whether you want to showcase your vehicles or post new ads, our platform is designed for you!
      </Subtext>
    </SellerContainer>
  );
};

export default SellerPage;
