import "./styles.css";
import "antd/dist/antd.css";
import "./assets/App.scss";
import NavBar from "./components/layout/NavBar";
import DrawerComponent from "./components/layout/Drawer";
import ProductListing from "./screen/ProductListing";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { toggleCart } from "./redux";
// import ProductDetails from "./screen/ProductDetails";
import { useAppSelector } from "./redux/hooks";
import { useDispatch } from "react-redux";

export default function App() {
  const visible = useAppSelector((state) => state.cart.isOpen);
  const dispatch = useDispatch();

  // const showDrawer = () => {
  //   dispatch(toggleCart());
  // };

  // const onClose = () => {
  //   dispatch(toggleCart());
  // };

  return (
    <div className="App">
      <Router>
        {/* <NavBar showDrawer={showDrawer} />
        <DrawerComponent onClose={onClose} visible={visible} /> */}

        <Route exact path="/" component={ProductListing} />
        {/* <Route exact path="/:id" component={ProductDetails} /> */}
      </Router>
    </div>
  );
}
