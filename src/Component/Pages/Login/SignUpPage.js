import {React,useState,useEffect} from 'react';
import {Box,Tooltip,ClickAwayListener,TextField,
    InputAdornment,Typography,Select,RadioGroup,MenuItem,FormControlLabel,InputBase,Radio,Button}
 from "@mui/material";
 import { styled } from "@mui/material/styles";
 import { makeStyles } from "@mui/styles";
 import HelpIcon from "@mui/icons-material/Help";
import ErrorIcon from "@mui/icons-material/Error";
import moment from "moment";
import { useFormik, withFormik } from "formik";
import * as yup from "yup";
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

const BootstrapInput = styled(InputBase)((props) => ({
    "label + &": {
      marginTop: props.theme.spacing(10),
    },
    "& .MuiInputBase-input": {
      paddingRight: `${props.values ? "98px !important" : "120px !important"}`,
      position: "relative",
      backgroundColor: props.theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "2px 26px 5px 6px",
      transition: "",
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
  }));

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const pronoun = [
    'She: "Wish her a happy birthday!"',
    'He: "Wish him a happy birthday!"',
    'They: "Wish them a happy birthday!"',
  ];

  const initialValues = {
    day: parseInt(moment().format("Do")),
    month: moment().format("MMM"),
    year: parseInt(moment().format("YYYY")),
    Firstname: "",
    Surname: "",
    NewPassword: "",
    Email: "",
    //gender:"",
    Radiobutton: "",
  
    //Pronoun:""
  };
  const validationSchema = yup.object({
   Firstname: yup
      .string("Enter your firstname")
      .required("Firstname is required"),
    Surname:yup
    .string("enter your surname")
    .required("Surname is required"),
    password: yup
      .string("Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
      .required("Password is required"),
    Email:yup
    .string("Enter your Email")
    .required("Email is required"),
    Radiobutton:yup
    .string("enter the radio")
    .required("radiobutton is required"),
    day:yup
    .string("enter the date")
    .required("radiobutton is required"),
  });
const SignUpPage=()=>{
  const classes = styles();
    const [values, setValue] = useState(initialValues);
  const [SelectDate, setDate] = useState([]);
  const [SelectMonth, setMonth] = useState([]);
  const [close, setClose] = useState(false);
  useEffect(() => {
    date();
  }, []);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValue({
      ...values,
      [name]: value,
    });
  };
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
  const handleTooltipClose = () => {
    setClose(false);
  };
  const handleSubmits = (e) => {
    e.preventDefault();
    console.log(values);
  };
  const onSubmit=(values)=>{
    console.log(values)
  }
  const formik=useFormik({
    initialValues:{
      Firstname:"",
      Surname:"",
      password:"",
      Email:"",
      day:parseInt(moment().format("Do")),
      month: moment().format("MMM"),
      year:parseInt(moment().format("YYYY")),
      Radiobutton:""
    },
    validationSchema:validationSchema,
    onSubmit,
  })
    return (
  <Box sx={{ width: "100%" }}>
                      <div>
                    <form onSubmit={formik.handleSubmit}>
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
  <ClickAwayListener onClickAway={handleTooltipClose}>
    <Tooltip
      title={formik.errors.Firstname}
      placement="left-start"
      disableFocusListener
      disableHoverListener
      disableTouchListener
      open={formik.errors.Firstname ? true : false}
      onClose={handleTooltipClose}
    > 
      <TextField
       type="text"
       placeholder="First name"
       name="Firstname"
       autoFocus
       value={formik.values.Firstname}
       onChange={formik.handleChange}
       error={
        Boolean(formik.errors.Firstname)
       }
       //helperText={formik.errors.Firstname}
        size="small"
        sx={{
          marginRight: "10px",
        }}
        InputProps={{
          endAdornment: formik.errors.Firstname?(
            <InputAdornment position="end">
              <ErrorIcon sx={{fontSize:21,color:"red"}} />
            </InputAdornment>
          ):(""),
        }}
      />
    </Tooltip>
  </ClickAwayListener>
  <ClickAwayListener onClickAway={handleTooltipClose}>
  <Tooltip
      title={formik.errors.Surname}
      placement="bottom"
      disableFocusListener
      disableHoverListener
      disableTouchListener
      open={formik.errors.Surname ? true : false}
      onClose={handleTooltipClose}
    > 
  <TextField
    size="small"
    placeholder="Sur name"
    name="Surname"
    onChange={formik.handleChange}
    value={formik.values.Surname}
     error={
        Boolean(formik.errors.Surname)
       }
       //helperText={formik.errors.Surname}
       InputProps={{
        endAdornment: formik.errors.Surname?(
          <InputAdornment position="end">
            <ErrorIcon sx={{fontSize:21,color:"red"}} />
          </InputAdornment>
        ):(""),
      }}
  />
  </Tooltip>
  </ClickAwayListener>
</Box>      
 <Box sx={{ width: "100%" }}>
   <ClickAwayListener onClickAway={handleTooltipClose}>
  <Tooltip
      title={formik.errors.Email}
      placement="left-start"
      disableFocusListener
      disableHoverListener
      disableTouchListener
      open={formik.errors.Email? true : false}
      onClose={handleTooltipClose}
    > 

  <TextField
    fullWidth
    size="small"
    placeholder="Mobile number or email address"
    name="Email"
    value={formik.values.Email}
    onChange={formik.handleChange}
    error={
      Boolean(formik.errors.Email)
    }
    //helperText={ formik.errors.Email}
    sx={{
      mt: 1,
    }}
    InputProps={{
      endAdornment: formik.errors.Email?(
        <InputAdornment position="end">
          <ErrorIcon sx={{fontSize:21,color:"red"}} />
        </InputAdornment>
      ):(""),
    }}
  />
  </Tooltip>
  </ClickAwayListener>
</Box>
<ClickAwayListener onClickAway={handleTooltipClose}>
  <Tooltip
      title={formik.errors.password}
      placement="right-end"
      disableFocusListener
      disableHoverListener
      disableTouchListener
      open={formik.errors.password? true : false}
      onClose={handleTooltipClose}
    > 

<TextField
  fullWidth
  size="small"
  name="password"
  placeholder="New password"
  value={formik.values.password}
  onChange={formik.handleChange}
  sx={{
    mt: 1,
  }}
  error={
    Boolean(formik.errors.password)
   }
  // helperText={formik.errors.password}
  InputProps={{
    endAdornment: formik.errors.password?(
      <InputAdornment position="end">
        <ErrorIcon sx={{fontSize:21,color:"red"}} />
      </InputAdornment>
    ):(""),
  }}
/>
</Tooltip>
</ClickAwayListener>
<Box sx={{ display: "flex", flexDirection: "row" }}>
  <Typography
    variant="body2"
    component="p"
    gutterBottom
    sx={{
      color: "#606770",
      fontSize: "12px",
      fontWeigth: "normal",
      mt: 2,
    }}
  >
    Date of birth
  </Typography>
  <HelpIcon
    sx={{
      fontSize: "15px",
      marginTop: "16px",
      marginLeft: "2px",
      cursor: "pointer",
      color: "#606770",
    }}
  />
</Box>
<Box
  sx={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "-1px",
  }}
>
  <Select
    value={formik.values.day}
    onChange={formik.handleChange}
    name="day"
    input={<BootstrapInput values={formik.values.day} />}
  >
    {SelectDate.map((val) => {
      return <MenuItem value={val}>{val}</MenuItem>;
    })}
  </Select>
  <Select
    value={formik.values.month}
    onChange={formik.handleChange}
    error={
      Boolean(formik.errors.month)
     }
    name="month"
    input={<BootstrapInput values={formik.values.month} />}
  >
    {months.map((val) => {
      return <MenuItem value={val}>{val}</MenuItem>;
    })}
  </Select>
  <Select
  error={
    Boolean(formik.errors.year)
   }
    value={formik.values.year}
    onChange={formik.handleChange}
    name="year"
    input={<BootstrapInput values={formik.values.year} />}
    size="small"
  >
    {SelectMonth.map((val) => {
      return <MenuItem value={val}>{val}</MenuItem>;
    })}
  </Select>
</Box>
  <Box sx={{ display: "flex", flexDirection: "row" }}>
  <Typography
    variant="body2"
    component="p"
    gutterBottom
    sx={{
      color: "#606770",
      fontSize: "12px",
      fontWeigth: "normal",
      mt: 2,
    }}
  >
    Gender
  </Typography>
  <HelpIcon
    sx={{
      fontSize: "15px",
      marginTop: "16px",
      marginLeft: "2px",
      cursor: "pointer",
      color: "#606770",
    }}
  />
  <Box sx={{display:"flex",justifyContent:"flex-end",flexGrow:0.98,alignItems:"center"}}>
  {formik.errors.Radiobutton?<ErrorIcon sx={{fontSize:21,color:"red"}} />:""}
  </Box>
</Box>

<RadioGroup
  aria-label="gender"
  name="Radiobutton"
  value={formik.values.Radiobutton}
  onChange={formik.handleChange}
  helperText={formik.errors.Radiobutton}
>
  <Box
    sx={{
      display: "flex",
      margin: "-8px -6px -6px",
      width: "419px",
    }}
  >
    <Box
      sx={{
        border:`${formik.errors.Radiobutton?"1px solid red":"1px solid #ced4da"}`,
        borderRadius: 1,
        backgroundColor: "#fff",
        flex: "0.5",
        margin: "8px 3px 3px 3px",
        height: "30px",
      }}
    >
      <FormControlLabel
        value="female"
        sx={{
          marginTop: "-3px",
          marginLeft: "10px",
          marginRight: "36px",
        }}
        labelPlacement="start"
        control={
          <Radio
            size="small"
            sx={{ top: 0, left: 40 }}
          />
        }
        label="Female"
      />
    </Box>
    <Box
      sx={{
        border:`${formik.errors.Radiobutton?"1px solid red":"1px solid #ced4da"}`,
        borderRadius: 1,
        backgroundColor: "#fff",
        flex: "0.5",
        margin: "8px 3px 3px 3px",
        height: "30px",
      }}
    >
      <FormControlLabel
        value="male"
        labelPlacement="start"
        sx={{
          marginTop: "-3px",
          marginLeft: "10px",
          marginRight: "36px",
        }}
        control={
          <Radio
            size="small"
            sx={{ top: 0, left: "55%" }}
          />
        }
        label="Male"
      />
    </Box>
    <Box
      sx={{
        border:`${formik.errors.Radiobutton?"1px solid red":"1px solid #ced4da"}`,
        borderRadius: 1,
        backgroundColor: "#fff",
        flex: "0.5",
        margin: "8px 3px 3px 3px",
        height: "30px",
      }}
    >
      {" "}
      <FormControlLabel
        value="custom"
        labelPlacement="start"
        sx={{
          marginTop: "-3px",
          marginLeft: "10px",
          marginRight: "36px",
        }}
        control={
          <Radio
            size="small"
            sx={{ top: 0, left: "45%" }}
          />
        }
        label="Custom"
      />
    </Box>
  </Box>
</RadioGroup>
{formik.values.Radiobutton === "custom" && (
  <>
    <Box sx={{ mt: 2 }}>
      <Select
        value={values.pronoun}
        displayEmpty
        sx={{
          width: "100%",
          "& .MuiOutlinedInput-input": {
            padding: "1.5px 16px",
          },
        }}
        onChange={handleChange}
        name="Pronoun"
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value="" disabled>
          <em>Select your pronoun</em>
        </MenuItem>
        {pronoun.map((val) => {
          return (
            <MenuItem value={val}>{val}</MenuItem>
          );
        })}
      </Select>
    </Box>

    <Typography
      variant="body2"
      component="p"
      gutterBottom
      sx={{
        color: "#606770",
        fontSize: "12px",
        fontWeigth: "normal",
        mt: 1,
      }}
    >
      Your pronoun is visible to everyone.
    </Typography>
    <Box sx={{ width: "100%" }}>
      <TextField
        fullWidth
        size="small"
        placeholder="Gender (optional)"
        name="gender"
        value={values.gender}
        onChange={handleChange}
        sx={{
          mt: 1,
        }}
      />
    </Box>
  </>
)}
<Typography
  variant="body2"
  component="p"
  gutterBottom
  sx={{ color: "#606770", fontSize: "11px", mt: 1 }}
>
  By clicking Sign Up, you agree to our Terms, Data
  Policy and Cookie Policy. You may receive SMS
  notifications from us and can opt out at any time.
</Typography>
<Box sx={{ textAlign: "center" }}>
  <Button
    variant="contained"
   // onClick={handleSubmits}
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
    type="submit"
    className={classes.btn_acc}
  >
    Sign Up
  </Button>
</Box> 
</form>
</div>
</Box>
    )
}
export default SignUpPage