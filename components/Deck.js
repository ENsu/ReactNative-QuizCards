import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation';

class Deck extends Component {
    render() {
        return (<TouchableOpacity onPress={() => this.props.navigation.navigate("DeckDetail")}>
	        		<Text>
	        			Deck
	               </Text>
               </TouchableOpacity>)
    }
}

function mapStateToProps ({}, {}) {
    return { 
    }
}

export default connect(mapStateToProps)(withNavigation(Deck))

