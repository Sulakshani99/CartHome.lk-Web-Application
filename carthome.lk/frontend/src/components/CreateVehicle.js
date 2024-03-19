import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const theme = createTheme();

const styles = {
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  uploadButton: {
    display: 'none', // Hide the default file input
  },
  uploadLabel: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    cursor: 'pointer',
    backgroundColor: 'lightgray',
    border: '1px solid gray',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '20px',
  },
  uploadText: {
    fontWeight: 'bold',
  },
};

const CreateVehicle = () => {
  const [image, setImage] = useState('');
  const [formData, setFormData] = useState({
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

  const [vehicleCreated, setVehicleCreated] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData2 = new FormData();
      for (const key in formData) {
        if (formData.hasOwnProperty(key)) {
          formData2.append(key, formData[key]);
        }
      }
      formData2.append('image', image);

      const response = await axios.post('http://localhost:3001/api/v1/vehicles', formData2);
      console.log(response.data);
      setVehicleCreated(true);
    } catch (error) {
      console.error(error);
      setVehicleCreated(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div style={styles.paper}>
          <Avatar style={{ backgroundColor: 'blue', marginBottom: '10px' }}>
            <DirectionsCarIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create a New Vehicle Listing
          </Typography>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <form style={styles.form} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="vehicle_name"
                    label="Vehicle Name"
                    name="vehicle_name"
                    value={formData.vehicle_name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="contactnumbers"
                    label="Contact Numbers"
                    name="contactnumbers"
                    value={formData.contactnumbers}
                    onChange={handleChange}
                  />
                </Grid>
                {/* Add more form fields for other details here */}
                {/* ... */}
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="price_Rs"
                    label="Price (Rs)"
                    name="price_Rs"
                    value={formData.price_Rs}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="get_leasing"
                    label="Leasing"
                    name="get_leasing"
                    value={formData.get_leasing}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="make"
                    label="Make"
                    name="make"
                    value={formData.make}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="model"
                    label="Model"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="YOM"
                    label="Year of Manufacture"
                    name="YOM"
                    value={formData.YOM}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="mileage_km"
                    label="Mileage (km)"
                    name="mileage_km"
                    value={formData.mileage_km}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="gear"
                    label="Gear"
                    name="gear"
                    value={formData.gear}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="fuel_type"
                    label="Fuel Type"
                    name="fuel_type"
                    value={formData.fuel_type}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="options"
                    label="Options"
                    name="options"
                    value={formData.options}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="engine_cc"
                    label="Engine CC"
                    name="engine_cc"
                    value={formData.engine_cc}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <label htmlFor="image-upload" style={styles.uploadLabel}>
                    <div className={styles.uploadText}>Upload Vehicle Image</div>
                    <input
                      accept="image/*"
                      style={styles.uploadButton}
                      id="image-upload"
                      type="file"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </label>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={styles.submit}
                startIcon={<AddIcon />}
              >
                Submit
              </Button>
            </form>
          </Paper>
          {vehicleCreated && (
            <div>
              <p>Vehicle is created!</p>
              <IconButton color="primary" component={Link} to="/">
                <CheckCircleIcon /> Home
              </IconButton>
              <IconButton color="primary" component={Link} to="/vehicles">
                <CheckCircleIcon /> View Vehicles
              </IconButton>
            </div>
          )}
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default CreateVehicle;
