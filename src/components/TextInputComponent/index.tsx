import React, { FC, ReactElement } from 'react';
import { Image, Pressable, StyleSheet, Text, View,TextInput } from 'react-native';

interface IProps {
  value?: string;
  onChangeText: (value: string) => void;
  handleSendMessage?: () => void;
}

const TextInputComponent: FC<IProps> = (props: IProps): ReactElement => {
  const { value,onChangeText,handleSendMessage } = props;

  return (
    <View style={styles.container}>
        <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.textStyle}
        placeholder="Type your message here"
        onSubmitEditing={handleSendMessage}
        />
        <Pressable onPress={handleSendMessage}>
          <Text style={styles.text}>Send</Text>
        </Pressable>
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent:"space-between"
      },
      textStyle: {
        borderWidth: 1, 
        borderRadius: 12, 
        width: "90%", 
        padding:5,
        borderColor:"lightgrey"
      },
      text: {
        color:"grey"
      }

});

export default TextInputComponent;
