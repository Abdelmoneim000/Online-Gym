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
  import TrainingPayment from '../assets/Training_payment.png';

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
        <Grid container spacing={2} sx={{
          height: '102vh',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(180deg, #000000 0%, #1E1E1E 51%, #1E1E1E 100%)',
          overflow: 'hidden'
          }}>
          <Grid item xs={12} md={5} fontFamily={"Sofia Sans"}>
            {/* Progress Bar */}
            <Grid container justifyContent="left" sx={{ mb: 8 }}>
              <Grid item xs={10} md={5}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="body1" fontWeight={600} fontFamily={"Sofia Sans"} color={paymentStatus === "Billing" ? "#85E22B" : "#D3D3D3"} sx={{ mr: 1 }}>Billing</Typography>
                  <Box sx={{ flexGrow: 1, height: '1px', backgroundColor: '#D3D3D3' }} />
                  <Typography variant="body1" fontWeight={400} fontFamily={"Sofia Sans"} color={paymentStatus === "Billing" ? "#D3D3D3" : "#85E22B"} sx={{ ml: 1 }}>Confirmation</Typography>
                </Box>
              </Grid>
            </Grid>
            <FormControl component="fieldset" fullWidth>
              <Typography variant="h6" color={"white"} fontFamily={"Sofia Sans"} textAlign={"left"} fontWeight={700} gutterBottom
                sx={{ 
                  color: "white",
                  opacity: 0.8
                }}
              >
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
                  control={<Radio sx={{color: "white", '&.Mui-checked' : {color: "#85E22B"}}}/>}
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <img src={CreditCardIcon} alt="Credit Card" style={{ marginRight: "10px" }} />
                    </Box>
                  }
                />
                <FormControlLabel
                  value="paypal"
                  control={<Radio sx={{color: "white", '&.Mui-checked' : {color: "#85E22B"}}}/>}
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <img src={PayPalIcon} style={{ marginRight: "10px" }} />
                    </Box>
                  }
                />
                <FormControlLabel
                  value="stcPay"
                  control={<Radio sx={{color: "white", '&.Mui-checked' : {color: "#85E22B"}}}/>}
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <img src={WalletIcon} style={{ marginLeft: "-25px" }} />
                    </Box>
                  }
                />
                <FormControlLabel
                  value="ewallet"
                  control={<Radio sx={{color: "white", '&.Mui-checked' : {color: "#85E22B"}}}/>}
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography fontFamily={"Sofia Sans"} variant='subtitle1' fontWeight={500}>E-Wallet</Typography>
                    </Box>
                  }
                />
              </RadioGroup>
  
              <Box mt={8}>
                <Typography variant="h6" textAlign={"left"} fontFamily={"Sofia Sans"} gutterBottom
                sx={{
                  color: "white",
                  opacity: 0.8
                }}
                >
                  Payment Details
                </Typography>
                <TextField
                  fullWidth
                  variant="standard"
                  label="Enter Name on Card"
                  margin="normal"
                  color='primary'
                  sx={{
                    '& label': { color: 'white' },
                    '& label.Mui-focused': { color: '#85E22B' },
                    '& .MuiInput-underline:after': { borderBottomColor: '#85E22B' },
                    '& .MuiInput-underline:before': { borderBottomColor: 'white' },
                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: 'white' },
                    '& .MuiInputBase-input': { color: 'white' },
                    '& .MuiInputBase-input:after': { color: '#85E22B' },
                    '& .MuiInputBase-input:before': { color: 'white' },
                    '& .MuiInputBase-input:hover:not(.Mui-disabled):before': { color: 'white' },
                  }}
                  fontFamily={"Sofia Sans"}
                />
                <TextField
                  fullWidth
                  variant="standard"
                  label="Card Number"
                  margin="normal"
                  sx={{
                    '& label': { color: 'white' },
                    '& label.Mui-focused': { color: '#85E22B' },
                    '& .MuiInput-underline:after': { borderBottomColor: '#85E22B' },
                    '& .MuiInput-underline:before': { borderBottomColor: 'white' },
                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: 'white' },
                    '& .MuiInputBase-input': { color: 'white' },
                    '& .MuiInputBase-input:after': { color: '#85E22B' },
                    '& .MuiInputBase-input:before': { color: 'white' },
                    '& .MuiInputBase-input:hover:not(.Mui-disabled):before': { color: 'white' },
                  }}
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
                      sx={{
                        '& label': { color: 'white' },
                        '& label.Mui-focused': { color: '#85E22B' },
                        '& .MuiInput-underline:after': { borderBottomColor: '#85E22B' },
                        '& .MuiInput-underline:before': { borderBottomColor: 'white' },
                        '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: 'white' },
                        '& .MuiInputBase-input': { color: 'white' },
                        '& .MuiInputBase-input:after': { color: '#85E22B' },
                        '& .MuiInputBase-input:before': { color: 'white' },
                        '& .MuiInputBase-input:hover:not(.Mui-disabled):before': { color: 'white' },
                      }}
                      fontFamily={"Sofia Sans"}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      variant="standard"
                      label="CVV Code"
                      margin="normal"
                      sx={{
                        '& label': { color: 'white' },
                        '& label.Mui-focused': { color: '#85E22B' },
                        '& .MuiInput-underline:after': { borderBottomColor: '#85E22B' },
                        '& .MuiInput-underline:before': { borderBottomColor: 'white' },
                        '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: 'white' },
                        '& .MuiInputBase-input': { color: 'white' },
                        '& .MuiInputBase-input:after': { color: '#85E22B' },
                        '& .MuiInputBase-input:before': { color: 'white' },
                        '& .MuiInputBase-input:hover:not(.Mui-disabled):before': { color: 'white' },
                      }}
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
                <Button variant="outlined" color="primary" fontFamily={"Sofia Sans"}
                sx={{
                  backgroundColor: "transparent",
                  borderColor: "#85E22B",
                  color: "#85E22B",
                  padding: "15px",
                  borderRadius: "8px",
                  marginRight: "45px",
                  width: "170px",
                  height: "50px",
                  '&:hover': {
                    backgroundColor: "#85E22B",
                    color: "white",
                    borderColor: "#85E22B",
                  }
                }}
                >
                  Back
                </Button>
                <Button variant="outlined" color="primary"
                sx={{
                  backgroundColor: "transparent",
                  borderColor: "#85E22B",
                  color: "#85E22B",
                  padding: "15px",
                  borderRadius: "8px",
                  width: "170px",
                  height: "50px",
                  '&:hover': {
                    backgroundColor: "#85E22B",
                    color: "white",
                    borderColor: "#85E22B",
                  }
                  }}
                  fontFamily={"Sofia Sans"} onClick={handleConfirmPayment}>
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
                <Typography id="confirmation-modal-title" width={"300px"} textAlign={"center"} variant="h6" fontFamily={"Sofia Sans"} fontWeight={800} component="h2" color={"black"}>
                  Are you sure you want to confirm paying {localStorage.getItem('selectedPrice')}?
                </Typography>
                <Box display="flex" justifyContent="space-around" mt={4}>
                  <Button variant="outlined" sx={{
                    backgroundColor : "transparent",
                    borderColor: "#6AB224",
                    color: "#6AB224",
                    width: "100px",
                    height: "50px",
                    fontSize: "18px",
                    '&:hover': {
                      backgroundColor: "#6AB224",
                      color: "white",
                      borderColor: "#6AB224",
                    }
                  }}
                  onClick={handleCloseModal}>Cancel</Button>
                  <Button variant="outlined" sx={{
                    backgroundColor : "transparent",
                    borderColor: "#6AB224",
                    color: "#6AB224",
                    width: "100px",
                    height: "50px",
                    fontSize: "18px",
                    '&:hover': {
                      backgroundColor: "#6AB224",
                      color: "white",
                      borderColor: "#6AB224",
                    }
                  }}
                  onClick={() => {
                    handleCloseModal();
                    setPaymentStatus("Confirmation");
                    }}>OK</Button>
                </Box>
              </Box>
            </Modal>
          </Grid>
  
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', justifyContent: 'left', marginLeft: "-390px", marginTop: "-5px" }}>
              <img src={TrainingPayment} alt="Training Payment" style={{ width: "1100px"}} />
            </Box>
          </Grid>
        </Grid>
      </>
    );
  };
  
  export default Payment;
