import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class DeckDetail extends Component {
    render() {
        return (<View>
	        		<Text>
	        			DeckDetail: 
	               </Text>
	               <Text>
	               		DeckName - CardNumber
	               </Text>
	               <TouchableOpacity onPress={() => this.props.navigation.navigate("AddQuiz")}>
	               		<Text>AddQuiz</Text>
	               </TouchableOpacity>
	               <TouchableOpacity onPress={() => this.props.navigation.navigate("QuizAsk")}>
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
