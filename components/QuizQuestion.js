import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'

class QuizQuestion extends Component {
    render() {
        const { prefix } = this.props
        return (<Text>
        			{ prefix }QuizQuestion
               </Text>)
    }
}
function mapStateToProps ({}, {}) {
    return { 
    }
}
export default connect(mapStateToProps)(QuizQuestion)
