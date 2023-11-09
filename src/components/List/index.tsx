import React, { FC, ReactElement, useEffect, useRef } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from '../ListItem';

interface IListProps {
    data: any[];
}

const List : FC<IListProps> = (props: IListProps): ReactElement => {
    const { data } = props

  return (
    <FlatList
    style={styles.container}
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
      <ListItem data={item}/>
      )}
      
    />
  );
};

const styles = StyleSheet.create({
    container: {
        paddingLeft: 16, 
        backgroundColor:"white"
    }
  });

export default List;
