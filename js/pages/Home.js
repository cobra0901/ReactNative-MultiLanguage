import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Text, View, Button } from 'react-native';

export class Home extends React.Component {

  render() {
    const { t, i18n, navigation } = this.props;
    const { navigate } = navigation;

    return (
      <View>
        <Text>{t('common:currentLanguage', { lng: i18n.language })}</Text>
        <Button
          onPress={() => {
            i18n.changeLanguage('en');
          }}
          title={t('common:actions.toggleToEnglish')}
        />
        <Button
          onPress={() => {
            i18n.changeLanguage('de');
          }}
          title={t('common:actions.toggleToGerman')}
        />
        <Text>{t('introduction')}</Text>
        <Button onPress={() => navigate('Page2')} title={t('common:actions.goToPage2')} />
      </View>
    );
  }
}

export default withNamespaces(['home', 'common'], { wait: true })(Home);
