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
    const flatListRef = useRef();


    const addMessage = (text: string) => {
        //@ts-ignore
        setMessages([...messages, text]);
      };

      const handleSendMessage = () => {
        if (inputText) {
          addMessage(inputText);
          setInputText('');
          flatListRef?.current?.scrollToEnd();
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
       <Header title={'Messages'} onCrossPress={onCrossPress}/>
       
       <View style={styles.inputView}>
       <TextInputComponent 
       value={inputText}
       onChangeText={setInputText}
       handleSendMessage={handleSendMessage}/>
       </View>

       <List data={messages} flatListRef={flatListRef}/>
      </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor:"#924af7"
  },
  inputView: {
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28, 
    backgroundColor:"white", 
    padding:16
  }
});

export default ChatScreen;
