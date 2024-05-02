import React from 'react';
import { Button, TextField, Grid, Typography, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Data } from '../interface/Data';
import { useDispatch } from 'react-redux';
import { shipmentActions } from '../redux/actions';

interface EditShipmentProps {
    shipment: Data,
    close: () => void;
}

const ddArray = [
    { value: "dispatched", label: "Dispatched" },
    { value: "in transit", label: "In Transit" },
    { value: "clearance", label: "Clearance" },
    { value: "out for delivery", label: "Out for Delivery" },
    { value: "delivered", label: "Delivered" },
    { value: "cancelled", label: "Cancelled" }
]

const EditShipment = ({ shipment, close }: EditShipmentProps) => {

    const [adInput, setAdInput] = React.useState<string>("text");
    const [status, setStatus] = React.useState<string>(shipment?.status.toLowerCase());
    const [arrivalDate, setArrivalDate] = React.useState<string>(shipment.arrivalDate);
    const [assignee, setAssignee] = React.useState<string>(shipment.assignee);

    const dispatch = useDispatch();

    const handleEdit = () => {
        const ddLabel = ddArray.filter(item => item.value === status)[0].label
        dispatch<any>(shipmentActions.editShipment({ ...shipment, status:ddLabel, arrivalDate, assignee }));
        close()
    }

    return (
        <form>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6" align="center">{shipment.id}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Customer"
                        variant="outlined"
                        fullWidth
                        value={shipment.customer}
                        disabled
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Origin"
                        variant="outlined"
                        fullWidth
                        disabled
                        value={shipment.origin}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Destination"
                        variant="outlined"
                        fullWidth
                        disabled
                        value={shipment.destination}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel id="status-select">Status</InputLabel>
                        <Select
                            labelId='status-select'
                            value={status}
                            fullWidth
                            label="Status"
                            onChange={(e) => {
                                setStatus(e.target.value);
                            }}
                        >
                            {ddArray.map((item) => {
                                return <MenuItem value={item.value} key={`${shipment.id}dd`}>{item.label}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Price"
                        variant="outlined"
                        fullWidth
                        value={shipment.price}
                        disabled
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Shipment Date"
                        variant="outlined"
                        fullWidth
                        value={shipment.shipmentDate}
                        disabled
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Arrival Date"
                        variant="outlined"
                        fullWidth
                        type={adInput}
                        value={arrivalDate}
                        onFocus={() => setAdInput("date")}
                        onBlur={() => setAdInput("text")}
                        onChange={(e) => setArrivalDate(e.target.value)}
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Assignee"
                        variant="outlined"
                        fullWidth
                        value={assignee}
                        onChange={(e) => setAssignee(e.target.value)}
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Payment Mode"
                        variant="outlined"
                        fullWidth
                        value={shipment.paymentMode}
                        disabled
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Shipping Mode"
                        variant="outlined"
                        fullWidth
                        value={shipment.shippingMode}
                        disabled
                    />
                </Grid>
                <Grid item xs={12} display={"flex"} justifyContent={"flex-end"}>
                    <Button
                        variant="outlined"
                        color="primary"
                        sx={{ marginRight: 3, color: "primary.main" }}
                        onClick={close}
                    >
                        Cancel
                    </Button>
                    <Button variant="contained" color="primary" onClick={handleEdit}>
                        Save
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default EditShipment;


