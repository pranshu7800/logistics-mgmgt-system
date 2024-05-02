import React, { useEffect } from 'react';
import { Alert, Box, Button, Grid, Snackbar, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { shipmentActions } from '../redux/actions';

const ReceiverGrid = styled(Grid)({
    marginTop: 0,
    color: "#fff",
    display: "flex",
    justifyContent: "center"
});

const ReceiverForm: React.FC = () => {
    const { receiverName, receiverEmail, receiverPhone, receiverAddress, receiverTaxId } = useSelector((state: any) => state.shipment.newShipment);
    const [receiver, setCustomer] = React.useState({
        receiverName: receiverName || "",
        receiverEmail: receiverEmail || "",
        receiverPhone: receiverPhone || "",
        receiverAddress: receiverAddress || "",
        receiverTaxId: receiverTaxId || "",
    });
    const [error, setError] = React.useState<string>("");
    const { activeStep } = useSelector((state: any) => state.shipment);
    const dispatch = useDispatch();
    const receiverRef = React.useRef(receiver);

    useEffect(() => {
        receiverRef.current = receiver;
    }, [receiver]);

    const isValidForm = () => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!receiver.receiverName || !receiver.receiverEmail || !receiver.receiverPhone || !receiver.receiverTaxId || !receiver.receiverAddress) {
            setError("All fields are required");
            return false;
        } else if (!emailRegex.test(receiver.receiverEmail)) {
            setError("Invalid receiverEmail");
            return false;
        } else {
            return true;
        }
    }

    useEffect(() => {
        return () => {
            dispatch(shipmentActions.saveShipment(receiverRef.current));
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
            <ReceiverGrid container spacing={2}>
                <Grid item xs={12}>
                    <form>
                        <Grid container spacing={2} p={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="receiverName"
                                    label="Name"
                                    variant="outlined"
                                    fullWidth
                                    value={receiver.receiverName}
                                    onChange={(e) => setCustomer({ ...receiver, receiverName: e.target.value })}
                                    tabIndex={0}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="receiverEmail"
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    value={receiver.receiverEmail}
                                    onChange={(e) => setCustomer({ ...receiver, receiverEmail: e.target.value })}
                                    tabIndex={0}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="receiverPhone"
                                    label="Phone"
                                    variant="outlined"
                                    fullWidth
                                    value={receiver.receiverPhone}
                                    onChange={(e) => setCustomer({ ...receiver, receiverPhone: e.target.value })}
                                    tabIndex={0}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="receiverTaxId"
                                    label="Tax ID"
                                    variant="outlined"
                                    fullWidth
                                    value={receiver.receiverTaxId}
                                    onChange={(e) => setCustomer({ ...receiver, receiverTaxId: e.target.value })}
                                    tabIndex={0}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    multiline
                                    id="addressLine1"
                                    label="Address"
                                    variant="outlined"
                                    fullWidth
                                    value={receiver.receiverAddress}
                                    onChange={(e) => setCustomer({ ...receiver, receiverAddress: e.target.value })}
                                    tabIndex={0}
                                />
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
                <Snackbar open={error ? true : false} autoHideDuration={6000} onClose={() => setError("")}  anchorOrigin={{ horizontal: "center", vertical: "bottom" }}>
                    <Alert onClose={() => setError("")} severity="error" sx={{ width: '100%' }}>
                        {error}
                    </Alert>
                </Snackbar>
            </ReceiverGrid>
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

export default ReceiverForm;



