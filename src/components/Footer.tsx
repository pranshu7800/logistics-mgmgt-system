import React from 'react';
import { Grid, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const StyledNav = styled(NavLink)({
    textDecoration: 'none',
    color: 'inherit'
});

const FooterGrid = styled(Grid)({
    width: "100%",
    bottom: 0,
    padding: 20,
    backgroundColor: "#212121",
    color: "#fff",
    marginLeft: 0,
    marginTop: 0
});

const FooterTypo = styled(Typography)({
    color: "#ffd600"
});

const Footer: React.FC = () => {
    return (
        <footer>
            <FooterGrid container spacing={2}>
                <Grid item xs={12} sm={4} textAlign={"center"}>
                    <FooterTypo variant="h6" gutterBottom tabIndex={0}>
                        About Us
                    </FooterTypo>
                    <Typography variant="body2" gutterBottom tabIndex={0}>
                        GloLogistics is a premier global logistics provider dedicated to streamlining supply chains and delivering excellence across borders
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4} textAlign={"center"}>
                    <FooterTypo variant="h6" gutterBottom tabIndex={0}>
                        Contact Us
                    </FooterTypo>
                    <Typography variant="body2" gutterBottom tabIndex={0}>
                        Address: Suite 653 712 Dona Junctions, Hueltown, NY 20882-1157
                    </Typography>
                    <Typography variant="body2" gutterBottom tabIndex={0}>
                        Phone: 1234567890
                    </Typography>
                    <Typography variant="body2" gutterBottom tabIndex={0}>
                        Email: glo_log@gmail.com
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4} textAlign={"center"}>
                    <FooterTypo variant="h6" gutterBottom tabIndex={0}>
                        Social Media
                    </FooterTypo>
                    <Typography variant="body2" gutterBottom>
                        <StyledNav to="#">Facebook</StyledNav>
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        <StyledNav to="#">Twitter</StyledNav>
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        <StyledNav to="#">Instagram</StyledNav>
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        <StyledNav to="#">LinkedIn</StyledNav>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Typography variant="body2" color="secondary" align="center" tabIndex={0}>
                        Copyright &copy; 2024
                    </Typography>
                </Grid>
            </FooterGrid>
        </footer>
    );
}

export default Footer;