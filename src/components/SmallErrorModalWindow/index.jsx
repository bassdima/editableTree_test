import CloseIcon from '@mui/icons-material/Close';
import { useNodeContext } from '../../context';
import "./styles.scss";

export const SmallErrorModalWindow = ({ error }) => {
    const { setSmallWindowErrorMessage } = useNodeContext();

    return (
        <div className='s-error-modal'>
            <p>{error}</p>
            <div className="cross" onClick={() => setSmallWindowErrorMessage("")}>
                <CloseIcon />
            </div>
        </div>
    );
}