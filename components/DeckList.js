import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import Deck from "./Deck"
import { withTheme } from 'react-native-paper';

import { handleGetDecks } from '../actions/decks'
import { init } from '../utils/init' 


class DeckList extends Component {

    static navigationOptions = {
        title: 'Deck List',
    }

    componentDidMount () {
        // init().then(() => 
            this.props.dispatch(handleGetDecks())
        //)
    }

    render() {
	    const { colors } = this.props.theme
        const { deckNames } = this.props
        return (<View style={{ backgroundColor: colors.background, flex: 1 }}>
                    { deckNames.map(
                        (name)=> <Deck key={name} name={name} />
                    )}
               </View>)
    }
}

function mapStateToProps ({ decks }, {}) {

    return { 
        deckNames: Object.keys(decks)
    }
}
export default connect(mapStateToProps)(withTheme(DeckList))