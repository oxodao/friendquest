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

        let buttons = [];
        let answers = this.props.answer.question.answers;
        let phrase  = this.props.answer.playerAnswer === null ? 'Réponds à la question' : 'Qu\'est ce que ' + this.props.friend.username + ' à répondu(e)';

        for (let i = 0; i < answers.length; i++) {
            buttons.push(<Button key={i} variant="contained" color="primary">
                {answers[i]}
            </Button>);
        }

        return <div id="PLAYING">
            <BackgroundUserImage user={this.props.friend}/>
            <Button variant="fab" color="secondary" aria-label="close-game" id="close-bt"
                    onClick={() => this.closeGame()}>
                <CloseIcon/>
            </Button>
            <img id="avatar" src={this.props.friend.image} alt={this.props.friend.username}/>
            <div id="question">
                <h1>{this.props.answer.question.text}</h1>
                <span>{phrase}</span>
            </div>
            <div id="answers">
                {buttons}
            </div>
        </div>;
    }
}

DoAnswer.propTypes = {
    friend   : PropTypes.object.isRequired,
    answer   : PropTypes.object.isRequired,
    closeGame: PropTypes.func.isRequired,
};

export default DoAnswer;
