import React from 'react';
import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const AboutGrid = styled(Grid)({
    marginTop: 0,
    color: "#fff",
});

const About: React.FC = () => {
    return (
        <AboutGrid container spacing={2} className='bg-about'>
            <Grid item xs={12} sm={6} textAlign={"center"}>
                <Typography variant="h6" gutterBottom tabIndex={0}>
                    About Us
                </Typography>
                <Typography variant="body1" gutterBottom tabIndex={0}>
                    GloLogistics is a premier global logistics provider dedicated to streamlining
                    supply chains and delivering excellence across borders. We seamlessly merge
                    innovation with sustainable practices by providing our customers with the most
                    optimal and cost-effective solutions. Our team of experts are committed to
                    providing the highest level of service and support to our customers. Our commitment
                    to leveraging technology and our global network of partners allows us to provide
                    our customers with the best possible solutions.
                </Typography>
                <Grid container spacing={2} p={10}>
                    <Grid item xs={12} sm={4} textAlign={"center"}>
                        <img src={"technology.png"} alt="technology" width={50} />
                        <Typography variant="body2" gutterBottom tabIndex={0}>
                            Technology
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} textAlign={"center"}>
                        <img src={"sustainable.png"} alt="sustainable" width={50} />
                        <Typography variant="body2" gutterBottom tabIndex={0}>
                            Sustainability
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} textAlign={"center"}>
                        <img src={"global.png"} alt="global" width={50} />
                        <Typography variant="body2" gutterBottom tabIndex={0}>
                            Global
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </AboutGrid>
    );
};

export default About;