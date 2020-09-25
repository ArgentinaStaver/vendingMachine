import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => createStyles({
    rowProducts: {
        display: 'flex',
    },
    product: {
        border: '4px solid #1A1A1A',
        borderRadius: '4px',
        margin: '16px',
        fontSize: '18px',
        padding: '16px',
        width: '160px',
        textAlign: 'center',
        color: 'white',
        background: '#4C4C4C',
    },
}));

export default useStyles;
