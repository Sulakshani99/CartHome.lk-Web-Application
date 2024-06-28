import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
  padding: 50px;
  text-align: center;
`;

const Logo = styled.div`
  font-size: 48px;
  color: #007bff;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-top: 20px;
  color: #333;
`;

const Description = styled.p`
  font-size: 18px;
  color: #555;
  margin-top: 20px;
`;

const TiersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Tier = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  width: 300px;
`;

const TierTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 10px;
`;

const Price = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: #333;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

const Feature = styled.li`
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
`;

const GetStartedButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;
  font-size: 18px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Icon = styled.span`
  font-size: 48px;
  margin: 20px 0;
  color: #007bff;
`;

export default function Home() {
  return (
    <HomeContainer>
      <Logo>🚗</Logo>
      <Title>Welcome to Your Cars vvvvvvvv</Title>
      <Description>
        Find the perfect vehicle or sell your own on our platform. Join us today and explore a world of opportunities.
      </Description>
      <TiersContainer>
        <Tier>
          <Icon>🌟</Icon>
          <Price>Advance the vehicle marketplace</Price>
          <FeaturesList>
            <Feature>Empower buyers and S</Feature>
            <Feature>Drive innovation and satisfaction</Feature>
          </FeaturesList>
          {/* <GetStartedButton>Learn More</GetStartedButton> */}
        </Tier>
        <Tier>
          <Icon>🚀</Icon>
          <Price>Connect buyers and sellers</Price>
          <FeaturesList>
            <Feature>Provide a seamless experience</Feature>
            <Feature>Build trust and reliability</Feature>
          </FeaturesList>
          {/* <GetStartedButton>Discover More</GetStartedButton> */}
        </Tier>
      </TiersContainer>
    </HomeContainer>
  );
}
