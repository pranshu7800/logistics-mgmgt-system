import React, { useEffect } from 'react';
import { Grid, Typography, TextField, Snackbar, Alert, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { shipmentActions } from '../redux/actions';

const CustomerGrid = styled(Grid)({
    marginTop: 0,
    color: "#fff",
    display: "flex",
    justifyContent: "center"
});

const SenderForm: React.FC = () => {
    const { senderName, senderEmail, senderPhone, senderAddress, senderTaxId } = useSelector((state: any) => state.shipment.newShipment);
    const [customer, setCustomer] = React.useState({
        senderName: senderName || "",
        senderEmail: senderEmail || "",
        senderPhone: senderPhone || "",
        senderAddress: senderAddress || "",
        senderTaxId: senderTaxId || "",
    });
    const [error, setError] = React.useState<string>("");
    const { activeStep } = useSelector((state: any) => state.shipment);
    const dispatch = useDispatch();
    const customerRef = React.useRef(customer);

    useEffect(() => {
        customerRef.current = customer;
    }, [customer]);

    const isValidForm = () => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!customer.senderName || !customer.senderEmail || !customer.senderPhone || !customer.senderTaxId || !customer.senderAddress) {
            setError("All fields are required");
            return false;
        } else if (!emailRegex.test(customer.senderEmail)) {
            setError("Invalid Email");
            return false;
        } else {
            return true;
        }
    }

    useEffect(() => {
        return () => {
            dispatch(shipmentActions.saveShipment(customerRef.current));
        }
    }, []);

    const handleNext = () => {
        if (isValidForm()) {
            dispatch(shipmentActions.navigateNext());
        }
    }

    const handleBack = () => {
        dispatch(shipmentActions.navigateBack());
    }

    return (
        <>
            <CustomerGrid container spacing={2}>
                <Grid item xs={12}>
                    <form>
                        <Grid container spacing={2} p={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="senderName"
                                    label="Name"
                                    variant="outlined"
                                    fullWidth
                                    value={customer.senderName}
                                    onChange={(e) => setCustomer({ ...customer, senderName: e.target.value })}
                                    tabIndex={0}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="senderEmail"
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    value={customer.senderEmail}
                                    onChange={(e) => setCustomer({ ...customer, senderEmail: e.target.value })}
                                    tabIndex={0}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="senderPhone"
                                    label="Phone"
                                    variant="outlined"
                                    fullWidth
                                    value={customer.senderPhone}
                                    onChange={(e) => setCustomer({ ...customer, senderPhone: e.target.value })}
                                    tabIndex={0}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="senderTaxId"
                                    label="Tax ID"
                                    variant="outlined"
                                    fullWidth
                                    value={customer.senderTaxId}
                                    onChange={(e) => setCustomer({ ...customer, senderTaxId: e.target.value })}
                                    tabIndex={0}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    multiline
                                    id="senderAddress"
                                    label="Address"
                                    variant="outlined"
                                    fullWidth
                                    value={customer.senderAddress}
                                    onChange={(e) => setCustomer({ ...customer, senderAddress: e.target.value })}
                                    tabIndex={0}
                                />
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
                <Snackbar open={error ? true : false} autoHideDuration={6000} onClose={() => setError("")} anchorOrigin={{ horizontal: "center", vertical: "bottom" }}>
                    <Alert onClose={() => setError("")} severity="error" sx={{ width: '100%' }} variant='filled'>
                        {error}
                    </Alert>
                </Snackbar>
            </CustomerGrid>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                    variant='contained'
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                >
                    Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleNext} variant='contained'>
                    Next
                </Button>
            </Box>
        </>
    );
}

export default SenderForm;



