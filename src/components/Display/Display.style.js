import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => createStyles({
    display: {
        display: 'flex',
        width: '188px',
        height: '150px',
        flexDirection: 'column',
        justifyContent: 'space-around',
        border: '3px solid #1A1A1A',
        padding: theme.spacing(2),
        marginBottom: theme.spacing(3),

    },
    displayRow: {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: `1px solid #E5E5E5`,
        fontSize: '18px',
        color: "#4C4C4C",
    },
}));

export default useStyles;
