import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => createStyles({
  mainContent: {
    display: 'flex',
    width: '1200px',
    margin: '0 auto',
  },
  productsWrapper: {
    width: '70%',
    border: '1px solid #1A1A1A',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
},
  keypadWrapper: {
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    border: '1px solid #1A1A1A',
    alignItems: 'center',
  },
}));

export default useStyles;
