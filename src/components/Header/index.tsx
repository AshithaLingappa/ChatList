import React, { FC, ReactElement } from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Cross from '../../assets/icons/Cross';

interface IProps {
  title: string;
  backgroundColor?: string;
  onCrossPress?: () => void;
}

const Header: FC<IProps> = (props: IProps): ReactElement => {
  const { title, onCrossPress, backgroundColor } = props;

  const headerStyles = {
    ...defaultStyles.viewStyle,
    backgroundColor: backgroundColor || defaultStyles.viewStyle.backgroundColor,
  };

  return (
    <View style={headerStyles}>
      <Text style={defaultStyles.text}>{title}</Text>
      <TouchableOpacity onPress={onCrossPress}><Cross/></TouchableOpacity>
    </View>
  );
};

const defaultStyles = StyleSheet.create({
    viewStyle: {
      backgroundColor:"#924af7", 
      height: 120, 
      paddingHorizontal: 16, 
      justifyContent:"space-between",
      flexDirection:"row",
      alignItems:"center",
    },
    text: {
      color: "white", 
      fontSize: 24, 
      fontWeight:"bold"
    }
});

export default Header;
