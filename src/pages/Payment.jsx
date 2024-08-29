import {
    Grid,
    Box,
    Typography,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    TextField,
    Button,
    IconButton,
  } from '@mui/material';
  import CreditCardIcon from '../assets/credit-card.svg';
  import PayPalIcon from '../assets/paypal.svg';
  import WalletIcon from '../assets/stc_pay.svg';
  import { useState } from 'react';
  import TrainingPayment from '../assets/Training_payment.svg';
  import Cloud_payment from '../assets/Cloud_payment.svg';
  
  const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState('card');
  
    const handlePaymentMethodChange = (event) => {
      setPaymentMethod(event.target.value);
    };
  
    return (
    <>
        <Box sx={{ position: 'absolute', top: 0, right: 0, p: 2 }}>
            <img src={Cloud_payment} alt="Cloud Payment" style={{
                width: "600px",
                height: "600px",
                marginTop: "-100px",
                marginRight: "-15px"
                }} 
            />
      </Box>
      <Grid container spacing={2} sx={{ height: '100vh', alignItems: 'center', justifyContent: 'center', backgroundColor: "white" }}>
        <Grid item xs={12} md={5} fontFamily={"Sofia Sans"}>
          <FormControl component="fieldset" fullWidth>
            <Typography variant="h6" fontFamily={"Sofia Sans"} textAlign={"left"} fontWeight={700} gutterBottom>
              Payment Method
            </Typography>
            <RadioGroup
              row
              aria-label="payment-method"
              name="payment-method"
              value={paymentMethod}
              onChange={handlePaymentMethodChange}
              style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'Sofia Sans' }}
            >
              <FormControlLabel
                value="card"
                control={<Radio />}
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={CreditCardIcon} alt="Credit Card" style={{marginRight: "10px"}} />
                  </Box>
                }
              />
              <FormControlLabel
                value="paypal"
                control={<Radio />}
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={PayPalIcon} style={{ marginRight: "10px" }} />
                  </Box>
                }
              />
              <FormControlLabel
                value="stcPay"
                control={<Radio />}
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={WalletIcon} style={{ marginLeft: "-25px" }} />
                  </Box>
                }
              />
              <FormControlLabel
                value="ewallet"
                control={<Radio />}
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography fontFamily={"Sofia Sans"} variant='subtitle1' fontWeight={500}>E-Wallet</Typography>
                  </Box>
                }
                />
            </RadioGroup>
  
            <Box mt={8} >
              <Typography variant="h6" textAlign={"left"} fontFamily={"Sofia Sans"} gutterBottom>
                Payment Details
              </Typography>
              <TextField
                fullWidth
                variant="standard"
                label="Enter Name on Card"
                margin="normal"
                fontFamily={"Sofia Sans"}
              />
              <TextField
                fullWidth
                variant="standard"
                label="Card Number"
                margin="normal"
                fontFamily={"Sofia Sans"}
                InputProps={{
                  endAdornment: (
                    <IconButton>
                        <img src={CreditCardIcon} alt="Creding Card" style={{marginRight: "10px"}} />
                    </IconButton>
                  ),
                }}
              />
              <Grid container spacing={12}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    variant="standard"
                    label="Expiration"
                    margin="normal"
                    fontFamily={"Sofia Sans"}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    variant="standard"
                    label="CVV Code"
                    margin="normal"
                    fontFamily={"Sofia Sans"}
                  />
                </Grid>
              </Grid>
            </Box>
            <Typography 
            fontFamily={"Sofia Sans"}
            mt={8}
            fontWeight={700}
            textAlign={"left"}
            width={"400px"}
            fontSize={"18px"}
            color={"#A9A9A9"}
            >
              By clicking &quot;Confirm payment&quot; I agree to the company&apos;s terms of service.
            </Typography>
  
            <Box mt={4} display="flex" justifyContent="left">
              <Button variant="outlined" color="primary" fontFamily={"Sofia Sans"} sx={{marginRight: "50px", borderColor: "#A38FFD", color: "#A38FFD", width: "150px", height: "50px", border: "2px solid #A38FFD", borderRadius: "8px"}}>
                Back
              </Button>
              <Button variant="contained" autoCapitalize='false' color="primary" sx={{backgroundColor: "#A38FFD", padding: "15px", borderRadius: "8px", width: "170px", height: "50px"}} fontFamily={"Sofia Sans"}>
                Confirm Payment
              </Button>
            </Box>
          </FormControl>
        </Grid>
  
        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', justifyContent: 'left' }}>
            <img src={TrainingPayment} alt="Training Payment" style={{width: "400px", height: "400px"}} />
          </Box>
        </Grid>
      </Grid>
      </>
    );
  };
  
  export default Payment;
  