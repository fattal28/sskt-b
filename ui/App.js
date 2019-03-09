import { Provider } from 'react-redux';
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { colors } from './src/styles';
import { createStackNavigator, createAppContainer } from "react-navigation";

import { store, persistor } from './src/redux/store';

import AppView from './src/modules/AppViewContainer';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <View style={styles.container}>
            <ActivityIndicator color={colors.red} />
          </View>
        }
        persistor={persistor}
      >
        <AppView />
      </PersistGate>
    </Provider>
  );
}

const AppContainer = createAppContainer(AppNavigator);

class ListGames extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>List Games</Text>
      </View>
    );
  }
}

class HostForm extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Host a Game</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Games: ListGames,
    HostForm: HostForm,
  },
  {
    initialRouteName: "Home"
  }
);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
