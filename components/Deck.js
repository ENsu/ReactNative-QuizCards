import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { Card, Title } from 'react-native-paper'


class Deck extends Component {

    render() {
      const { deckInfo } = this.props

      return (<TouchableOpacity onPress={() => { this.props.navigation.navigate("DeckDetail",
          {
            deckName: deckInfo.deckName 
          }
        )}}>
            <Card style={styles.card}>
              <Card.Title title={ deckInfo.deckName } />
              <Card.Content>
                <Title>Card Number: { deckInfo.questions.length }</Title>
              </Card.Content>
            </Card>
            </TouchableOpacity>)
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 4,
  },
  card: {
    margin: 8,
    elevation: 4,
  },
});

function mapStateToProps({ decks }, { name }) {
  return {
    deckInfo: decks[name],
  }
}

export default connect(mapStateToProps)(withNavigation(Deck))

