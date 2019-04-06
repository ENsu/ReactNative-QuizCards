import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'

class Deck extends Component {
    render() {
        const { prefix } = this.props
        return (<Text>
        			{ prefix }Deck
               </Text>)
    }
}
function mapStateToProps ({}, {}) {
    return { 
    }
}
export default connect(mapStateToProps)(Deck)

