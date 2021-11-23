import { connect } from "react-redux";

import ShoppingCart from "./components/ShoppingCart";
import { checkout } from "./actions";

const mapStateToProps = (state) => {
  const products = state.products;
  const productsOnCard = Object.entries(state.shoppingcart.products);

  return {
    products: productsOnCard.map(([key, value]) => {
      const product = products[key];
      product.quantity = value;

      return product;
    }),
  };
};

export default connect(mapStateToProps, { onCheckoutClicked: checkout })(
  ShoppingCart
);
