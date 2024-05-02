import React from 'react';
import Typography from '@mui/material/Typography';
import DataTable from '../components/DataTable';
import { useDispatch, useSelector } from 'react-redux';
import { shipmentActions } from '../redux/actions';
import ErrorBoundary from '../components/ErrorBoundary';

const Shipments: React.FC = () => {
    const { filteredShipments: shipments } = useSelector((state: any) => state.shipment);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch<any>(shipmentActions.fetchShipments());
    }, []);

    return (
        <ErrorBoundary>
            <Typography variant="h6" tabIndex={0} pt={2}>
                Shipments
            </Typography>
            <DataTable rows={shipments} />
        </ErrorBoundary>
    );
};

export default Shipments;