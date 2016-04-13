var React = require('react'),
    ReactRouter = require('react-router'),
    Link = ReactRouter.Link,
    MainContainer = require('../components/MainContainer');

var Home = React.createClass({
    render: function() {
        return (
            <MainContainer>
                <h1>GitHub Battle</h1>
                <p className="lead">Some motto.</p>
                <Link to="/PlayerOne">
                    <button type="button" className="btn btn-large btn-success">Get Started</button>
                </Link>
            </MainContainer>
        )
    }
});


module.exports = Home;
