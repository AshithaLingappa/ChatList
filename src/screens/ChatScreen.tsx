import React, { useState, ReactElement, useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Header from '../components/Header';
import TextInputComponent from '../components/TextInputComponent';
import List from '../components/List';

const ChatScreen = (): ReactElement => {
  
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');

    const addMessage = (text: string) => {
        //@ts-ignore
        setMessages([...messages, text]);
      };

      const handleSendMessage = () => {
        if (inputText) {
          addMessage(inputText);
          setInputText('');
        }
      };
  
  const onCrossPress = () => {
    setMessages([])
  }
  
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
      <View style={styles.main}>
       <Header title={'Messages'} onCrossPress={onCrossPress} backgroundColor='pink'/>
       
       <View style={styles.inputView}>
       <TextInputComponent 
       value={inputText}
       onChangeText={setInputText}
       handleSendMessage={handleSendMessage}/>
       </View>

       <List data={messages}/>
      </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor:"#924af7"
  },
  inputView: {
    backgroundColor:"white", 
    padding:16
  }
});

export default ChatScreen;
