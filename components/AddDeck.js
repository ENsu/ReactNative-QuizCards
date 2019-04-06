import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'

class AddDeck extends Component {
    render() {
        const { prefix } = this.props
        return (<Text>
        			{ prefix }AddDeck
               </Text>)
    }
}
function mapStateToProps ({}, {}) {
    return { 
    }
}
export default connect(mapStateToProps)(AddDeck)
