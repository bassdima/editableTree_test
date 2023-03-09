import CloseIcon from '@mui/icons-material/Close';
import "./styles.scss";

export const SmallErrorModalWindow = ({error, setError}) => {
    return (
        <div className='s-error-modal'>
            <p>{error}</p>
            <div className="cross" onClick={() => setError("")}>
                <CloseIcon />
            </div>
        </div>
    );
}