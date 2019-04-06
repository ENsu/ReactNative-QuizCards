import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

class QuizAnswer extends Component {
    render() {
        return (<View>
	        		<Text>
	        			Quiz Question
	        		</Text>
	        		<Text>
	        			QuizAnswer
	               </Text>
               </View>)
    }
}

function mapStateToProps ({}, {}) {
    return { 
    }
}
export default connect(mapStateToProps)(QuizAnswer)
