import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => createStyles({
    rowKeypad: {
        display: 'flex',
    },
    key: {
        border: '4px solid #1A1A1A',
        borderRadius: '8px',
        margin: '8px',
        fontSize: '16px',
        lineHeight: '16px',
        padding: '15px',
        textAlign: 'center',
        color: 'white',
        background: '#4C4C4C',
    },
    title: {
        textAlign: 'center',
        '& h3': {
           fontSize: '20px',
        },
        color: '#4C4C4C',
    },
}));

export default useStyles;
