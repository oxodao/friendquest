import {Component}         from 'react';
import React               from 'react';
import Button              from '@material-ui/core/es/Button/Button';
import * as PropTypes      from 'prop-types';
import BackgroundUserImage from '../BackgroundUserImage';
import CloseIcon           from '@material-ui/icons/Close';
import {DEFAULT_GAME}      from '../../actions/game_actions';

class ShowAnswer extends Component {

    closeGame() {
        this.props.closeGame(DEFAULT_GAME);
    }

    answer() {

    }

    render() {

        let game = this.props.answer;
        let answers = game.question.answers;

        let myAnswer = game.isFirstPlayer ? answers[game.playerAnswer] : answers[game.correctAnswer];
        let hisAnswer = !game.isFirstPlayer ? answers[game.playerAnswer] : answers[game.correctAnswer];

        let style = myAnswer == hisAnswer ? "correct" : "wrong";

        return <div id="PLAYING">
            <BackgroundUserImage user={this.props.friend}/>
            <Button variant="fab" color="secondary" aria-label="close-game" id="close-bt"
                    onClick={() => this.closeGame()}>
                <CloseIcon/>
            </Button>
            <img id="avatar" src={this.props.friend.image} alt={this.props.friend.username}/>
            <div id="question">
                <h1>{this.props.answer.question.text}</h1>
            </div>
            <div id="showAnswers" class="answers">
                <div id="firstAnswer" class="line">
                    <div className={"right " + style}>{myAnswer}</div>
                    <img src={this.props.user.image} />
                </div>
                <div id="secondAnswer" class="line">
                    <img src={this.props.friend.image} />
                    <div className={"left " + style}>{hisAnswer}</div>
                </div>
            </div>
        </div>;
    }
}

ShowAnswer.propTypes = {
    user: PropTypes.object.isRequired,
    friend: PropTypes.object.isRequired,
    answer: PropTypes.object.isRequired,
};

export default ShowAnswer;