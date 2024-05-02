import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import SendTimeExtensionIcon from '@mui/icons-material/SendTimeExtension';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CancelIcon from '@mui/icons-material/Cancel';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import { TrackerProps } from '../interface/Tracker';

const shipmentStages = [
    "Dispatched",
    "In Transit",
    "Clearance",
    "Out for Delivery",
    "Delivered"
];

const ShipmentTracker: React.FC<TrackerProps> = ({ status, id }: TrackerProps) => {

    const getDotColor = (stage: string) => {
        if (status === "Delivered") {
            return "success";
        } else if (status === "Cancelled") {
            return "error";
        } else if (shipmentStages.indexOf(stage) < shipmentStages.indexOf(status)) {
            return "success";
        } else if (shipmentStages.indexOf(stage) === shipmentStages.indexOf(status)) {
            return "info";
        } else {
            return "grey";
        }
    }

    const getConnectorColor = (stage: string) => {
        if (status === "Delivered" || (shipmentStages.indexOf(stage) < shipmentStages.indexOf(status))) {
            return "success.main";
        } else if (shipmentStages.indexOf(stage) === shipmentStages.indexOf(status)) {
            return "info.main";
        } else {
            return "grey";
        }
    }

    const getIcon = (stage: string) => {
        if (shipmentStages.indexOf(stage) < shipmentStages.indexOf(status)) {
            return <CheckCircleIcon />;
        } else {
            switch (stage) {
                case "Dispatched":
                    return <SendTimeExtensionIcon />
                case "In Transit":
                    return <FlightTakeoffIcon />
                case "Clearance":
                    return <LocalPoliceIcon />
                case "Out for Delivery":
                    return <LocalShippingIcon />
                case "Delivered":
                    return <CheckCircleIcon />
                case "Cancelled":
                    return <CancelIcon />
                default:
                    return <FlightTakeoffIcon />
            }
        }
    }


    const getTimelineItem = (stage: string) => {
        console.log(getConnectorColor(stage));

        return (
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: getConnectorColor(stage) }} />
                    <TimelineDot color={getDotColor(stage)}>
                        {getIcon(stage)}
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent variant='body2' sx={{ display: "flex", alignItems: "center" }}>{stage}</TimelineContent>
            </TimelineItem>
        );
    }

    return (
        <Timeline position="alternate">
            {shipmentStages.map((stage) => getTimelineItem(stage))}
        </Timeline>
    );
};

export default ShipmentTracker;