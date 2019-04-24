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
        answer_text:"",
    }

    addQuestion = () => {
        const { deckName } = this.props
        const questionInfo = {Q: this.state.question_text, A:this.state.answer_text}

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
