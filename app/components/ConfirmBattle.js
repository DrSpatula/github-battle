var React = require('react')
    PropTypes = React.PropTypes,
    Link = require('react-router').Link,
    MainContainer = require('../components/MainContainer'),
    UserDetails = require('../components/UserDetails'),
    UserDetailsWrapper = require('../components/UserDetailsWrapper'),
    Loading = require('../components/Loading'),
    styles = require('../styles');


var ConfirmBattle = function(props) {
    // Conditional Rendering:
    return props.isLoading === true
        ? <Loading />
        : <MainContainer>
            <h1>Confirm Players</h1>
            <div className="col-sm-8 col-sm-offset-2">
                <UserDetailsWrapper header="Player One">
                    <UserDetails info={props.playersInfo[0]} />
                </UserDetailsWrapper>
                <UserDetailsWrapper header="Player Two">
                    <UserDetails info={props.playersInfo[1]} />
                </UserDetailsWrapper>
            </div>
            <div className="col-sm-8 col-sm-offset-2">
                <div className="col-sm-12" style={styles.space}>
                    <button type="button" className="btn btn-lg btn-success" onClick={props.onInitiateBattle}>
                        Initiate Battle
                    </button>
                </div>
                <div className="col-sm-12" style={styles.space}>
                    <Link to="/PlayerOne">
                        <button className="btn btn-lg btn-danger">
                            Reselect Players
                        </button>
                    </Link>
                </div>
            </div>
          </MainContainer>
};


ConfirmBattle.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    onInitiateBattle: PropTypes.func.isRequired
}


module.exports = ConfirmBattle;
