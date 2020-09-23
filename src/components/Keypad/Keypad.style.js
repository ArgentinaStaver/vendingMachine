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
        background: 'rgba(0,0,0,0.4)',
    },
}));

export default useStyles;
