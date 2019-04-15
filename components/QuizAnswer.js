import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Headline, Button } from 'react-native-paper'


class QuizAnswer extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Answer'
        }
    }

    render() {
        return (<View style={{flex: 1, justifyContent: 'center', alignItems: "center"}}>
                    <Headline>Quiz Qustion Text</Headline>
                    <Headline>Your Answer Result</Headline>
                    <Button 
                        mode="contained" 
                        style={{margin: 8}}
                        onPress={() => this.props.navigation.navigate("QuizQuestion")}>
                        Next Question
                    </Button>
                </View>)
    }
}

function mapStateToProps ({}, {}) {
    return { 
    }
}
export default connect(mapStateToProps)(QuizAnswer)
