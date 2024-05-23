import PropTypes from "prop-types";

const BaseTemplate = ({title, children}) => {
    return (
        <main>
            {title && <h1 className='mt-lg-5 text-center'>{title}</h1>}
            {children}>
        </main>
    );
};

BaseTemplate.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element,
}

export default BaseTemplate;