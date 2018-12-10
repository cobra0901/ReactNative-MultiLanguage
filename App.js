import React from 'react';
import { withNamespaces } from 'react-i18next';
import { createStackNavigator } from 'react-navigation';
import i18n from './js/i18n';
import Home from './js/pages/Home';
import Page2 from './js/pages/Page2';

const Stack = createStackNavigator({
  Home: { screen: Home },
  Page2: { screen: Page2 },
});

const WrappedStack = ({ t }) => <Stack screenProps={{ t }} />;
const ReloadAppOnLanguageChange = withNamespaces('common', {
  bindI18n: 'languageChanged',
  bindStore: false,
})(WrappedStack);

export default class App extends React.Component {
  render() {
    return <ReloadAppOnLanguageChange />;
  }
}
