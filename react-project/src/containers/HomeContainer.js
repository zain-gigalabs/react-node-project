import { connect } from "react-redux";
import Home from "../components/Home";
import { addToCart } from "../service/actions/actions";

const mapStateToProps = (state) => console.warn(state);
const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;
