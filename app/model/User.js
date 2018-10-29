import Friend from './Friend';
import Game from './Game';

function mapFriendsToArray(friends) {
    let converted = [];
    for (let i = 0; i < friends.length; i++) {
        converted.push(new Friend(friends[ i ]));
    }

    return converted;
}

/**
 * This is horribly wrong. Do not learn from this project at all.
 * Please.
 */

export default class User {

    constructor(json) {
        if (json) {
            this.exp      = json[ 'exp' ];
            this.username = json[ 'username' ];
            this.roles    = json[ 'roles' ];
            this.image    = null;
        }
    }

    // Everything under should not be inside the model, ikr..
    updateInfo(json) {
        this.id       = json[ 'id' ];
        this.username = json[ 'username' ];
        this.email    = json[ 'email' ];
        this.image    = json[ 'image' ];
        this.friends  = mapFriendsToArray(json[ 'friends' ]);
        this.pendings = mapFriendsToArray(json[ 'pendings' ]);
        this.requests = mapFriendsToArray(json[ 'requests' ]);
    }

    clone() {
        let user      = new User();
        user.id       = this.id;
        user.username = this.username;
        user.image    = this.image;

        user.friends  = this.friends;
        user.pendings = this.pendings;
        user.requests = this.requests;

        return user;
    }

    addFriend(json) {
        let user   = this.clone();
        let filter = (friend) => {
            return friend.id !== json.friend.id;
        };

        user.requests = this.requests.filter(filter);
        user.friends  = this.friends.filter(filter);
        user.pendings = this.pendings.filter(filter);

        json.friend.state = json.state;

        if (json.state === 0) {
            user.pendings.push(new Friend(json.friend));
        } else if (json.state === 1) {
            user.friends.push(new Friend(json.friend));
        }

        return user;
    }

    removeFriend(id) {
        let user   = this.clone();
        let filter = (friend) => {
            return friend.id !== id;
        };

        user.friends  = this.friends.filter(filter);
        user.requests = this.requests.filter(filter);
        user.pendings = this.pendings.filter(filter);

        return user;
    }

    updateGames(games) {
        let user = this.clone();
        for (let game of games) {
            let isFirstPlayer = game['firstPlayer'] === this.id;
            let otherID = isFirstPlayer ? game['secondPlayer'] : game['firstPlayer'];

            for (let friend of this.friends) {
                if (friend.id === otherID) {
                    friend.game = new Game(isFirstPlayer, game);
                    break;
                }
            }
        }
        return user;
    }

    updateOneGame(game) {
        let isFirstPlayer = game["firstPlayer"] === this.id;
        let player = isFirstPlayer ? game["secondPlayer"] : game["firstPlayer"];
        game["myTurn"] = game["isFirstPlayerTurn"] ? isFirstPlayer : !isFirstPlayer;

        for (let friend of this.friends) {
            if (friend.id === player) {
                friend.game.hydrateGame(player, game);
            }
        }

        return this;
    }
}