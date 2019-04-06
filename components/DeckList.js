import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import Deck from "./Deck"

class DeckList extends Component {
    render() {
        const { prefix } = this.props
        return (<View>
        			<Text>{ prefix }DeckList</Text>
                    <Deck prefix={`-${prefix}`}/>
               </View>)
    }
}
function mapStateToProps ({}, {}) {
    return { 
    }
}
export default connect(mapStateToProps)(DeckList)