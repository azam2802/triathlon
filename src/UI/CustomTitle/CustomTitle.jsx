import './CustomTitle.scss';
import PropTypes from 'prop-types';

export const CustomTitle = ({ title }) => {
    return (
        <h2 className="customTitle">{title}</h2>
    );
};

CustomTitle.propTypes = {
    title: PropTypes.string,
};