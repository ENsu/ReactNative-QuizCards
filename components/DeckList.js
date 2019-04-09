import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import Deck from "./Deck"
import { withTheme } from 'react-native-paper';


class DeckList extends Component {
    render() {
	    const { colors } = this.props.theme;
        return (<View style={{ backgroundColor: colors.background, flex: 1 }}>
                    <Deck />
                    <Deck />
                    <Deck />
               </View>)
    }
}

function mapStateToProps ({}, {}) {
    return { 
    }
}
export default connect(mapStateToProps)(withTheme(DeckList))