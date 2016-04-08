var USER_DATA = {
    name: "Seamus O'Keefe",
    username: "DrSpatula",
    image: "https://avatars1.githubusercontent.com/u/1670861?v=3&s=460"
}

var React = require('react'),
    ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
    render: function() {
        return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
    }
});

var ProfileName = React.createClass({
    render: function() {
        return <div>{this.props.name}</div>
    }
});

var ProfileLink = React.createClass({
    render: function() {
        return(
            <div>
                <a href={"http://www.github.com/" + this.props.userName}>
                    {this.props.userName} 
                </a>
            </div>
        )
    }
});

var Avatar = React.createClass({
    render: function() {
        return (
            <div>
                <ProfilePic imageUrl={this.props.user.image} />
                <ProfileName name={this.props.user.name} />
                <ProfileLink userName={this.props.user.username} />
            </div>
        )
    }
});


ReactDOM.render(
    <Avatar user={USER_DATA} />,
    document.getElementById('app')
);
