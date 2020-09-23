import { connect } from 'react-redux';
import { addProducts } from '../actions/actionCreator';
import Products from '../components/Products/Products';


const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => ({
  fetchAllProducts: products => dispatch(addProducts(products)),
});

const ProductsList = connect(mapStateToProps, mapDispatchToProps)(Products);

export default ProductsList;
