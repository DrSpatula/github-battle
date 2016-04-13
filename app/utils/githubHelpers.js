var axios = require('axios');


var id = "CLIENT_ID",
    secret = "SECRET_ID",
    param = "?client_id=" + id + "&client_secret=" + secret;


var getUserInfo = function(username) {
    return axios.get('https://api.github.com/users/' + username + param);
};


var getRepos = function(username) {
    return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100');
};


var getTotalStars = function(repos) {
    return repos.data.reduce(function(prev, curr) {
        return prev + curr.stargazers_count
    }, 0)
};


var getPlayersData = function(player) {
    return getRepos(player.login)
        .then(getTotalStars)
        .then(function(totalStars) {
            return {
                followers: player.followers,
                totalStars: totalStars
            }
        })
};


var calculateScores = function(players) {
    return  [
        players[0].followers * 3 + players[0].totalStars,
        players[1].followers * 3 + players[1].totalStars
    ]
};


var helpers = {
    getPlayersInfo: function (players) {
        return axios.all(players.map(function(username) {
            return getUserInfo(username);
        })).then(function(info){
            return info.map(function(user) {
                return user.data;
            })
        }).catch(function(err) {
            console.warn('Error in getPlayersInfo, err')
        });
    },

    battle: function(players) {
        var playerOneData = getPlayersData(players[0]);
        var playerTwoData = getPlayersData(players[1]);

        return axios.all([playerOneData, playerTwoData])
            .then(calculateScores)
            .catch(function(err) {
                console.warn('Error in getPlayersInfo', err);
            })
    }
};


module.exports = helpers;
