import { connect } from 'react-redux';
import Display from '../components/Display/Display';


const mapStateToProps = state => ({
  code: state.userActions.code,
  amount: state.userActions.amount,
  selectedProduct: state.products.find((p) => p.code == state.userActions.code),
});

const mapDispatchToProps = dispatch => ({

});

const DisplayContainer = connect(mapStateToProps, mapDispatchToProps)(Display);

export default DisplayContainer;
