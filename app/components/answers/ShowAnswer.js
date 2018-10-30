import {Component}         from 'react';
import React               from 'react';
import Button              from '@material-ui/core/es/Button/Button';
import * as PropTypes      from 'prop-types';
import BackgroundUserImage from '../BackgroundUserImage';
import CloseIcon           from '@material-ui/icons/Close';
import {DEFAULT_GAME}      from '../../actions/game_actions';

class DoAnswer extends Component {

    closeGame() {
        this.props.closeGame(DEFAULT_GAME);
    }

    answer() {

    }

    render() {

        let game = this.props.answer;
        let answers = game.question.answers;

        console.log(this.props);


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
            <div id="answers">
                <div id="">{answers[game.playerAnswer]}</div>
                <div id="">{answers[game.correctAnswer]}</div>
            </div>
        </div>;
    }
}

DoAnswer.propTypes = {
    friend: PropTypes.object.isRequired,
    answer: PropTypes.object.isRequired,
};

export default DoAnswer;