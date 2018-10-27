export default class Game {

    constructor(isFirstPlayer, gameArray) {
        this.id = gameArray['id'];
        this.myTurn = (isFirstPlayer && gameArray['isFirstPlayerTurn']) || (!isFirstPlayer && !gameArray['isFirstPlayerTurn']);
    }

    hydrateGame(info) {

    }

}
