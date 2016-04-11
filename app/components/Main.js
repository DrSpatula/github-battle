var React = require('react');

var Main = React.createClass({
    render: function() {
        return (
            <div className='main-container'>
                {/*  Render child routes' components. */}
                {this.props.children} 
            </div>
        )
    }
});


module.exports = Main;
