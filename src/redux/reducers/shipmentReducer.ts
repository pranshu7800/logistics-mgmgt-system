const initialState = {
    shipments: [],
    filteredShipments: [],
    loading: false,
    error: null,
    newId: "TEST#ID123",
    newShipment: {
        isAgreed: false,
    },
    activeStep: 0
};

interface ActionObject {
    type: string;
    payload: any;
}

const shipmentReducer = (state = initialState, action: ActionObject) => {
    switch (action.type) {
        case "FETCH_SHIPMENTS_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "FETCH_SHIPMENTS_SUCCESS":
            return {
                ...state,
                shipments: action.payload,
                filteredShipments: action.payload,
                loading: false,
            };
        case "FETCH_SHIPMENTS_FAILURE":
            return {
                ...state,
                error: action.payload,
                loading: false,
            };

        case "FILTER_SHIPMENTS":
            return {
                ...state,
                filteredShipments: state.shipments.filter((shipment: any) => {
                    return Object.values(shipment).some((value: any) => {
                        return value.toString().toLowerCase().includes(action.payload.toLowerCase());
                    });
                })
            };

        case "CREATE_SHIPMENT":
            console.log("CREATE_SHIPMENT", action.payload);

            return {
                ...state,
                shipments: [...state.shipments, action.payload],
                newId: action.payload.id,
            };

        case "SAVE_SHIPMENT":
            console.log("SAVE_SHIPMENT", action.payload);

            return {
                ...state,
                newShipment: { ...state.newShipment, ...action.payload },
            };

        case "AGREE_TO_TERMS":
            return {
                ...state,
                newShipment: { ...state.newShipment, isAgreed: action.payload },
            };

        case "CLEAR_SHIPMENT":
            return {
                ...state,
                newShipment: initialState.newShipment,
                activeStep: 0,
            };

        case "NAVIGATE_NEXT":
            return {
                ...state,
                activeStep: state.activeStep + 1,
            };

        case "NAVIGATE_BACK":
            return {
                ...state,
                activeStep: state.activeStep - 1,
            };

        case "EDIT_SHIPMENT":
            return {
                ...state,
                newShipment: action.payload,
            };

        case "EDIT_SHIPMENT_SUCCESS":
            return {
                ...state,
                shipments: state.shipments.map((shipment: any) => {
                    return shipment.id === action.payload.id ? action.payload : shipment;
                }),
                filteredShipments: state.shipments.map((shipment: any) => {
                    return shipment.id === action.payload.id ? action.payload : shipment;
                })
            };

        case "EDIT_SHIPMENT_FAILURE":
            return {
                ...state,
                error: action.payload
            }

        default:
            return state;
    }
};

export { shipmentReducer };