import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation';
import { Card, Title, Paragraph } from 'react-native-paper';


class Deck extends Component {
    render() {
        return (<TouchableOpacity onPress={() => this.props.navigation.navigate("DeckDetail")}>
	        		<Card style={styles.card}>
	        			<Card.Title title="Deck Name" />
	        			<Card.Content>
	        				<Title># of Cards</Title>
	        				<Paragraph>Last time accuracy or progress percentage</Paragraph>
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
    elevation: 4
  },
});

function mapStateToProps ({}, {}) {
    return { 
    }
}

export default connect(mapStateToProps)(withNavigation(Deck))

