import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => createStyles({
    rowProducts: {
        display: 'flex',
    },
    product: {
        border: '4px solid #1A1A1A',
        borderRadius: '4px',
        margin: '1rem',
        fontSize: '1.5rem',
        padding: '1rem .5rem',
        transition: 'all 0.7s ease',
        width: '10rem',
        textAlign: 'center',
        color: 'white',
        background: 'rgba(0,0,0,0.4)',
        textShadow: '0 0 .5rem black',
    },
}));

export default useStyles;
