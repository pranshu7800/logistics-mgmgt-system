import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import SenderForm from '../components/SenderForm';
import ReceiverForm from '../components/ReceiverForm';
import ShipmentForm from '../components/ShipmentForm';
import Agreement from '../components/Agreement';
import { useDispatch, useSelector } from 'react-redux';
import { shipmentActions } from '../redux/actions';

const steps = ['Sender Details', 'Receipient Details', 'Shipment Details', 'Agreement',];

export default function HorizontalLinearStepper() {
    const { activeStep } = useSelector((state: any) => state.shipment);
    const [skipped, setSkipped] = React.useState(new Set<number>());
    const { newId } = useSelector((state: any) => state.shipment);
    const dispatch = useDispatch();

    const isStepSkipped = (step: number) => {
        return skipped.has(step);
    };

    const handleReset = () => {
        // setActiveStep(0);
        dispatch<any>(shipmentActions.resetShipment())
    };

    const getStepContent = (step: number) => {
        switch (step) {
            case 0:
                return <SenderForm />;
            case 1:
                return <ReceiverForm />;
            case 2:
                return <ShipmentForm />;
            case 3:
                return <Agreement />;
            default:
                return 'Unknown step';
        }
    }

    return (
        <>
            <Typography variant="h6" tabIndex={0} pt={2}>
                Create Shipment
            </Typography>
            <Box sx={{ width: '100%' }}>
                <Grid container>
                    <Grid item xs={12} pt={2} pr={2}>
                        <Paper sx={{ mb: 2, border: '1px solid rgba(0, 0, 0, 0.12)', padding: 2 }} elevation={0}>
                            <Stepper activeStep={activeStep}>
                                {steps.map((label, index) => {
                                    const stepProps: { completed?: boolean } = {};
                                    const labelProps: {
                                        optional?: React.ReactNode;
                                    } = {};
                                    if (isStepSkipped(index)) {
                                        stepProps.completed = false;
                                    }
                                    return (
                                        <Step key={label} {...stepProps}>
                                            <StepLabel {...labelProps}>{label}</StepLabel>
                                        </Step>
                                    );
                                })}
                            </Stepper>
                            {activeStep === steps.length ? (
                                <>
                                    <div style={{ paddingTop: 50, paddingBottom: 50 }}>
                                        <div style={{ display: "flex", justifyContent: "center" }}>
                                            <TaskAltIcon color="success" sx={{ fontSize: 80, flexGrow: 1, }} />
                                        </div>
                                        <Typography sx={{ mt: 2, mb: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            {`Shipment with id ${newId} Created Successfully`}
                                        </Typography>
                                    </div>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                        <Box sx={{ flex: '1 1 auto' }} />
                                        <Button onClick={handleReset} variant='contained'>Reset</Button>
                                    </Box>
                                </>
                            ) : (
                                <Typography component={'div'} variant="h6" gutterBottom tabIndex={0}>
                                    {getStepContent(activeStep)}
                                </Typography>
                            )}
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
