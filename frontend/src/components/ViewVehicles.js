
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  text-align: center;
`;

const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const VehicleCard = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  width: 300px;
  text-align: left;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const VehicleName = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ContactInfo = styled.p`
  font-size: 14px;
`;

const VehicleInfo = styled.p`
  font-size: 16px;
  margin-top: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const DeleteButton = styled.button`
  background-color: #ff0000;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const EditButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SearchInput = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const ViewVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/v1/vehicles/all');
        setVehicles(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVehicles();
  }, []);

  const handleDeleteVehicle = async (vehicleId) => {
    try {
      await axios.delete(`http://localhost:3001/api/v1/vehicles/${vehicleId}`);
      // Remove the deleted vehicle from the state
      setVehicles((prevVehicles) => prevVehicles.filter((vehicle) => vehicle._id !== vehicleId));
    } catch (error) {
      console.error(error);
    }
  };

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
            <VehicleName>{vehicle.vehicle_name}</VehicleName>
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
            <ButtonContainer>
              <DeleteButton onClick={() => handleDeleteVehicle(vehicle._id)}>Delete Vehicle</DeleteButton>
              <Link to={`/changevehicle/${vehicle._id}`}>
                <EditButton>Edit Vehicle</EditButton>
              </Link>
            </ButtonContainer>
          </VehicleCard>
        ))}
      </Gallery>
    </Container>
  );
};

export default ViewVehicles;
