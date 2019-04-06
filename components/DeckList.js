import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import Deck from "./Deck"

class DeckList extends Component {
    render() {
        return (<View>
        			<Text>DeckList</Text>
                    <Deck />
               </View>)
    }
}
function mapStateToProps ({}, {}) {
    return { 
    }
}
export default connect(mapStateToProps)(DeckList)