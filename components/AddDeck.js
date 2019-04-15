import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { TextInput, Title, Button } from 'react-native-paper';

class AddDeck extends Component {
	state = {
		text: ""
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
					onPress={() => console.log('Pressed')}>
					Confirm
				</Button>
	      	</View>
      )
    }
}
function mapStateToProps ({}, {}) {
    return { 
    }
}
export default connect(mapStateToProps)(AddDeck)
