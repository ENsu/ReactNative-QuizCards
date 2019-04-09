import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class DeckDetail extends Component {
	static navigationOptions = {
		title: 'Deck Info',
	}

    render() {
        return (<View>
	               <Text>
	               		DeckName - CardNumber
	               </Text>
	               <TouchableOpacity onPress={() => this.props.navigation.navigate("AddQuiz")}>
	               		<Text>AddQuiz</Text>
	               </TouchableOpacity>
	               <TouchableOpacity onPress={() => this.props.navigation.navigate("QuizQuestion")}>
	               		<Text>Start Quiz</Text>
	               </TouchableOpacity>
	               	<Text>Delete</Text>
               </View>)
    }
}
function mapStateToProps ({}, {}) {
    return { 
    }
}
export default connect(mapStateToProps)(DeckDetail)
