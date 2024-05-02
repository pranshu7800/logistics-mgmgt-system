import React from 'react';
import { Grid, Typography } from '@mui/material';
import ContactCards from '../components/ContactCards';
import { styled } from '@mui/material/styles';

const ContactGrid = styled(Grid)({
    marginTop: 0,
});

const Contact: React.FC = () => {
    return (
        <ContactGrid container spacing={2} style={{
            display: "flex",
            paddingTop: 50,
            justifyContent: "center"
        }}>
            <Grid item xs={12} sm={6} textAlign={"center"}>
                <Typography variant="h6" gutterBottom tabIndex={0}>
                    Contact Us
                </Typography>
                <Typography variant="body1" gutterBottom tabIndex={0}>
                    Our dedicated team of logistics experts is here for you. Whether you have inquiries about cargo status or want to know more about our solutions, please don't hesitate to contact us, and we will be delighted to assist you.
                </Typography>
            </Grid>
            <Grid container spacing={2} p={5}>
                <ContactCards />
            </Grid>
        </ContactGrid>
    );
};

export default Contact;

