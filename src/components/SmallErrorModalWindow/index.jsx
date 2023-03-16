import CloseIcon from '@mui/icons-material/Close';
import { useSetSmallWindowErrorMessage } from '../../context';
import "./styles.scss";

export const SmallErrorModalWindow = ({ error }) => {
    const setSmallWindowErrorMessage = useSetSmallWindowErrorMessage();

    return (
        <div className='s-error-modal'>
            <p>{error}</p>
            <div className="cross" onClick={() => setSmallWindowErrorMessage("")}>
                <CloseIcon />
            </div>
        </div>
    );
}