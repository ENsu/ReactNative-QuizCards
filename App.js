import React from 'react';
import { Text } from 'react-native'
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import middleware from './middlewares'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { setLocalNotification, clearLocalNotification } from './utils/notification'


import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'
import DeckDetail from './components/DeckDetail'
import AddQuiz from './components/AddQuiz'
import Quiz from './components/Quiz'
import Score from './components/Score'


const DeckListStack = createStackNavigator({
  DeckList: DeckList,
})

DeckListStack.navigationOptions = {
  tabBarLabel: <Text style={{ fontSize: 15 }}> Decks </Text>,
  tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards' size={30} color={tintColor} />
}

const AddDeckStack = createStackNavigator({
  AddDeck: AddDeck,
});

AddDeckStack.navigationOptions = {
  tabBarLabel: <Text style={{ fontSize: 15 }}> Add New </Text>,
  tabBarIcon: ({ tintColor }) => <MaterialIcons name='add-box' size={30} color={tintColor} />
}

const TabsNavigator = createBottomTabNavigator({
  DeckListStack, 
  AddDeckStack
  }, {tabBarOptions: {
    activeTintColor: "black",
    style: {
      height: 64,
      backgroundColor: "white",
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 8
      },
      shadowRadius: 8,
      shadowOpacity: 1,
    }
  }
})

// Ref. https://reactnavigation.org/docs/en/navigation-options-resolution.html#a-stack-contains-a-tab-navigator-and-you-want-to-set-the-title-on-the-stack-header
TabsNavigator.navigationOptions = () => {

  return {
    header: null,
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
  Quiz: {
    screen: Quiz
  },
  Score: {
    screen: Score
  }
})

const AppContainer = createAppContainer(MainNavigator);

const theme = {
  ...DefaultTheme,
};

export default class App extends React.Component {

  componentDidMount() {
    clearLocalNotification()
        .then(setLocalNotification)
  }

  render() {

    return (
      <Provider store={createStore(reducer, middleware)}>
        <PaperProvider theme={theme}>
          <AppContainer />
        </PaperProvider>
      </Provider>
    );
  }
}
