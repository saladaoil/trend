import React from 'react';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';
import {useFormik} from 'formik';

const ContactForm = () => {
  const navigation = useNavigation();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required().name(),
      email: Yup.string().required().mail(),
      message: Yup.string().required(),
    }),
    onSubmit: values => {
      navigation.navigate('送信完了しました', values);
    },
  });
  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleArea}>
          <Text style={styles.title}>お名前</Text>
          <Text style={styles.error}>{formik?.errors?.name ?? '必須'}</Text>
        </View>
        <View style={styles.textInputArea}>
          <TextInput
            value={formik.values.name}
            onChangeText={formik.handleChange('name')}
            onBlur={formik.handleBlur('name')}
            placeholder={'山田 太郎'}
            autoCapitalize="none"
            style={styles.textInput}
            numberOfLines={1}
            textAlign={'left'}
          />
        </View>
        <View style={styles.titleArea}>
          <Text style={styles.title}>メールアドレス</Text>
          <Text style={styles.error}>{formik?.errors?.email ?? '必須'}</Text>
        </View>
        <View style={styles.textInputArea}>
          <TextInput
            value={formik.values.email}
            onChangeText={formik.handleChange('email')}
            onBlur={formik.handleBlur('email')}
            placeholder={'yamada@mail.com'}
            autoCapitalize="none"
            style={styles.textInput}
            numberOfLines={1}
            textAlign={'left'}
          />
        </View>
        <View style={styles.titleArea}>
          <Text style={styles.title}>お問合せ内容</Text>
          <Text style={styles.error}>{formik?.errors?.message ?? '必須'}</Text>
        </View>
        <View style={[styles.textInputArea, styles.textareaArea]}>
          <TextInput
            value={formik.values.message}
            onChangeText={formik.handleChange('message')}
            onBlur={formik.handleBlur('message')}
            placeholder={'お問い合わせ内容をご記入ください'}
            autoCapitalize="none"
            style={styles.textInput}
            numberOfLines={4}
            multiline
            editable
            textAlign={'left'}
          />
        </View>
        <TouchableOpacity
          disabled={Object.keys(formik.errors).length}
          style={styles.button}
          onPress={formik.handleSubmit}
        >
          <Text>{'送信'}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
Yup.setLocale({
  mixed: {
    required: '必須項目です',
  },
});
Yup.addMethod(Yup.string, 'name', function () {
  return this.test(
    'name',
    '形式が異なります',
    value => !value || /^[ぁ-んァ-ヶー一-龠ｱ-ﾝﾞﾟｧ-ｫｬ-ｮｰ　 ]+$/.test(value),
  );
});
Yup.addMethod(Yup.string, "mail", function () {
  return this.test(
    'mail',
    '形式が異なります',
    value =>
      !value ||
      /[a-zA-Z.0-9-._/#?!%&~+]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)
  );
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#BFBFBF',
  },
  titleArea: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 20,
    marginBottom: 10,
    width: '80%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#242424',
    textAlign: 'left',
  },
  error: {
    fontSize: 12,
    color: '#9B233F',
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  textInputArea: {
    alignItems: 'center',
    height: 30,
    width: '80%',
  },
  textInput: {
    width: '100%',
    flexGrow: 1,
    paddingHorizontal: 15,
    borderRadius: 6,
    backgroundColor: '#F3F3F3',
    fontSize: 16,
  },
  textareaArea: {
    height: 120,
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
    flexDirection: 'row',
    shadowColor: '#242424',
    borderRadius: 5,
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5, //IOS
  },
});
export default ContactForm;