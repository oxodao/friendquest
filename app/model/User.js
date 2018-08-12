export default class User {

    constructor(json) {
        this.exp = json['exp'];
        this.username = json['username'];
        this.roles = json['roles'];
        this.image = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Tot%C3%B2%2C_Neapolitan_actor_1943.jpg/220px-Tot%C3%B2%2C_Neapolitan_actor_1943.jpg";// json[''];
    }

}