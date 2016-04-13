var React = require('react'),
    PropTypes = React.PropTypes,
    Link = require('react-router').Link,
    MainContainer = require('../components/MainContainer'),
    UserDetails = require('../components/UserDetails'),
    UserDetailsWrapper = require('../components/UserDetailsWrapper'),
    styles = require('../styles');


var StartOver = function() {
    return (
        <div className="col-sm-12" style={styles.space}>
            <Link to="/PlayerOne">
                <button className="btn btn-lg btn-danger">Start Over</button>
            </Link>
        </div>
    )
};


var Results = function(props) {
    if (props.isLoading === true) {
        return <p>Loading...</p>
    }

    if (props.scores[0] === props.scores[1]) {
        <div className='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
            <h1>It's a Tie!</h1>
            <StartOver />
        </div>
    }

    var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
    var losingIndex = winningIndex === 0 ? 1 : 0;

    return (
        <MainContainer>
            <h1>Results</h1>
            <div className="col-sm-8 col-sm-offset-2">
                <UserDetailsWrapper header="Winner">
                    <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
                </UserDetailsWrapper>
                <UserDetailsWrapper header="Loser">
                    <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
                </UserDetailsWrapper>
            </div>
            <StartOver />
        </MainContainer>
    )
};


Results.PropTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
};


module.exports = Results;