import React, { Component } from 'react'
import { View} from 'react-native'
import { connect } from 'react-redux'
import { Headline, Title, Button } from 'react-native-paper'


class DeckDetail extends Component {
	static navigationOptions = {
		title: 'Deck Info',
	}

    render() {
        return (<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        			<Headline>Deck's Name</Headline>
        			<Title># of cards</Title>
					<Button mode="contained" style={{margin: 8}} onPress={() => this.props.navigation.navigate("AddQuiz")}>
						AddQuiz
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
function mapStateToProps ({}, {}) {
    return { 
    }
}
export default connect(mapStateToProps)(DeckDetail)
