import React from 'react';
import { withNamespaces, Trans } from 'react-i18next';
import { Text, View } from 'react-native';

export class Page2 extends React.Component {

  render() {
    const { t, i18n } = this.props;

    return (
      <View>
        <Text>{t('introduction')}</Text>
        <Text>{t('common:currentLanguage', { lng: i18n.language })}</Text>
        <Trans i18nKey="common:infoText">
          <Text >
            <Text>One </Text>
            <Text >Two </Text>
            <Text >Three </Text>
            <Text >Four </Text>
            <Text >Five </Text>
          </Text>
        </Trans>
      </View>
    );
  }
}

export default withNamespaces(['page2', 'common'], { wait: true })(Page2);