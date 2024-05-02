import React from 'react';
import { Grid, Typography, Card, CardHeader, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const ContactGrid = styled(Grid)({
    marginTop: 0,
    color: "#fff",
});

const ContactCards: React.FC = () => {
    return (
        <ContactGrid container spacing={2}>
            <Grid item xs={12}>
                <Grid container spacing={2} p={10}>
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="194"
                                image="sales.jpg"
                                alt="sales"
                                tabIndex={0}
                            />
                            <CardContent>
                                <Typography variant="h6" gutterBottom tabIndex={0}>
                                    Sales
                                </Typography>
                                <Typography variant="body2" color="text.secondary" tabIndex={0}>
                                    Contact our sales team for any queries related to sales
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant='contained' component={Link} to="#">Sales</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="194"
                                image="support.jpg"
                                alt="support"
                                tabIndex={0}
                            />
                            <CardContent>
                                <Typography variant="h6" gutterBottom tabIndex={0}>
                                    Support
                                </Typography>
                                <Typography variant="body2" color="text.secondary" tabIndex={0}>
                                    Contact our support team for any queries related to support
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant='contained' component={Link} to="#">Support</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="194"
                                image="procurement.jpg"
                                alt="procurment"
                                tabIndex={0}
                            />
                            <CardContent>
                                <Typography variant="h6" gutterBottom tabIndex={0}>
                                    Procurement
                                </Typography>
                                <Typography variant="body2" color="text.secondary" tabIndex={0}>
                                    Contact our procurment team for any queries related to procurment
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant='contained' component={Link} to="#">Procurment</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </ContactGrid>
    );
}

export default ContactCards;