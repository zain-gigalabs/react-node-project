import { useState } from "react";
import { useDispatch } from "react-redux";
import register from "../../service/actions/auth";
import { Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup";
// import { createUser } from "../../service/api";
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

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const SignUp = (props) => {
  console.warn(props);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password not matched");
      return;
    }

    const userObject = {
      username: username,
      email: email,
      password: password,
    };
    dispatch(register(userObject));
  };

  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box>
      <Typography variant="h4" className={classes.root}>
        SignUp Form
      </Typography>

      <form className={classes.root}>
        <TextField
          name="username"
          label="Username"
          variant="filled"
          // onChange={(e) => setUserName(e.target.value)}
          onChange={formik.handleChange}
          value={formik.values.username}
          error={formik.touched.username}
          helperText={formik.touched.username}
        />

        <TextField
          label="Email"
          variant="filled"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          variant="filled"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <TextField
          label="Confirm Password"
          variant="filled"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Signup
          </Button>
        </div>
      </form>
    </Box>
  );
};

export default SignUp;
