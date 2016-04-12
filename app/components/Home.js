var React = require('react'),
    ReactRouter = require('react-router'),
    Link = ReactRouter.Link,
    transparentBg = require('../styles').transparentBg;

var Home = React.createClass({
    render: function() {
        return (
            <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
                <h1>GitHub Battle</h1>
                <p className="lead">Some motto.</p>
                <Link to="/PlayerOne">
                    <button type="button" className="btn btn-large btn-success">Get Started</button>
                </Link>
            </div>
        )
    }
});


module.exports = Home;
