export default class Question {

    constructor(question) {
        this.text = question["text"];
        this.answers = question["answers"];
        this.adult = question["adult"];
    }

}