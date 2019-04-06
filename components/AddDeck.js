import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'

class AddDeck extends Component {
    render() {
        return (<Text>
        			AddDeck
               </Text>)
    }
}
function mapStateToProps ({}, {}) {
    return { 
    }
}
export default connect(mapStateToProps)(AddDeck)
