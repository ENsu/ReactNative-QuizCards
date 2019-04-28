import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { TextInput, Button } from 'react-native-paper';
import { handleAddQuestion } from '../actions/decks'

class AddQuiz extends Component {
	static navigationOptions = {
		title: 'Add Quiz',
	}

    state = {
        question_text:"",
        option1_text:"",
        option2_text:"",
        option3_text:"",
        answer_text:"",
    }

    addQuestion = () => {
        const { deckName } = this.props
        const { question_text, option1_text, option2_text, option3_text, answer_text } = this.state
        const questionInfo = {Q: question_text, 
                              O: [option1_text, option2_text, option3_text], 
                              A: answer_text}

        this.props.dispatch(handleAddQuestion(deckName, questionInfo))
        this.props.navigation.navigate("DeckDetail")
    }

    render() {
        return (<View style={{flex: 1, justifyContent: 'center'}}>
        			<TextInput
                        label="Question"
                        value={this.state.question_text}
                        style={{margin: 16}}
                        onChangeText={text => this.setState({ question_text:text })}
                    />
                    <TextInput
                        label="Option1"
                        value={this.state.option1_text}
                        style={{margin: 16}}
                        onChangeText={text => this.setState({ option1_text:text })}
                    />
                    <TextInput
                        label="Option2"
                        value={this.state.option2_text}
                        style={{margin: 16}}
                        onChangeText={text => this.setState({ option2_text:text })}
                    />
                    <TextInput
                        label="Option3"
                        value={this.state.option3_text}
                        style={{margin: 16}}
                        onChangeText={text => this.setState({ option3_text:text })}
                    />
                    <TextInput
                        label="Answer"
                        value={this.state.answer_text}
                        style={{margin: 16}}
                        onChangeText={text => this.setState({ answer_text:text })}
                    />
                    <Button 
                        mode="contained" 
                        style={{margin: 16}}
                        onPress={this.addQuestion}>
                        Add
                    </Button>
               </View>)
    }
}
function mapStateToProps ({}, { navigation }) {
    const { deckName } = navigation.state.params

    return { 
        deckName: deckName
    }
}
export default connect(mapStateToProps)(AddQuiz)
