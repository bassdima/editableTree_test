import "./styles.scss";

export const Loader = () => {
    return (
        <div className="loader-content">
            <img src="./assets/modal/preloader.svg" alt="preloader" className='loader-content__svg' />
            <div className='loader-content__text'>Loading...</div>
        </div>
    );
}
