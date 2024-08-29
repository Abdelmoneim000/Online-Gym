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
    Modal,
  } from '@mui/material';
  import CreditCardIcon from '../assets/credit-card.svg';
  import PayPalIcon from '../assets/paypal.svg';
  import WalletIcon from '../assets/stc_pay.svg';
  import { useState } from 'react';
  import TrainingPayment from '../assets/Training_payment.svg';
  import CloudPayment from '../assets/Cloud_payment.svg';
  
  const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [paymentStatus, setPaymentStatus] = useState('Billing');
    const [openModal, setOpenModal] = useState(false);
  
    const handlePaymentMethodChange = (event) => {
      setPaymentMethod(event.target.value);
    };
  
    const handleConfirmPayment = () => {
      setOpenModal(true);
    };
  
    const handleCloseModal = () => {
      setOpenModal(false);
    };
  
    return (
      <>
        <Box sx={{ position: 'absolute', top: 0, right: 0, p: 2 }}>
          <img
            src={CloudPayment}
            alt="Cloud Payment"
            style={{
              width: '600px',
              height: '600px',
              marginTop: '-100px',
              marginRight: '-15px',
            }}
          />
        </Box>
  
        <Grid container spacing={2} sx={{ height: '100vh', alignItems: 'center', justifyContent: 'center', backgroundColor: "white" }}>
          <Grid item xs={12} md={5} fontFamily={"Sofia Sans"}>
            {/* Progress Bar */}
            <Grid container justifyContent="left" sx={{ mb: 8 }}>
              <Grid item xs={10} md={5}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="body1" fontWeight={600} fontFamily={"Sofia Sans"} color={paymentStatus === "Billing" ? "#A38FFD" : "#D3D3D3"} sx={{ mr: 1 }}>Billing</Typography>
                  <Box sx={{ flexGrow: 1, height: '1px', backgroundColor: '#D3D3D3' }} />
                  <Typography variant="body1" fontWeight={400} fontFamily={"Sofia Sans"} color={paymentStatus === "Billing" ? "#D3D3D3" : "#A38FFD"} sx={{ ml: 1 }}>Confirmation</Typography>
                </Box>
              </Grid>
            </Grid>
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
                      <img src={CreditCardIcon} alt="Credit Card" style={{ marginRight: "10px" }} />
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
  
              <Box mt={8}>
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
                        <img src={CreditCardIcon} alt="Credit Card" style={{ marginRight: "10px" }} />
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
                <Button variant="outlined" color="primary" fontFamily={"Sofia Sans"} sx={{ marginRight: "50px", borderColor: "#A38FFD", color: "#A38FFD", width: "150px", height: "50px", border: "2px solid #A38FFD", borderRadius: "8px" }}>
                  Back
                </Button>
                <Button variant="contained" color="primary" sx={{ backgroundColor: "#A38FFD", padding: "15px", borderRadius: "8px", width: "170px", height: "50px" }} fontFamily={"Sofia Sans"} onClick={handleConfirmPayment}>
                  Confirm Payment
                </Button>
              </Box>
            </FormControl>
  
            {/* Confirmation Modal */}
            <Modal
              open={openModal}
              onClose={handleCloseModal}
              aria-labelledby="confirmation-modal-title"
              aria-describedby="confirmation-modal-description"
            >
              <Box sx={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)', 
                bgcolor: 'background.paper', 
                boxShadow: 24, 
                p: 4, 
                borderRadius: 2 
              }}>
                <Typography id="confirmation-modal-title" width={"300px"} textAlign={"center"} variant="h6" fontFamily={"Sofia Sans"} fontWeight={800} component="h2">
                  Are you sure you want to confirm paying {localStorage.getItem('selectedPrice')}?
                </Typography>
                <Box display="flex" justifyContent="space-around" mt={4}>
                  <Button variant="outlined" sx={{border : "1px solid #A38FFD", color : "#A38FFD", width: "100px", height: "50px", fontSize: "18px"}}  onClick={handleCloseModal}>Cancel</Button>
                  <Button variant="contained" sx={{backgroundColor : "#A38FFD", width: "100px", height: "50px", fontSize: "18px"}} onClick={() => {
                    handleCloseModal();
                    setPaymentStatus("Confirmation");
                    }}>OK</Button>
                </Box>
              </Box>
            </Modal>
          </Grid>
  
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', justifyContent: 'left' }}>
              <img src={TrainingPayment} alt="Training Payment" style={{ width: "400px", height: "400px" }} />
            </Box>
          </Grid>
        </Grid>
      </>
    );
  };
  
  export default Payment;
