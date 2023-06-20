import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './ToDo.Styles';

const ToDo = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPressT}>
        <Text style={styles.text_container}>{props.item}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToDo;
