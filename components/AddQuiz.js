import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { TextInput, Button } from 'react-native-paper';


class AddQuiz extends Component {
	static navigationOptions = {
		title: 'Add Quiz',
	}

    state = {
        question_text:"",
        answer_text:"",
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
                        onPress={() => console.log('Pressed')}>
                        Submit
                    </Button>
               </View>)
    }
}
function mapStateToProps ({}, {}) {
    return { 
    }
}
export default connect(mapStateToProps)(AddQuiz)
