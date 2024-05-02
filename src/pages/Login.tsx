import React from 'react';
import { Grid, Typography, TextField, Button, Paper, Checkbox, Snackbar, Alert, FormControlLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../redux/actions';
import { Dispatch } from 'redux';
import HomeCard from '../components/HomeCard';

const LoginGrid = styled(Grid)({
  marginTop: 0,
  color: "#fff",
  display: "flex",
  paddingTop: 50,
  justifyContent: "flex-end",
  backgroundImage: `url(loginbg.jpg)`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
});

const Login: React.FC = () => {
  const [email, setEmail] = React.useState<string>("pranshu@abc.com");
  const [password, setPassword] = React.useState<string>("pranshu123");
  const [rememberMe, setRememberMe] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");
  const navigate = useNavigate();
  const dispatch: Dispatch = useDispatch();

  const isValidForm = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email || !password) {
      setError("All fields are required");
      return false;
    } else if (!emailRegex.test(email)) {
      setError("Invalid email");
      return false;
    } else {
      return true;
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValidForm()) {
      dispatch<any>(authActions.authenticate({ email, password }));
      navigate("/services/shipments");
    }
  }

  return (
    <LoginGrid container spacing={2} py={30} px={5}>
      <HomeCard />
      <Grid item xs={12} sm={5} textAlign={"center"}>
        <Paper elevation={0} style={{ padding: 20 }}>
          <Typography variant="h6" gutterBottom tabIndex={0}>
            Login
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              tabIndex={0}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              tabIndex={0}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox
                tabIndex={0}
                color="primary"
                inputProps={{ 'aria-label': 'remember my email' }}
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />}
              label="Remember Me"
              sx={{ display: "flex", justifyContent: "flex-start" }}
            />

            <Button variant="contained" color="primary" fullWidth tabIndex={0} sx={{ marginTop: 2 }} onClick={handleSubmit}>
              Login
            </Button>
          </form>
          <Typography variant="body1" gutterBottom tabIndex={0} pt={2} textAlign={"left"}>
            <Link to="#" tabIndex={0}>Forgot Password?</Link>
          </Typography>
          <Snackbar open={error ? true : false} autoHideDuration={6000} onClose={() => setError("")}>
            <Alert onClose={() => setError("")} severity="error" sx={{ width: '100%' }}>
              {error}
            </Alert>
          </Snackbar>
        </Paper>
      </Grid>
    </LoginGrid>
  );
};

export default Login;