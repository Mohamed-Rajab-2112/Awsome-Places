import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import {connect} from 'react-redux';
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
import {addPlace, deletePlace, deselectPlace, selectPlace} from "./src/store/actions/index";

class App extends Component {

    placeAddedHandler = placeName => {
        this.props.onAddPlace(placeName);
    };

    placeDeleteHandler = () => {
        this.props.onDeletePlace();
        this.modalClosedHandler()
    };

    modalClosedHandler = () => {
        this.props.onDeselectPlace();
    };

    itemSelectedHandler = place => {
        // alert(JSON.stringify(place, null, 3))
        this.props.onSelectPlace(place.key)
    };

    render() {
        return (
            <View style={styles.container}>
                <PlaceDetail selectedPlace={this.props.selectedPlace} onItemDeleted={this.placeDeleteHandler}
                             onModalClosed={this.modalClosedHandler}/>
                <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
                <PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandler}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 26,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start"
    }
});

const mapStateToProps = state => {
    return {
        places: state.places.places,
        selectedPlace: state.places.selectedPlace
    }
};

const mapActionToProps = dispatch => {
    return {
        onAddPlace: name => dispatch(addPlace(name)),
        onDeletePlace: () => dispatch(deletePlace()),
        onSelectPlace: key => dispatch(selectPlace(key)),
        onDeselectPlace: () => dispatch(deselectPlace()),
    }
};

export default connect(mapStateToProps, mapActionToProps)(App);