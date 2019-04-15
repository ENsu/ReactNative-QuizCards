import React, { Component } from 'react'
import { View  } from 'react-native'
import { connect } from 'react-redux'
import { Headline, TextInput, Button } from 'react-native-paper'


class QuizQuestion extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Question'
        }
    }

    state = {
        text: ""
    }

    render() {
        return (<View style={{flex: 1, justifyContent: 'center'}}>
        			<Headline style={{ alignSelf: "center" }}>Quiz Qustion Text</Headline>
                    <TextInput
                        label="Your Answer"
                        value={this.state.text}
                        style={{margin: 8}}
                        onChangeText={text => this.setState({ text:text })}
                    />
                    <Button 
                        mode="contained" 
                        style={{margin: 8}}
                        onPress={() => this.props.navigation.navigate("QuizAnswer")}>
                        Submit
                    </Button>
	            </View>
               )
    }
}
function mapStateToProps ({}, {}) {
    return { 
    }
}
export default connect(mapStateToProps)(QuizQuestion)
