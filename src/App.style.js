import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => createStyles({
  mainContent: {
    display: 'flex',
    width: '1200px',
    margin: '0 auto',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
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
    padding: '24px 0',
  },
  title: {
    width: '100%',
    '& h1': {
      fontSize: '44px',
    },
    textAlign: 'center',
    color: '#4C4C4C',
    paddingBottom: theme.spacing(3),
  },
}));

export default useStyles;
