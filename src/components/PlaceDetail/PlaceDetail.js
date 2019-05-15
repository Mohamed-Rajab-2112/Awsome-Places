import React from "react";
import {Modal, View, Button, Text, Image, StyleSheet} from 'react-native'

const PlaceDetail = (props) => {
    let ModalContent = null;

    if (props.selectedPlace) {
        ModalContent = (
            <View>
                <Image style={styles.placeImage} source={props.selectedPlace.image}/>
                <Text style={styles.placeName}>{props.selectedPlace.value}</Text>
            </View>
        )
    }

    return (
        <Modal visible={!!props.selectedPlace} animationType='slide'>
            <View style={styles.modalContainer}>
                {ModalContent}
                <View>
                    <Button title='Delete' onPress={props.onItemDeleted} color='red'/>
                    <Button title='Close' onPress={props.onModalClosed}/>
                </View>
            </View>
        </Modal>
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
    }
});

export default PlaceDetail;