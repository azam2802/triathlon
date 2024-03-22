import PropTypes from 'prop-types';
import './style.scss';
import { modalInitState } from '../../common/constants';

const Modal = ({ active, setActive, children }) => {
    const { image0, alt0 } = modalInitState;

    const getExternalFieldClass = () => {
        return active ? 'custom-modal active' : 'custom-modal';
    };
    const getInnerFieldClass = () => {
        return active
            ? 'custom-modal__content active'
            : 'custom-modal__content';
    };

    return (
        <div
            className={getExternalFieldClass()}
            onClick={() => setActive(false)}
        >
            <div
                className={getInnerFieldClass()}
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={image0}
                    alt={alt0}
                    className="custom-modal__content-close"
                    onClick={() => setActive(false)}
                />
                {children}
            </div>
        </div>
    );
};

Modal.propTypes = {
    active: PropTypes.bool,
    setActive: PropTypes.func,
    children: PropTypes.object,
};

export default Modal;
