import Question from './Question';

export default class Answer {

    constructor(answer) {
        this.correctAnswer = answer['correctAnswer'];
        this.playerAnswer  = answer['playerAnswer'];
        this.question      = new Question(answer['question']);
    }

}