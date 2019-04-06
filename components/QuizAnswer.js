import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'

class QuizAnswer extends Component {
    render() {
        const { prefix } = this.props
        return (<Text>
        			{ prefix }QuizAnswer
               </Text>)
    }
}
function mapStateToProps ({}, {}) {
    return { 
    }
}
export default connect(mapStateToProps)(QuizAnswer)
