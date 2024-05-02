import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const NotFoundGrid = styled(Grid)({
    marginTop: 0,
    color: "#000",
    display: "flex",
    paddingTop: 50,
    paddingBottom: 50,
    justifyContent: "center"
});

const NotFound: React.FC = () => {
    return (
        <NotFoundGrid container spacing={2}>
            <Grid item xs={12} sm={6} textAlign={"center"}>
                <Typography variant="h4" gutterBottom tabIndex={0}>
                    404 Page Not Found
                </Typography>
                <Typography variant="h6" gutterBottom tabIndex={0}>
                    This might be because you have typed the web address incorrectly, or the page you were looking for may have been moved, updated or deleted. Please use one of the links below.
                </Typography>
                <Grid p={4}>
                    <Button variant="contained" color="primary" component={Link} to="/">
                        Go Back
                    </Button>
                </Grid>
            </Grid>
        </NotFoundGrid>
    );
};

export default NotFound;