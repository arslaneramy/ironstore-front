import React from "react";
import { Link } from "react-router-dom";
import { withAuth } from './../../context/auth-context';
import productService from "./../../services/products-service";
import withCartContext from "../../context/cart-context";

class ProductScreen extends React.Component {
  state = {
    product: {},
  };

  bringProduct = async () => {
    const { match } = this.props;
    const { data } = await productService.getOne(match.params.id);

    this.setState({ product: data });
  };
  componentDidMount() {
    this.bringProduct();
  }

  render() {
    const { product } = this.state;
    const addToCart = this.props.context.addToCart;
    return (
      <div>
        <img
          className="imgProductScreen"
          src={product.img}
          alt={product.name}
        />
        <br></br>
        <Link to="/">
          <button>Go Back</button>
        </Link>

        <Link to="/users/cart">
          <button
            className="updateCart"
            onClick={() =>
              addToCart({
                id: this.state.product._id,
                product: this.state.product,
                amount: 1,
              })}>Update Cart</button>
        </Link>




      </div>
    );
  }
}

export default withCartContext(withAuth(ProductScreen));
