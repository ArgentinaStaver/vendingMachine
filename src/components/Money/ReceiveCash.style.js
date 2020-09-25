import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => createStyles({
    rowKeypad: {
        display: 'flex',
    },
    buttonWrapper: {
        marginTop: theme.spacing(2),
        width: '188px',
    },
    confirmButton: {
        borderRadius: '24px',
    },
}));

export default useStyles;
