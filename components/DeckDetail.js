import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Headline, Title, Button } from 'react-native-paper'
import { handleDeleteDeck, handleResetHist } from '../actions/decks'

class DeckDetail extends Component {
	static navigationOptions = {
		title: 'Deck Info',
	}

	handleDelete = () => {
		const { deckName } = this.props.deckInfo
		
		new Promise((res) => res(this.props.dispatch(handleDeleteDeck(deckName))))
			.then(() => 
				this.props.navigation.push("Home")
			)		
	}

	handleDoQuiz = () => {
		const { questions, ansHist, deckName } = this.props.deckInfo
		if (questions.length === ansHist.length) {
			// need first reset the history
			new Promise((res) => res(this.props.dispatch(handleResetHist(deckName))))
				.then(() => this.props.navigation.push("Quiz",
			{ deckName: deckName }) )
		} else {
			this.props.navigation.push("Quiz",
				{ deckName: deckName }
			)
		}
	}

	shouldComponentUpdate(nextProp) {
		return nextProp.deckInfo !== undefined
	}

	render() {
		const { deckName, questions } = this.props.deckInfo
		return (<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
					<Headline>{ deckName }</Headline>
					<Title>Card Number: { questions.length }</Title>
					<Button mode="contained" style={{margin: 8}} onPress={() => this.props.navigation.navigate("AddQuiz", 
														{ deckName: deckName }
													)}> Add Card
					</Button>
					<Button mode="contained" style={{margin: 8}} onPress={this.handleDoQuiz}>
							Start Quiz
					</Button>
					<Button style={{margin: 8}} onPress={this.handleDelete}>
							Delete
					</Button>
				</View>)
    }
}
function mapStateToProps ({ decks }, { navigation }) {

	const { deckName } = navigation.state.params
    return { 
		deckInfo: decks[deckName]
    }
}
export default connect(mapStateToProps)(DeckDetail)
