import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { PopupProps } from '../interface/Popup';
import EditShipment from './EditShipment';

const EditModal = ({ open, toggle, shipment }: PopupProps) => {

    const handleClose = () => {
        toggle(false);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogContent>
                <EditShipment shipment={shipment} close={handleClose} />
            </DialogContent>
        </Dialog>
    );
}

export default EditModal;