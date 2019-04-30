import React, { Component, Fragment } from 'react'
import { View  } from 'react-native'
import { connect } from 'react-redux'
import { Headline, Button, Title } from 'react-native-paper'
import { handleUpdateHist } from '../actions/decks'
import { clearLocalNotification, setLocalNotification } from '../utils/notification'


class Quiz extends Component {

    static navigationOptions = {
            title: 'Question'
    }

    state = {
        mode: "question",
        correct: null,
        userAnswer: ""
    }

    handleAnswer = (userAnswer) => {
        const { question } = this.props

        // check answer and real_answer
        const correct = (userAnswer === question.A)

        // set state to change to answer mode
        this.setState(() => ({
            mode: "answer",
            correct: correct
        }))

        // notification for tomorrow, if no quiz done tomorrow
        clearLocalNotification()
            .then(setLocalNotification)
    }

    handleNext = () => {
        const { probLeft, deckName } = this.props
        const { correct } = this.state
        this.props.dispatch(handleUpdateHist(deckName, correct))
        this.setState(() => ({
            mode: "question",
            correct: null,
            userAnswer: ""
        }))
        if (probLeft == 0) {
            this.props.navigation.push("Score", {deckName: deckName})
        }
    }

    shouldComponentUpdate = (nextProp) => {
        return nextProp.question !== undefined
    }

    render() {
        const { question, probLeft } = this.props
        const { mode, userAnswer, correct } = this.state
        const [op1, op2, op3] = question.O

        return (<View style={{flex: 1, justifyContent: 'center'}}>
            <Title style={{ alignSelf: "center" }}>Problem Left: { probLeft }</Title>
            <Headline style={{ alignSelf: "center" }}>{ question.Q }</Headline>
            { mode === "question" 
            ? (<Fragment>
                <Button
                  style={{margin: 4}}
                  mode={ userAnswer === op1 ? 'contained' : 'outlined'}
                  onPress={() => { this.setState({ userAnswer: op1 }); }}
                >{ op1 }</Button>
                <Button
                  style={{margin: 4}}
                  mode={ userAnswer === op2 ? 'contained' : 'outlined'}
                  onPress={() => { this.setState({ userAnswer: op2 }); }}
                >{ op2 }</Button>
                <Button
                  style={{margin: 4}}
                  mode={ userAnswer === op3 ? 'contained' : 'outlined'}
                  onPress={() => { this.setState({ userAnswer: op3 }); }}
                >{ op3 }</Button>
                <Button 
                    mode="contained" 
                    style={{margin: 8}}
                    onPress={() => this.handleAnswer(userAnswer)}>
                    Show Answer
                </Button>
            </Fragment>)
            : (<Fragment><Headline style={{ alignSelf: "center" }}>{correct ? "Correct!" : "Wrong!"}</Headline>
            <Button 
                mode="contained" 
                style={{margin: 8}}
                onPress={this.handleNext}>
                { probLeft == 0 ? "Done" : "Next"}
            </Button></Fragment>)}
        </View>)
    }
}

function mapStateToProps ({ decks }, { navigation }) {
    const { deckName } = navigation.state.params
    const deckInfo = decks[deckName]
    const probNum = deckInfo.ansHist.length
    const probLeft = ( deckInfo.questions.length - probNum ) - 1
    return { 
        question: deckInfo.questions[probNum],
        deckName: deckName,
        probLeft: probLeft,
    }
}
export default connect(mapStateToProps)(Quiz)
