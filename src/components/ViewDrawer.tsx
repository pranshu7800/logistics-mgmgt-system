import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { PopupProps } from '../interface/Popup';
import Tracker from './Tracker';
import ShipmentTracker from './ShipmentTracker';

const ViewDrawer = ({ open, toggle, shipment }: PopupProps) => {

    const toggleDrawer =
        (state: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                toggle(state);
            };

    const list = () => (
        <>
            <Box
                sx={{ width: 250, padding: 2, borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
                role="presentation"
            >
                <Typography variant="body1" tabIndex={0} py={1}>
                    Track Details
                </Typography>

            </Box>
            <Grid spacing={2} direction={"column"} p={2}>
                <Typography variant="body2" tabIndex={0} sx={{ fontWeight: "bold" }}>
                    {shipment?.id}
                </Typography>
                <Typography variant="caption" component={'div'} tabIndex={0}>
                    {`Origin: ${shipment?.origin}`}
                </Typography>
                <Typography variant="caption" tabIndex={0} component={'div'}>
                    {`Destination: ${shipment?.destination}`}
                </Typography>
                <Typography variant="caption" tabIndex={0} component={'div'}>
                    {`Amount: Rs. ${shipment?.price}`}
                </Typography>
                <Divider />
            </Grid>
            <ShipmentTracker status={shipment?.status} id={shipment?.id}/>
        </>
    );

    return (
        <Drawer
            anchor={"right"}
            open={open}
            onClose={toggleDrawer(false)}
        >
            {list()}
        </Drawer>
    );
}

export default ViewDrawer;
