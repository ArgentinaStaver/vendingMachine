import { connect } from 'react-redux';
import { productCodeToBuy } from '../actions/actionCreator';
import Keypad from '../components/Keypad/Keypad';


const mapStateToProps = state => ({
    code: state.userActions.code,
})

const mapDispatchToProps = dispatch => ({
    setKeypadCode: code => dispatch(productCodeToBuy(code)),
})

const FetchKeypadCode = connect(mapStateToProps, mapDispatchToProps)(Keypad);

export default FetchKeypadCode;
