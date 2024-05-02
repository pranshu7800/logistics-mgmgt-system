
import React from 'react';
import { Grid, Typography, TextField, Button, ToggleButton, ToggleButtonGroup, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const ShipmentGrid = styled(Grid)({
    marginTop: 0,
    color: "#fff",
    display: "flex",
    justifyContent: "center"
});

const ShipmentForm: React.FC = () => {
    const [shipment, setShipment] = React.useState({
        shippingMode: "",
        paymentMode: "",
        status: "",
        assignee: "",
        carrier: "",
        product: "",
        shipmentDate: "",
        arrivalDate: "",
        price: "",
    });
    const [error, setError] = React.useState<string>("");

    const isValidForm = () => {
        if (!shipment.shippingMode || !shipment.paymentMode || !shipment.status || !shipment.assignee || !shipment.carrier || !shipment.product || !shipment.shipmentDate || !shipment.arrivalDate || !shipment.price) {
            setError("All fields are required");
            return false;
        } else {
            return true;
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isValidForm()) {
            console.log(shipment);
        }
    }

    return (
        <ShipmentGrid container spacing={2}>
            <Grid item xs={12}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h6" gutterBottom>
                                Shipment Form
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <ToggleButtonGroup
                                value={shipment.shippingMode}
                                exclusive
                                onChange={(e, value) => setShipment({ ...shipment, shippingMode: value })}
                            >
                                <ToggleButton value="air" aria-label="air">
                                    Air
                                </ToggleButton>
                                <ToggleButton value="sea" aria-label="sea">
                                    Sea
                                </ToggleButton>
                                <ToggleButton value="land" aria-label="land">
                                    Land
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Grid>
                        <Grid item xs={12}>
                            <Select
                                value={shipment.paymentMode}
                                onChange={(e) => setShipment({ ...shipment, paymentMode: e.target.value })}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="" disabled>
                                    Payment Mode
                                </MenuItem>
                                <MenuItem value="DDU">DDU</MenuItem>
                                <MenuItem value="DDP">DDP</MenuItem>
                                <MenuItem value="FOB">FOB</MenuItem>
                                <MenuItem value="CIF">CIF</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12}>
                            <Select
                                value={shipment.status}
                                onChange={(e) => setShipment({ ...shipment, status: e.target.value })}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="" disabled>
                                    Status
                                </MenuItem>
                                <MenuItem value="dispatched">Dispatched</MenuItem>
                                <MenuItem value="in transit">In Transit</MenuItem>
                                <MenuItem value="clearance">Clearance</MenuItem>
                                <MenuItem value="out for delivery">Out for Delivery</MenuItem>
                                <MenuItem value="delivered">Delivered</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="assignee"
                                label="Assignee"
                                variant="outlined"
                                fullWidth
                                value={shipment.assignee}
                                onChange={(e) => setShipment({ ...shipment, assignee: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="carrier"
                                label="Carrier"
                                variant="outlined"
                                fullWidth
                                value={shipment.carrier}
                                onChange={(e) => setShipment({ ...shipment, carrier: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="product"
                                label="Product"
                                variant="outlined"
                                fullWidth
                                value={shipment.product}
                                onChange={(e) => setShipment({ ...shipment, product: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="shipmentDate"
                                label="Shipment Date"
                                type="date"
                                variant="outlined"
                                fullWidth
                                value={shipment.shipmentDate}
                                onChange={(e) => setShipment({ ...shipment, shipmentDate: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="arrivalDate"
                                label="Arrival Date"
                                type="date"
                                variant="outlined"
                                fullWidth
                                value={shipment.arrivalDate}
                                onChange={(e) => setShipment({ ...shipment, arrivalDate: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="price"
                                label="Price"
                                variant="outlined"
                                fullWidth
                                value={shipment.price}
                                onChange={(e) => setShipment({ ...shipment, price: e.target.value })}
                            />
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </ShipmentGrid>
    );
}

export default ShipmentForm;