import { connect } from 'react-redux';
import ReceiveCash from '../components/Money/ReceiveCash';
import { insertMoney, productCodeToBuy, decrementStock } from '../actions/actionCreator';


const mapStateToProps = state => ({
  amount: state.userActions.amount,
  code: state.userActions.code,
  selectedProduct: state.products.find((p) => p.code == state.userActions.code),
});

const mapDispatchToProps = dispatch => ({
    setMoney: amount => dispatch(insertMoney(amount)),
    setKeypadCode: code => dispatch(productCodeToBuy(code)),
    decrementStock: code => dispatch(decrementStock(code)),
});

const CashContainer = connect(mapStateToProps, mapDispatchToProps)(ReceiveCash);

export default CashContainer;
