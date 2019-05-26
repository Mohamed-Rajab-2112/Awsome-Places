import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {connect} from 'react-redux';
import {Navigation} from "react-native-navigation";
import {deletePlace} from '../../store/actions/index'

const PlaceDetail = (props) => {

    const placeDeleteHandler = () => {
        props.deletePlace(props.selectedPlace.key);
        Navigation.pop(props.componentId)

    };

    return (
        <View style={styles.modalContainer}>
            <View>
                <Image style={styles.placeImage} source={props.selectedPlace.image}/>
                <Text style={styles.placeName}>{props.selectedPlace.value}</Text>
            </View>
            <View>
                <TouchableOpacity onPress={placeDeleteHandler}>
                    <View style={styles.deleteButton}>
                        <Icon size={30} name='ios-trash' color='red'/>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22
    },
    placeImage: {
        width: '100%',
        height: 200
    },
    placeName: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
        marginBottom: 20,
    },
    deleteButton: {
        alignItems: 'center'
    }
});

export default connect(null, {deletePlace})(PlaceDetail);