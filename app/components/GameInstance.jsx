import {bindActionCreators} from 'redux';
import {displayOneGame}     from '../actions/game_actions';
import {Component}          from 'react';
import {connect}            from 'react-redux';
import React                from 'react';

import '../assets/css/GameInstance.scss';
import DoAnswer             from './answers/DoAnswer';
import ShowAnswer           from './answers/ShowAnswer';

class GameInstance extends Component {

    componentWillMount() {

        for (let friend of this.props.user.friends) {
            if (friend.game !== null && friend.game.id === this.props.game.gameID) {
                this.friend = friend;
            }
        }

        if (!this.friend) {
            this.props.displayOneGame({gameID: null, state: -1});
        }
    }

    render() {
        if (this.friend) {
            let currAnswer = this.friend.game.answers[this.props.game.state];

            if (currAnswer.playerAnswer === null || currAnswer.correctAnswer === null) {
                return <DoAnswer friend={this.friend} answer={currAnswer} closeGame={this.props.displayOneGame}/>
            } else {
                return <ShowAnswer friend={this.friend} answer={currAnswer} user={this.props.user} closeGame={this.props.displayOneGame}/>
            }
        }
        return "";
    }

}

export default connect(
    state => ({
        user  : state.tokenReducer.user,
        game: state.gameReducer,
    }),
    dispatch => ({
        displayOneGame: bindActionCreators(displayOneGame, dispatch),
    }),
)(GameInstance);
