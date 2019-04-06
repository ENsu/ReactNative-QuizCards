import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'

class AddQuiz extends Component {
    render() {
        return (<Text>
        			AddQuiz
               </Text>)
    }
}
function mapStateToProps ({}, {}) {
    return { 
    }
}
export default connect(mapStateToProps)(AddQuiz)
