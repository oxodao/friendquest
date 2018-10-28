import {Component}    from 'react';
import React          from 'react';
import Button         from '@material-ui/core/es/Button/Button';
import * as PropTypes from 'prop-types';

class DoAnswer extends Component {
    render() {

        let buttons = [];
        let answers = this.props.answer.question.answers;

        for (let i = 0; i < answers.length; i++) {
            buttons.push(<Button key={i} variant="contained" color="primary">
                {answers[i]}
            </Button>);
        }

        return <div id="PLAYING">
            <img id="avatar" src={this.props.friend.image} alt={this.props.friend.username}/>
            <h1>{this.props.answer.question.text}</h1>
            <div id="answers">
                {buttons}
            </div>
        </div>
    }
}

DoAnswer.propTypes = {
    friend: PropTypes.object.isRequired,
    answer: PropTypes.object.isRequired
};

export default DoAnswer;
