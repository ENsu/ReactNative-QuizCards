import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'

class QuizResult extends Component {
    render() {
        const { prefix } = this.props
        return (<Text>
        			{ prefix }QuizResult
               </Text>)
    }
}
function mapStateToProps ({}, {}) {
    return { 
    }
}
export default connect(mapStateToProps)(QuizResult)
