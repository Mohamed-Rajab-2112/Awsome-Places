import React from 'react';
import {ScrollView, StyleSheet, FlatList} from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = props => {
    return (
        <FlatList style={styles.listContainer}
                  data={props.places}
                  renderItem={(info) => (
                      <ListItem placeImage={info.item.image} placeName={info.item.value} onItemPressed={() => props.onItemSelected(info.item)}/>)
                  }
        ></FlatList>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});

export default placeList;