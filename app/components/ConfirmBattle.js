var React = require('react');


var ConfirmBattle = function(props) {
    // Conditional Rendering:
    return props.isLoading === true
        ? <p> LOADING! </p>
        : <p> CONFIRM BATTLE! </p>
};


module.exports = ConfirmBattle;
