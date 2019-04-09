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
import QuizQuestion from './components/QuizQuestion'
import QuizAnswer from './components/QuizAnswer'

const TabsNavigator = createBottomTabNavigator({
  Decks: {
    screen: DeckList,
  },
  AddNew: {
    screen: AddDeck,
  }, 
})

// Ref. https://reactnavigation.org/docs/en/navigation-options-resolution.html#a-stack-contains-a-tab-navigator-and-you-want-to-set-the-title-on-the-stack-header
TabsNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];

  // You can do whatever you like here to pick the title based on the route name
  const headerTitle = routeName;

  return {
    title: headerTitle,
  };
};

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
  QuizQuestion: {
    screen: QuizQuestion
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
