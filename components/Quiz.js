import React, { Component, Fragment } from 'react'
import { View  } from 'react-native'
import { connect } from 'react-redux'
import { Headline, TextInput, Button } from 'react-native-paper'
import { handleUpdateHist } from '../actions/decks'


class Quiz extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Question'
        }
    }

    state = {
        mode: "question",
        correct: null,
        userAnswer: ""
    }

    handleAnswer = (userAnswer) => {
        const { question, deckName } = this.props

        // check answer and real_answer
        const correct = (userAnswer === question.A)

        // set state to change to answer mode
        this.setState(() => ({
            mode: "answer",
            correct: correct
        }))
    }

    handleNext = () => {
        const { lastProb, deckName } = this.props
        const { correct } = this.state
        this.props.dispatch(handleUpdateHist(deckName, correct))
        this.setState(() => ({
            mode: "question",
            correct: null,
            userAnswer: ""
        }))
        if (lastProb) {
            this.props.navigation.push("Home")
        }
    }

    shouldComponentUpdate(nextProp) {
        return nextProp.question !== undefined
    }

    render() {
        const { question, lastProb } = this.props
        const { mode, userAnswer, correct } = this.state

        return (<View style={{flex: 1, justifyContent: 'center'}}>
        			<Headline style={{ alignSelf: "center" }}>{ question['Q'] }</Headline>
                    { mode === "question" 
                    ? (<Fragment><TextInput
                        label="Your Answer"
                        value={userAnswer}
                        style={{margin: 8}}
                        onChangeText={text => this.setState({ userAnswer:text })}
                    />
                    <Button 
                        mode="contained" 
                        style={{margin: 8}}
                        onPress={() => this.handleAnswer(userAnswer)}>
                        Answer
                    </Button></Fragment>)
                    : (<Fragment><Headline style={{ alignSelf: "center" }}>{correct ? "Correct!" : "Wrong!"}</Headline>
                    <Button 
                        mode="contained" 
                        style={{margin: 8}}
                        onPress={this.handleNext}>
                        { lastProb ? "Done" : "Next"}
                    </Button></Fragment>)}
	            </View>
               )
    }
}
function mapStateToProps ({ decks }, { navigation }) {
    const { deckName } = navigation.state.params
    const deckInfo = decks[deckName]
    console.log("check point")
    console.log(deckInfo)
    const probNum = deckInfo.ansHist.length
    const lastProb = (probNum === deckInfo.questions.length - 1) ? true : false
    return { 
        question: deckInfo.questions[probNum],
        deckName: deckName,
        lastProb: lastProb,
    }
}
export default connect(mapStateToProps)(Quiz)
