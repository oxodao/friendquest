import Friend from './Friend';

function mapFriendsToArray(friends) {
    let converted = [];
    for (let i = 0; i < friends.length; i++) {
        converted.push(new Friend(friends[i]));
    }

    return converted;
}

export default class User {

    constructor(json) {
        if (json) {
            this.exp      = json['exp'];
            this.username = json['username'];
            this.roles    = json['roles'];
            this.image    = null;
        }
    }

    updateInfo(json) {
        console.log(json);
        this.id       = json['id'];
        this.username = json['username'];
        this.email    = json['email'];
        this.image    = json['image'];
        this.friends  = mapFriendsToArray(json['friends']);
        this.pendings = mapFriendsToArray(json['pendings']);
        this.requests = mapFriendsToArray(json['requests']);
    }
}