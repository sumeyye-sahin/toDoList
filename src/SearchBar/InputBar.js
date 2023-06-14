import React from 'react';
import {
  View,
  TextInput
} from 'react-native';
import styles from './InputBar.Styles';

const InputBar = props => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={props.value}
        placeholder="Yapılacaklar..."
        placeholderTextColor="gray"
        onChangeText={props.onWrite}
      />
    </View>
  );
};

export default InputBar;
