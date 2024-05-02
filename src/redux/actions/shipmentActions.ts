import axios from 'axios';
import { Dispatch } from 'redux';

const shipmentActions = {
    fetchShipments: () => async (dispatch: Dispatch) => {
        dispatch({ type: "FETCH_SHIPMENTS_REQUEST" });

        try {
            const response = await axios.get('http://localhost:4001/shipments');
            dispatch({ type: "FETCH_SHIPMENTS_SUCCESS", payload: response.data });
        } catch (error) {
            dispatch({ type: "FETCH_SHIPMENTS_FAILURE", payload: "Some error occured while fetching the shipments" });
        }
    },
    filterShipments: (searchString: string) => {
        return {
            type: "FILTER_SHIPMENTS",
            payload: searchString,
        };
    },

    createShipment: () => async (dispatch: Dispatch, getState: Function): Promise<void> => {
        try {
            const newShipment = getState().shipment.newShipment;
            const shipment = {
                id: 'AWB#' + Math.random().toString(36).substr(2, 9),
                "customer": newShipment.senderName,
                "origin": newShipment.senderAddress,
                "destination": newShipment.receiverAddress,
                "status": "In Transit",
                "price": 51000,
                "shipmentDate": "2024-01-01",
                "arrivalDate": "2024-01-10",
                "assignee": newShipment.assignee,
                "paymentMode": "DDP",
                "shippingMode": "Land"
            }
            await axios.post('http://localhost:4001/shipments', shipment);

            dispatch({ type: "CREATE_SHIPMENT", payload: shipment });
        } catch (error) {
            console.error(error);
        }
    },

    saveShipment: (payload: any) => {
        return {
            type: "SAVE_SHIPMENT",
            payload,
        };
    },

    agreeToTerms: (isAgreed: boolean) => {
        return {
            type: "AGREE_TO_TERMS",
            payload: isAgreed,
        };
    },

    resetShipment: () => {
        return {
            type: "CLEAR_SHIPMENT",
        };
    },

    navigateNext: () => {
        return {
            type: "NAVIGATE_NEXT",
        };
    },

    navigateBack: () => {
        return {
            type: "NAVIGATE_BACK",
        };
    },

    editShipment: (shipment: any) => async (dispatch: Dispatch): Promise<void> => {
        try {
            console.log(`http://localhost:4001/shipments/${shipment.id}`);
            
            const response = await axios.put(`http://localhost:4001/shipments/${shipment.id}`, shipment);
            dispatch({ type: "EDIT_SHIPMENT_SUCCESS", payload: response.data });
        } catch (error) {
            dispatch({ type: "EDIT_SHIPMENT_FAILURE", payload: "Some error occured while updating the data" });
        }
    }
};

export { shipmentActions };