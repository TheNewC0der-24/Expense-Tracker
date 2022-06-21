import { makeStyles } from '@material-ui/core/styles';
import { green } from "@material-ui/core/colors";

export default makeStyles(() => ({
    radioGroup: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '-10px',
    },
    button: {
        marginTop: '20px',
        backgroundColor: green[600],
        color: '#fff',
        '&:hover': {
            color: '#fff',
            backgroundColor: green[500],
        }
    },
}));