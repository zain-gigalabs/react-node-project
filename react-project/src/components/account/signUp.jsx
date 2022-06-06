import { useDispatch } from "react-redux";
import { register } from "../../service/actions/auth";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import {
  Box,
  Button,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const SignupSchema = Yup.object().shape({
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string("Enter your password")
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
  confirm_password: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
});

const SignUp = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      dispatch(register(values));
    },
  });

  return (
    <Box>
      <Typography variant="h4" className={classes.root}>
        SignUp Form
      </Typography>

      <form className={classes.root} onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          variant="filled"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          name="username"
          label="Username"
          variant="filled"
          id="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />
        <TextField
          label="Password"
          variant="filled"
          type="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
          label="Confirm Password"
          variant="filled"
          type="password"
          id="confirm_password"
          value={formik.values.confirm_password}
          onChange={formik.handleChange}
          error={
            formik.touched.confirm_password &&
            Boolean(formik.errors.confirm_password)
          }
          helperText={
            formik.touched.confirm_password && formik.errors.confirm_password
          }
        />
        <div>
          <Button type="submit" variant="contained" color="primary">
            Signup
          </Button>
          <Link to="/login" className={classes.link}>
            <Button variant="contained">Login</Button>
          </Link>
        </div>
      </form>
    </Box>
  );
};

export default SignUp;
