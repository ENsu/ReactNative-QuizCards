import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Headline, Title, Button } from 'react-native-paper'


class DeckDetail extends Component {
	static navigationOptions = {
		title: 'Deck Info',
	}

    render() {
    	const { deckInfo } = this.props
        return (<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        			<Headline>{ deckInfo.deckName }</Headline>
        			<Title>Card Number: { deckInfo.questions.length }</Title>
					<Button mode="contained" style={{margin: 8}} onPress={() => this.props.navigation.navigate("AddQuiz", 
						          						{ deckName: deckInfo.deckName }
													)}> AddQuiz
					</Button>
					<Button mode="contained" style={{margin: 8}} onPress={() => this.props.navigation.navigate("QuizQuestion")}>
							Start Quiz
					</Button>
					<Button style={{margin: 8}} onPress={() => console.log("Delete!")}>
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
