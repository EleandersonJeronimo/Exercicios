import React, { useState } from 'react';
import { View, Text, StyleSheet, CheckBox } from 'react-native';

export const CheckText = () => {
  const [isSantosChecked, setIsSantosChecked] = useState(false);
  const [isMadridChecked, setIsMadridChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <CheckBox
          value={isSantosChecked}
          onValueChange={setIsSantosChecked}
        />
        <Text style={[styles.text, isSantosChecked && styles.textStrikethrough]}>
          Santos
        </Text>
      </View>

      <View style={styles.item}>
        <CheckBox
          value={isMadridChecked}
          onValueChange={setIsMadridChecked}
        />
        <Text style={[styles.text, isMadridChecked && styles.textStrikethrough]}>
          Madrid
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    marginLeft: 8,
  },
  textStrikethrough: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});
