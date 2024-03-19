import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  text-align: center;
`;

const PageTitle = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const VehicleCard = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  width: 320px;
  text-align: left;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const VehicleName = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ContactInfo = styled.p`
  font-size: 16px;
`;

const VehicleInfo = styled.p`
  font-size: 18px;
  margin-top: 10px;
`;

const SearchInput = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const BuyInfo = styled.p`
  font-size: 16px;
  font-weight: bold;
  color : blue;
  margin-top: 10px;
`;

const ViewVehicles2 = () => {
  const [vehicles, setVehicles] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/v1/vehicles/all');
        console.log(response.data)
        setVehicles(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVehicles();
  }, []);

  const filteredVehicles = vehicles.filter((vehicle) =>
    vehicle.vehicle_name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Container>
      <PageTitle>All Vehicles</PageTitle>
      <SearchInput
        type="text"
        placeholder="Search by Vehicle Name"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Gallery>
        {filteredVehicles.map((vehicle) => (
          <VehicleCard key={vehicle._id}>
            <VehicleName >{vehicle.vehicle_name}</VehicleName>
            <ContactInfo>Contact Numbers: {vehicle.contactnumbers}</ContactInfo>
            <VehicleInfo>Price (Rs): {vehicle.price_Rs}</VehicleInfo>
            <VehicleInfo>Get Leasing: {vehicle.get_leasing}</VehicleInfo>
            <VehicleInfo>Make: {vehicle.make}</VehicleInfo>
            <VehicleInfo>Model: {vehicle.model}</VehicleInfo>
            <VehicleInfo>Year of Manufacture: {vehicle.YOM}</VehicleInfo>
            <VehicleInfo>Mileage(km): {vehicle.mileage_km}</VehicleInfo>
            <VehicleInfo>Gear: {vehicle.gear}</VehicleInfo>
            <VehicleInfo>Fuel Type: {vehicle.fuel_type}</VehicleInfo>
            <VehicleInfo>Options: {vehicle.options}</VehicleInfo>
            <VehicleInfo>Engine(cc): {vehicle.engine_cc}</VehicleInfo>

            <VehicleInfo><img 
            style={{
                width:"180px",
                height:"180px"
            }}
            src={"http://localhost:3001" + vehicle.image}></img></VehicleInfo>
           <BuyInfo>
            If you're interested, please call: &#x260E; {vehicle.contactnumbers}
            </BuyInfo>
          </VehicleCard>
        ))}
      </Gallery>
    </Container>
  );
};

export default ViewVehicles2;
