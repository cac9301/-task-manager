
import React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Formik } from 'formik';
import * as Yup from 'yup';


const FormProyect = ({hideForm,addProyect}) => {
    
  const useStyles = makeStyles((theme) => ({
    
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    form: {
      display: "flex",
      flexDirection: "column",
    },
  }));
  const classes = useStyles();
    return (
        <Grid item xs={12}>
            <Formik
            initialValues={{ name: '' }}
            validationSchema={Yup.object({
              name: Yup.string()
                  .max(15, 'Must be 15 characters or less')
                  .required('Poyect its Required')
              })}
            onSubmit={(values, { resetForm }) => {
              hideForm();
              addProyect(values);
                resetForm({
                    values: { name: '' }    
                });
                
            }}>{formik =>(
            <form onSubmit={formik.handleSubmit} className={classes.form}>
              <TextField
                error={!!(formik.touched.name && formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                id="name"
                label="Add Your name"
                name="name"
                variant="outlined"
                margin="normal"
                fullWidth
                {...formik.getFieldProps('name')} />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                size="medium"
                className={classes.submit}
              >
                Create
              </Button>
            </form>
            )}
            </Formik>
          </Grid>
    );
};

export default FormProyect;