import React from 'react';
import { Grid, TextField, Select, MenuItem, InputAdornment, InputLabel, FormControl, Box, Button, Typography, Alert, Snackbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useSelector, useDispatch } from 'react-redux';
import { shipmentActions } from '../redux/actions';

const ShipmentGrid = styled(Grid)({
    marginTop: 0,
    color: "#fff",
    display: "flex",
    justifyContent: "center"
});

const ShipmentForm: React.FC = () => {
    const { shippingMode, paymentMode, status, assignee, consignor, product, shipmentDate, arrivalDate, price } = useSelector((state: any) => state.shipment.newShipment);
    const [shipment, setShipment] = React.useState({
        shippingMode: shippingMode || "",
        paymentMode: paymentMode || "",
        status: status || "",
        assignee: assignee || "",
        consignor: consignor || "",
        product: product || "",
        shipmentDate: shipmentDate || "",
        arrivalDate: arrivalDate || "",
        price: price || "",
    });
    const [error, setError] = React.useState<string>("");
    const [adInput, setAdInput] = React.useState<string>("text");
    const [sdInput, setSdInput] = React.useState<string>("text");
    const { activeStep } = useSelector((state: any) => state.shipment);
    const dispatch = useDispatch();
    const shipmentRef = React.useRef(shipment);

    React.useEffect(() => {
        shipmentRef.current = shipment;
    }, [shipment]);

    const isValidForm = () => {
        if (!shipment.shippingMode || !shipment.paymentMode || !shipment.status || !shipment.assignee || !shipment.consignor || !shipment.product || !shipment.shipmentDate || !shipment.arrivalDate || !shipment.price) {
            setError("All fields are required");
            return false;
        } else {
            return true;
        }
    }

    React.useEffect(() => {
        return () => {
            dispatch(shipmentActions.saveShipment(shipmentRef.current));
        }
    }, [])

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
            <ShipmentGrid container spacing={2}>
                <Grid item xs={12}>
                    <form>
                        <Grid container spacing={2} p={3}>
                            <Grid item xs={12} sm={4}>
                                <FormControl fullWidth>
                                    <InputLabel id="shipping-select">Shipping Mode</InputLabel>
                                    <Select
                                        labelId='shipping-select'
                                        value={shipment.shippingMode}
                                        onChange={(e) => setShipment({ ...shipment, shippingMode: e.target.value })}
                                        fullWidth
                                        label="Shipping Mode"
                                    >
                                        <MenuItem value="air">Air</MenuItem>
                                        <MenuItem value="sea">Sea</MenuItem>
                                        <MenuItem value="land">Land</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    id="consignor"
                                    label="Consignor"
                                    variant="outlined"
                                    fullWidth
                                    value={shipment.consignor}
                                    onChange={(e) => setShipment({ ...shipment, consignor: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormControl fullWidth>
                                    <InputLabel id="payment-select">Payment Mode</InputLabel>
                                    <Select
                                        labelId='payment-select'
                                        value={shipment.paymentMode}
                                        onChange={(e) => setShipment({ ...shipment, paymentMode: e.target.value })}
                                        fullWidth
                                        label="Payment Mode"
                                    >
                                        <MenuItem value="DDU">DDU</MenuItem>
                                        <MenuItem value="DDP">DDP</MenuItem>
                                        <MenuItem value="FOB">FOB</MenuItem>
                                        <MenuItem value="CIF">CIF</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    id="product"
                                    label="Product"
                                    variant="outlined"
                                    fullWidth
                                    value={shipment.product}
                                    onChange={(e) => setShipment({ ...shipment, product: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormControl fullWidth>
                                    <InputLabel id="status-select">Status</InputLabel>
                                    <Select
                                        labelId='status-select'
                                        value={shipment.status}
                                        onChange={(e) => setShipment({ ...shipment, status: e.target.value })}
                                        fullWidth
                                        label="Status"
                                    >
                                        <MenuItem value="dispatched">Dispatched</MenuItem>
                                        <MenuItem value="in transit">In Transit</MenuItem>
                                        <MenuItem value="clearance">Clearance</MenuItem>
                                        <MenuItem value="out for delivery">Out for Delivery</MenuItem>
                                        <MenuItem value="delivered">Delivered</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    id="assignee"
                                    label="Assignee"
                                    variant="outlined"
                                    fullWidth
                                    value={shipment.assignee}
                                    onChange={(e) => setShipment({ ...shipment, assignee: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    id="shipmentDate"
                                    label="Shipment Date"
                                    type={sdInput}
                                    variant="outlined"
                                    fullWidth
                                    value={shipment.shipmentDate}
                                    onFocus={() => setSdInput("date")}
                                    onBlur={() => setSdInput("text")}
                                    onChange={(e) => setShipment({ ...shipment, shipmentDate: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    id="arrivalDate"
                                    label="Arrival Date"
                                    type={adInput}
                                    variant="outlined"
                                    fullWidth
                                    value={shipment.arrivalDate}
                                    onFocus={() => setAdInput("date")}
                                    onBlur={() => setAdInput("text")}
                                    onChange={(e) => setShipment({ ...shipment, arrivalDate: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    id="price"
                                    label="Price"
                                    variant="outlined"
                                    fullWidth
                                    value={shipment.price}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <CurrencyRupeeIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                    onChange={(e) => setShipment({ ...shipment, price: e.target.value })}
                                />
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
                <Snackbar open={error ? true : false} autoHideDuration={6000} onClose={() => setError("")}  anchorOrigin={{ horizontal: "center", vertical: "bottom" }}>
                    <Alert onClose={() => setError("")} severity="error" sx={{ width: '100%' }} variant='filled'>
                        {error}
                    </Alert>
                </Snackbar>
            </ShipmentGrid>

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

export default ShipmentForm;