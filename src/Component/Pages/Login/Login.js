import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Grid} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useFormik, withFormik } from "formik";
import { ActionTypes } from "../../ReduxConnect/Constants/ActionTypes";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import * as yup from "yup";
import { connect, useDispatch, useSelector } from "react-redux";
import { getLogin } from "../../ReduxConnect/Actions/ProfileAction";
import SignUpPage from "./SignUpPage";
import { useHistory } from "react-router-dom";
const styles = makeStyles({
  root: {
    padding: "10%",
  },
  fb_img: {
    height: "106px",
    marginLeft: "-33px",
  },
  textContent: {
    marginTop: "-14px",
    fontSize: "28px",
    fontWeight: "normal",
    lineHeight: "32px",
    fontFamily: "SFProDisplay-Regular, Helvetica, Arial, sans-serif",
    width: "500px",
  },
  hover: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
    color: "#1877f2 !important",
  },
  line: {
    color: "#dadde",
    height: 1,
    borderColor: "#dadde",
    marginTop: "16px 0px",
  },
});
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-container": {
    background: "rgba(255, 255, 255, .8)",
  },
  "& .css-bdhsul-MuiTypography-root-MuiDialogTitle-root": {
    width: "432px",
    padding: "4px 10px 10px 10px",
  },
  "& .MuiDialog-paper": {
    position: "absolute",
    top: "8%",
    maxWidth: "452px",
  },
  "& .MuiDialogContent-root": {
    padding: "16px 10px",
  },
}));

const BootstrapDialogTitle = (props) => {
  const { onClose, children } = props;
  return (
    <DialogTitle>
      {children}
      {onClose ? (
        <IconButton
          onClick={onClose}
          aria-label="close"
          sx={{
            position: "absolute",
            right: 8,
            top: -3,
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

const label = styled(FormControlLabel)(({ theme }) => ({
  marginLeft: "8px",
  height: "6px !important",
}));

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .required("Password is required"),
});

function Login() {
  const classes = styles();
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  //const [age, setAge] = React.useState();
  const [SelectDate, setDate] = useState([]);
  const [SelectMonth, setMonth] = useState([]);
  const dispatch=useDispatch()
  const [login, setLogin] = useState({
    username: "",
    password: "",
    ShowPassword: "false",
  });
  let history = useHistory();
  useEffect(() => {
    date();
  }, []);

  const date = () => {
    let dat = [];
    let month = [];
    for (let i = 1; i <= 31; i++) {
      dat.push(i);
    }
    setDate(dat);
    for (let i = 1905; i <= 2022; i++) {
      month.push(i);
    }
    setMonth(month.reverse());
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickShowPassword = () => {
    formik.values.ShowPassword = true;
  };
  const onSubmit=(values)=>{
    let data={
      username:"mor_2314",
      password:"83r5^_"
    }
    dispatch(getLogin(data))
  }
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
   onSubmit,
  });
  return (
    <Router>
      <div style={{ background: "#f0f2f5" }}>
        <div className={classes.root}>
          <Grid container rowSpacing={2}>
            <Grid item md={0.5}></Grid>
            <Grid item md={6}>
              <div style={{ marginTop: "40px" }}>
                <img
                  className={classes.fb_img}
                  src={
                    "https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
                  }
                  alt="pic"
                />
                <h2 className={classes.textContent}>
                  Facebook helps you connect and share with the people in your
                  life.
                </h2>
              </div>
            </Grid>
            <Grid item md={4}>
              <Paper
                sx={{
                  height: 352,
                  borderRadius: 2,
                  background: "#fff",
                }}
                elevation={0}
              >
                <Box sx={{ padding: 2 }}>
                  <div>
                    <form onSubmit={formik.handleSubmit}>
                      <TextField
                        type="text"
                        placeholder="Email address or phone number"
                        fullWidth
                        name="email"
                        variant="outlined"
                        required
                        autoFocus
                        sx={{
                          mb: 2,
                        }}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                      />
                      <TextField
                        type={login.ShowPassword ? "text" : "password"}
                        placeholder="password"
                        fullWidth
                        name="password"
                        variant="outlined"
                        required
                        autoFocus
                        sx={{
                          mb: 2,
                        }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              {formik.values.password === "" ? null : (
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  edge="end"
                                >
                                  {login.ShowPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              )}
                            </InputAdornment>
                          ),
                        }}
                        id="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.password &&
                          Boolean(formik.errors.password)
                        }
                        helperText={
                          formik.touched.password && formik.errors.password
                        }
                      />
                      <Button
                        color="primary"
                        variant="contained"
                        fullWidth
                        type="submit"
                      >
                        Submit
                      </Button>
                    </form>
                  </div>
                  <Link to="" className={classes.hover}>
                    <Typography
                      sx={{
                        marginTop: "16px",
                        textAlign: "center",
                        fontSize: "14px",
                        fontWeight: 500,
                        textDecoration: "none",
                      }}
                    >
                      Forgotten password ?
                    </Typography>
                  </Link>
                  <div
                    style={{
                      borderBottom: "1px solid #dadde1",
                      marginTop: "20px",
                    }}
                  ></div>
                  <Box sx={{ textAlign: "center" }}>
                    <Button
                      variant="contained"
                      sx={{
                        width: "229px",
                        padding: "0px 16px",
                        lineHeight: "48px",
                        backgroundColor: "#42b72a",
                        fontSize: "16px",
                        borderRadius: "6px",
                        textTransfrom: "none",
                        height: "36px",
                        margin: "20px 0px",
                        textTransform: "none",
                      }}
                      onClick={handleClickOpen}
                      className={classes.btn_acc}
                    >
                      Create New Account
                    </Button>
                    <BootstrapDialog
                      aria-labelledby="customized-dialog-title"
                      open={open}
                    >
                      <BootstrapDialogTitle
                        id="customized-dialog-title"
                        onClose={handleClose}
                      >
                        <Typography
                          component="div"
                          variant="h6"
                          sx={{
                            color: "#1c1e21",
                            fontSize: "32px",
                            fontFamily: "Roboto,Helvetica,Arial,sans-serif",
                            fontWeight: 600,
                          }}
                        >
                          Sign Up
                        </Typography>
                        <Typography>Its's quick and easy</Typography>
                      </BootstrapDialogTitle>
                      <DialogContent dividers sx={{ heigth: "100%" }}>
                        <SignUpPage />
                      </DialogContent>
                    </BootstrapDialog>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </Router>
  );
}

export default Login;
