import * as React from 'react';
import { Grid } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import ReplyIcon from '@mui/icons-material/Reply';
import ReceiptIcon from '@mui/icons-material/Receipt';
import TuneIcon from '@mui/icons-material/Tune';
import { Divider } from '@mui/material';
import styled from '@emotion/styled';
import { Outlet, useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const SidePanel = () => {
    return (
        <Grid container spacing={2} style={{
            display: "flex",
            justifyContent: "center",
        }}>
            <Grid item xs={12} md={2} textAlign={"center"} sx={{ display: "flex", flexGrow: 1, flexDirection:"column" }}>
                <Services />
                <Divider />
                <Settings />
                <Divider />
                <Help />
            </Grid>
            <Grid item md={10} xs={12}>
                <Outlet />
            </Grid>
        </Grid>
    );
}

const CustomList = styled(List)<{ component?: React.ElementType }>({
    '& .MuiListItemIcon-root': {
        minWidth: 0,
        marginRight: 16,
    },
    '& .MuiTypography-root': {
        fontSize: 14,
        fontWeight: 500,
    },
    '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: '#212121',
    },
    '& .Mui-selected': {
        backgroundColor: '#F3EFEF',
        borderRight: '4px solid #212121',
    },
    '& .MuiListSubheader-root': {
        textAlign: "left"
    },
});

const Services = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (index: number, path: string) => {
        setSelectedIndex(index);
        navigate(path);
    };

    return (
        <CustomList
            sx={{ width: '100%', bgcolor: 'background.paper', borderRight: '1px solid rgba(0, 0, 0, 0.12)', pb: 2 }}
            component="nav"
            aria-labelledby="shipment-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Services
                </ListSubheader>
            }
        >
            <ListItemButton
                sx={{ py: 0 }}
                onClick={() => handleListItemClick(0, "/services/create")}
                selected={selectedIndex === 0}
            >
                <ListItemIcon>
                    <DomainAddIcon />
                </ListItemIcon>
                <ListItemText primary="Add Shipment" />
            </ListItemButton>
            <ListItemButton
                sx={{ py: 0 }}
                onClick={() => handleListItemClick(1, "/services/shipments")}
                selected={selectedIndex === 1}>
                <ListItemIcon>
                    <SystemUpdateAltIcon />
                </ListItemIcon>
                <ListItemText primary="Shipments" />
            </ListItemButton>
            <ListItem sx={{ py: 0 }}>
                <ListItemIcon>
                    <ReplyIcon />
                </ListItemIcon>
                <ListItemText primary="Return" />
            </ListItem>
            <ListItem sx={{ py: 0 }}>
                <ListItemIcon>
                    <ReceiptIcon />
                </ListItemIcon>
                <ListItemText primary="Invoice" />
            </ListItem>
            <ListItem sx={{ py: 0 }}>
                <ListItemIcon>
                    <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Procurement" />
            </ListItem>
        </CustomList>
    );
}

const Settings = () => {
    return (
        <CustomList
            sx={{ width: '100%', bgcolor: 'background.paper', borderRight: '1px solid rgba(0, 0, 0, 0.12)', pb: 2 }}
            component="nav"
            aria-labelledby="shipment-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Settings
                </ListSubheader>
            }
            disablePadding
        >
            <ListItem sx={{ py: 0 }}>
                <ListItemIcon>
                    <LocalShippingIcon />
                </ListItemIcon>
                <ListItemText primary="Pickup" />
            </ListItem>
            <ListItem sx={{ py: 0 }}>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Templates" />
            </ListItem>
            <ListItem sx={{ py: 0 }}>
                <ListItemIcon>
                    <NotificationsActiveIcon />
                </ListItemIcon>
                <ListItemText primary="Notification" />
            </ListItem>
            <ListItem sx={{ py: 0 }}>
                <ListItemIcon>
                    <TuneIcon />
                </ListItemIcon>
                <ListItemText primary="General" />
            </ListItem>
        </CustomList>
    );
}

const Help = () => {
    return (
        <CustomList
            sx={{ flexGrow: 1, width: '100%', bgcolor: 'background.paper', borderRight: '1px solid rgba(0, 0, 0, 0.12)', pb: 5 }}
            component="nav"
            aria-labelledby="help-list-subheader"
            subheader={
                <ListSubheader component="div" id="help-list-subheader">
                    Help
                </ListSubheader>
            }
            disablePadding
        >
            <ListItem sx={{ py: 0 }}>
                <ListItemIcon>
                    <MonetizationOnIcon />
                </ListItemIcon>
                <ListItemText primary="Pricing" />
            </ListItem>
        </CustomList>
    );
}

export default SidePanel;