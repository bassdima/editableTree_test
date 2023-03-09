import "./styles.scss";

export const LoaderModalWindow = () => {
    return (
            <div className="loader">
                <div className="loader-content">
                    <img src="./assets/modal/preloader.svg" alt="preloader" className='loader-content__svg'/>
                    <div className='loader-content__text'>Loading...</div>
                </div>
            </div>
    );
}
