import React, { useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles/stylesLogin";
import Container from "@material-ui/core/Container";
import Copyright from "./FooterLogin";
import { Formik } from "formik";
import { validationLogin } from "./auth/schema-form-login";
import { Alert, AlertTitle } from "@material-ui/lab";
//{/*----------------------------Contextos -----------------------*/}
import Authcontext from "../../context/authcontext/Authcontext";

const Login = (props) => {
  const classes = useStyles();
  const authcontext = React.useContext(Authcontext);
  const { loginSucessfull,getUser, error, flag_error, autenticado } = authcontext;

  useEffect(() => {
    if (autenticado) {
      props.history.push("/dashboard");
    }
  }, [autenticado, props.history]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {/*----------------------------validacion con formik-----------------------*/}
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationLogin}
          onSubmit={(values, { resetForm }) => {
          
            loginSucessfull(values);
            getUser();
            resetForm({
              values: { email: "", password: "" },
            });
          }}
        >
          {(formik) => (
            <form className={classes.form} onSubmit={formik.handleSubmit}>
              <TextField
                error={!!(formik.touched.email && formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                id="email"
                label="Email Address"
                name="email"
                variant="outlined"
                margin="normal"
                fullWidth
                {...formik.getFieldProps("email")}
              />

              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                error={!!(formik.touched.password && formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                {...formik.getFieldProps("password")}
              />
              <Grid item xs={12}>
                {flag_error ? (
                  <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    This is an error fron server — <strong>{error}</strong>
                  </Alert>
                ) : null}
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/new-account" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
        {/**Termina La Validacion con formik  */}
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Login;
