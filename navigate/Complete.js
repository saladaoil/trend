import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Complete = ( props ) => {
  const {name, email, message} = props.route.params;
  return (
    <>
      <View style={styles.container}>
        <View style={styles.massageArea}>
          <Text style={styles.massage}>お問合せありがとうございます</Text>
          <Text style={styles.massage}>以下の内容でお問合せ受け付けました</Text>
        </View>
        <View style={styles.contactArea}>
          <Text style={styles.contactInfo}>{`お名前： ${name}様`}</Text>
          <Text style={styles.contactInfo}>{`メールアドレス： ${email}`}</Text>
          <Text style={styles.contactInfo}>{`お問合せ内容： ${message}`}</Text>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BFBFBF',
  },
  massageArea: {
    alignItems: 'baseline',
    margin: 20,
    width: '80%',
  },
  massage: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#242424',
    textAlign: 'left',
  },
  contactArea: {
    width: '80%',
  },
  contactInfo: {
    marginLeft: 20,
    fontSize: 18,
  }
});
export default Complete;