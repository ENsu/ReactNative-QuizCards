import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import { Button } from 'react-native-elements'

import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'
import DeckDetail from './components/DeckDetail'
import AddQuiz from './components/AddQuiz'
import QuizAsk from './components/QuizAsk'
import QuizAnswer from './components/QuizAnswer'

const TabsNavigator = createBottomTabNavigator({
  DeckList: {
    screen: DeckList,
  },
  AddDeck: {
    screen: AddDeck,
  },
})

// const TabsContainer = createAppContainer(TabsNavigator)


const MainNavigator = createStackNavigator({
  Home: {
    screen: TabsNavigator
  },
  DeckDetail: {
    screen: DeckDetail,
  },
  AddQuiz: {
    screen: AddQuiz
  },
  QuizAsk: {
    screen: QuizAsk
  },
  QuizAnswer: {
    screen: QuizAnswer
  }
})

const AppContainer = createAppContainer(MainNavigator);


export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
          <AppContainer />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
