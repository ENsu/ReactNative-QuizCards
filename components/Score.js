import React, { Component } from 'react'
import { View  } from 'react-native'
import { connect } from 'react-redux'
import { Headline, Button, Title } from 'react-native-paper'
import { handleResetHist } from '../actions/decks'


class Score extends Component {

    static navigationOptions = {
        title: 'Score'
    }

    handleRestart = () => {
        const { deckName } = this.props.deckInfo
        new Promise((res) => res(this.props.dispatch(handleResetHist(deckName))))
            .then(() => this.props.navigation.push("Quiz",
        { deckName: deckName }) )
    }

    render() {
        const { deckName, ansHist } = this.props.deckInfo
        const correct_cnt = ansHist.filter((a) => a === true).length
        return (<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Headline>{ deckName } Test Result: </Headline>
                    <Title>Accuray: { Math.floor(correct_cnt / ansHist.length * 100) }%</Title>
                    <Button mode="contained" style={{margin: 8}} onPress={this.handleRestart}> Restart Quiz
                    </Button>
                    <Button mode="contained" style={{margin: 8}} onPress={() => this.props.navigation.navigate("DeckDetail", 
                    { deckName: deckName })}>
                        Back to Deck
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

export default connect(mapStateToProps)(Score)
