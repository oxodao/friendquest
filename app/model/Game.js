import Answer from './Answer';

export default class Game {

    constructor(isFirstPlayer, gameArray) {
        this.id = gameArray['id'];
        this.friend = isFirstPlayer ? gameArray["secondPlayer"] : gameArray["firstPlayer"];
        this.myTurn = (isFirstPlayer && gameArray['isFirstPlayerTurn']) || (!isFirstPlayer && !gameArray['isFirstPlayerTurn']);
        this.answers = [];
    }

    hydrateGame(player, info) {
        this.id = info["id"];
        this.friend = player;
        this.myTurn = info["myTurn"];
        this.answers = [];

        for (let answer of info["answers"]) {
            this.answers.push(new Answer(answer));
        }

        this.answers.sort((a, b) => {
            if (a.correctAnswer === null && b.correctAnswer === null)
                return 0;

            if (a.correctAnswer === null && b.correctAnswer !== null)
                return 1;

            if (a.correctAnswer !== null && b.correctAnswer === null)
                return -1;

            if (a.playerAnswer === null && b.playerAnswer === null)
                return 0;

            if (a.playerAnswer === null && b.playerAnswer !== null)
                return 1;

            if (a.playerAnswer !== null && b.playerAnswer === null)
                return -1;

            return 0;

        });
    }

}
