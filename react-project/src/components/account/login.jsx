import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../service/actions/auth";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
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
}));

const LoginSchema = Yup.object().shape({
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string("Enter your password").required("Password is required"),
});

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values.email, values.password));
    },
  });

  // if (isLoggedIn) {
  //   history.push("/profile");
  // }
  return (
    <Box>
      <Typography variant="h4" className={classes.root}>
        Login Form
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
          label="Password"
          variant="filled"
          type="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <div>
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
          <Link to="/" className={classes.link}>
            <Button variant="contained">Register</Button>
          </Link>
        </div>
      </form>
    </Box>
  );
};

export default Login;
