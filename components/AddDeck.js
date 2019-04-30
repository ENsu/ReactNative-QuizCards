import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { TextInput, Button } from 'react-native-paper'

import { handleAddDeck } from '../actions/decks'

class AddDeck extends Component {

    static navigationOptions = {
        title: 'Add Deck',
    }

	state = {
		text: ""
	}

	addDeck = () => {
		this.props.dispatch(handleAddDeck(this.state.text))
		this.props.navigation.navigate("DeckList")
	}

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <TextInput
                    label="Input your Deck Name"
                    value={this.state.text}
                    style={{margin: 8}}
                    onChangeText={text => this.setState({ text })}
                />
                <Button 
                    mode="contained" 
                    style={{margin: 8}}
                    onPress={this.addDeck}>
                    Add
                </Button>
            </View>
      )
    }
}
function mapStateToProps () {
    return { 
    }
}
export default connect(mapStateToProps)(AddDeck)
