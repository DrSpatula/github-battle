var React = require('react'),
    Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState: function() {
        return {
            username: ''
        }
    },

    handleUpdateUser: function(e) {
        this.setState({
            username: e.target.value
        })
    },

    handleSubmitUser: function(e) {
        e.preventDefault();

        //Clear username field for future page views
        var username = this.state.username;
        this.setState({
            username: ''
        });

        if (this.props.routeParams.playerOne) {
            this.context.router.push({
                pathname: '/Battle',
                query: {
                    playerOne: this.props.routeParams.playerOne,
                    playerTwo: username
                }
            });
        } else {
            this.context.router.push('/PlayerTwo/' + username);
        }
    },

    render: function() {
        return (
            <Prompt 
                onSubmitUser={this.handleSubmitUser}
                onUpdateUser={this.handleUpdateUser}
                header={this.props.route.header}
                username={this.state.username} />
        )
    }
});


module.exports = PromptContainer;
