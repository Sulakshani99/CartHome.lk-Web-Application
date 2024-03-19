// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';
// import { useParams, useNavigate } from 'react-router';

// const Container = styled.div`
//   text-align: center;
// `;

// const PageTitle = styled.h1`
//   font-size: 24px;
//   font-weight: bold;
//   margin-bottom: 20px;
// `;

// const Form = styled.form`
//   text-align: left;
// `;

// const FormField = styled.div`
//   margin: 10px 0;
// `;

// const Label = styled.label`
//   font-size: 16px;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const SubmitButton = styled.button`
//   background-color: #007bff;
//   color: #fff;
//   padding: 10px 15px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

// const ChangeVehicle = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     vehicle_name: '',
//     contactnumbers: '',
//     price_Rs: '',
//     get_leasing: '',
//     make: '',
//     model: '',
//     YOM: '',
//     mileage_km: '',
//     gear: '',
//     fuel_type: '',
//     options: '',
//     engine_cc: '',
//   });

//   useEffect(() => {
//     const fetchVehicleData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3001/api/v1/vehicles/${id}`);
//         setFormData(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchVehicleData();
//   }, [id]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleUpdate = () => {
//     axios.put(`http://localhost:3001/api/v1/vehicles/${id}`, formData)
//       .then((response) => {
//         console.log('Vehicle details updated:', response.data);
//         navigate('/vahicles'); // Navigate to the desired page after update
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <Container>
//       <PageTitle>Edit Vehicle</PageTitle>
//       <Form>
//         <FormField>
//           <Label htmlFor="vehicle_name">Vehicle Name</Label>
//           <Input
//             type="text"
//             name="vehicle_name"
//             value={formData.vehicle_name}
//             onChange={handleInputChange}
//           />
//         </FormField>
//         <FormField>
//           <Label htmlFor="contactnumbers">Contact Numbers</Label>
//           <Input
//             type="text"
//             name="contactnumbers"
//             value={formData.contactnumbers}
//             onChange={handleInputChange}
//           />
//         </FormField>
//         <FormField>
//           <Label htmlFor="price_Rs">Price (Rs)</Label>
//           <Input
//             type="text"
//             name="price_Rs"
//             value={formData.price_Rs}
//             onChange={handleInputChange}
//           />
//         </FormField>
//         <FormField>
//           <Label htmlFor="get_leasing">Leasing</Label>
//           <Input
//             type="text"
//             name="get_leasing"
//             value={formData.get_leasing}
//             onChange={handleInputChange}
//           />
//         </FormField>
//         <FormField>
//           <Label htmlFor="make">Make</Label>
//           <Input
//             type="text"
//             name="make"
//             value={formData.make}
//             onChange={handleInputChange}
//           />
//         </FormField>
//         <FormField>
//           <Label htmlFor="model">Model</Label>
//           <Input
//             type="text"
//             name="model"
//             value={formData.model}
//             onChange={handleInputChange}
//           />
//         </FormField>
//         <FormField>
//           <Label htmlFor="YOM">Year of Manufacture</Label>
//           <Input
//             type="text"
//             name="YOM"
//             value={formData.YOM}
//             onChange={handleInputChange}
//           />
//         </FormField>
//         <FormField>
//           <Label htmlFor="mileage_km">Mileage (km)</Label>
//           <Input
//             type="text"
//             name="mileage_km"
//             value={formData.mileage_km}
//             onChange={handleInputChange}
//           />
//         </FormField>
//         <FormField>
//           <Label htmlFor="gear">Gear</Label>
//           <Input
//             type="text"
//             name="gear"
//             value={formData.gear}
//             onChange={handleInputChange}
//           />
//         </FormField>
//         <FormField>
//           <Label htmlFor="fuel_type">Fuel Type</Label>
//           <Input
//             type="text"
//             name="fuel_type"
//             value={formData.fuel_type}
//             onChange={handleInputChange}
//           />
//         </FormField>
//         <FormField>
//           <Label htmlFor="options">Options</Label>
//           <Input
//             type="text"
//             name="options"
//             value={formData.options}
//             onChange={handleInputChange}
//           />
//         </FormField>
//         <FormField>
//           <Label htmlFor="engine_cc">Engine CC</Label>
//           <Input
//             type="text"
//             name="engine_cc"
//             value={formData.engine_cc}
//             onChange={handleInputChange}
//           />
//         </FormField>
//         <SubmitButton onClick={handleUpdate}>Update Vehicle</SubmitButton>
//       </Form>
//     </Container>
//   );
// };

// export default ChangeVehicle;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router';

const Container = styled.div`
  text-align: center;
`;

const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const FormContainer = styled.div`
  width: 400px;
  margin: 0 auto;
`;

const Form = styled.form`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  display: block;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ChangeVehicle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState({
    vehicle_name: '',
    contactnumbers: '',
    price_Rs: '',
    get_leasing: '',
    make: '',
    model: '',
    YOM: '',
    mileage_km: '',
    gear: '',
    fuel_type: '',
    options: '',
    engine_cc: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:3001/api/v1/vehicles/${id}`)
      .then((response) => {
        setVehicle(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVehicle({
      ...vehicle,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:3001/api/v1/vehicles/${id}`, vehicle)
      .then((response) => {
        console.log('Vehicle details updated:', response.data);
        navigate('/vehicles');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container>
      <PageTitle>Edit Vehicle</PageTitle>
      <FormContainer>
        <Form>
          <Label htmlFor="vehicle_name">Vehicle Name</Label>
          <Input
            type="text"
            name="vehicle_name"
            value={vehicle.vehicle_name}
            onChange={handleInputChange}
          />

          <Label htmlFor="contactnumbers">Contact Numbers</Label>
          <Input
            type="text"
            name="contactnumbers"
            value={vehicle.contactnumbers}
            onChange={handleInputChange}
          />

          <Label htmlFor="price_Rs">Price (Rs)</Label>
          <Input
            type="text"
            name="price_Rs"
            value={vehicle.price_Rs}
            onChange={handleInputChange}
          />

          <Label htmlFor="get_leasing">Get Leasing</Label>
          <Input
            type="text"
            name="get_leasing"
            value={vehicle.get_leasing}
            onChange={handleInputChange}
          />

          <Label htmlFor="make">Make</Label>
          <Input
            type="text"
            name="make"
            value={vehicle.make}
            onChange={handleInputChange}
          />

          <Label htmlFor="model">Model</Label>
          <Input
            type="text"
            name="model"
            value={vehicle.model}
            onChange={handleInputChange}
          />

          <Label htmlFor="YOM">Year of Manufacture</Label>
          <Input
            type="text"
            name="YOM"
            value={vehicle.YOM}
            onChange={handleInputChange}
          />

          <Label htmlFor="mileage_km">Mileage (km)</Label>
          <Input
            type="text"
            name="mileage_km"
            value={vehicle.mileage_km}
            onChange={handleInputChange}
          />

          <Label htmlFor="gear">Gear</Label>
          <Input
            type="text"
            name="gear"
            value={vehicle.gear}
            onChange={handleInputChange}
          />

          <Label htmlFor="fuel_type">Fuel Type</Label>
          <Input
            type="text"
            name="fuel_type"
            value={vehicle.fuel_type}
            onChange={handleInputChange}
          />

          <Label htmlFor="options">Options</Label>
          <Input
            type="text"
            name="options"
            value={vehicle.options}
            onChange={handleInputChange}
          />

          <Label htmlFor="engine_cc">Engine (cc)</Label>
          <Input
            type="text"
            name="engine_cc"
            value={vehicle.engine_cc}
            onChange={handleInputChange}
          />

          <Button type="button" onClick={handleUpdate}>Update Vehicle</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default ChangeVehicle;

