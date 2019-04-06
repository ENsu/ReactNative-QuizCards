import React, { Component } from 'react'
import { Text, TouchableOpacity, View  } from 'react-native'
import { connect } from 'react-redux'

class QuizAsk extends Component {
    render() {
        return (<View>
        			<Text>Quiz Qustion</Text>
	        		<TouchableOpacity onPress={() => this.props.navigation.navigate("QuizAnswer")}>
		            	<Text>Answer</Text>
		            </TouchableOpacity>
	            </View>
               )
    }
}
function mapStateToProps ({}, {}) {
    return { 
    }
}
export default connect(mapStateToProps)(QuizAsk)
