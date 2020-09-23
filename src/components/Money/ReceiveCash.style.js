import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => createStyles({
    rowKeypad: {
        display: 'flex',
    },
    key: {
        border: '.4rem solid black',
        borderRadius: '.5rem',
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
