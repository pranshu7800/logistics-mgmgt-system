import { Box, Button, Checkbox, Grid, Typography } from '@mui/material';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { shipmentActions } from '../redux/actions';

const Agreement = () => {
    const { isAgreed } = useSelector((state: any) => state.shipment.newShipment);
    const dispatch = useDispatch();
    const { activeStep } = useSelector((state: any) => state.shipment);

    const agree = () => {
        dispatch<any>(shipmentActions.agreeToTerms(!isAgreed));
    }

    const handleCreate = () => {
        handleNext();
        dispatch<any>(shipmentActions.createShipment())
    }

    const handleNext = () => {
        dispatch(shipmentActions.navigateNext());
    }
    
    const handleBack = () => {
        dispatch(shipmentActions.navigateBack());
    }

    return (
        <>
            <Grid item xs={12} p={3}>
                <Typography variant="body2" sx={{ lineHeight: 2, textJustify: "auto", textAlign: "justify" }}>
                    <Checkbox
                        color="primary"
                        size='small'
                        inputProps={{ 'aria-label': 'i agree' }}
                        tabIndex={0}
                        checked={isAgreed}
                        onChange={agree}
                        icon={<CheckCircleOutlineOutlinedIcon />}
                        checkedIcon={<CheckCircleIcon />}
                        sx={{ padding: 0, paddingRight: 1 }}
                    />
                    By clicking "I Agree", you, the shipper, hereby agree to the terms and conditions of GloLogistics's Shipment Agreement.
                    You confirm that the information provided about the shipment is accurate and complete.
                    You agree to ensure that the shipment is prepared securely for transportation.
                    You understand that any failure to comply with these terms may result in additional charges, delays, or refusal of shipment.
                    You acknowledge and agree that the shipment may be carried by different routes and any storage, transshipment, or reshipment may be at the discretion of the carrier.
                </Typography>
            </Grid>
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
                <Button onClick={handleCreate} variant='contained' disabled={!isAgreed}>
                    Create
                </Button>
            </Box>
        </>
    )
}

export default Agreement;