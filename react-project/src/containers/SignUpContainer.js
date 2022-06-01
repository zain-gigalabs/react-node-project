import React from "react";
import { connect } from "react-redux";
import SignUp from "../components/account/signUp";
import { addUser } from "../service/actions/actions";
const mapStateToProps = (state) => {
  return {
    profile: state.user,
  };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
// export default Home;

// export default SignUp;
