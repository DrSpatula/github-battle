var React = require('react')
    PropTypes = React.PropTypes;


var UserDetailsWrapper = function(props) {
    return (
        <div className="col-sm-6">
            <p className="lead">{props.header}</p>
            {props.children}
        </div>
    )
};


UserDetailsWrapper.propTypes = {
    header: PropTypes.string.isRequired
};


module.exports = UserDetailsWrapper;
