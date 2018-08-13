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
    }

}