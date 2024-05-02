import React from 'react';
import { Grid, Paper, Typography, styled } from '@mui/material';

const HomePaper = styled(Paper)({
    padding: 20,
    paddingBottom: 0,
    textAlign: "center",
    backgroundColor: "black",
    opacity: 0.6,
});

const HomeCard: React.FC = () => {
    return (
        <Grid item xs={12} sm={7} textAlign={"center"} p={3} display={"flex"} pb={0}>
            <HomePaper elevation={0} style={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h3" color="white" gutterBottom>
                    Making the world smaller: Logistics Solutions for a Connected Global Village
                </Typography>
            </HomePaper>
        </Grid>
    );
};

export default HomeCard;