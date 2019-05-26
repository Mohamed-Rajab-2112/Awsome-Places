import React, {Component} from 'react';
import {View} from 'react-native';
import PlaceList from "../../components/PlaceList/PlaceList";
import {connect} from 'react-redux';
import {Navigation} from "react-native-navigation";

class FindPlaceScreen extends Component {

    itemSelectedHandler = selectedPlace => {
        Navigation.push(this.props.componentId, {
            component: {
                name: 'awesome-places.PlaceDerailsScreen',
                passProps: {selectedPlace},
                options: {
                    topBar: {
                        title: {
                            text: selectedPlace.name
                        }
                    }
                }
            }
        });
    };

    render() {
        return (
            <View>
                <PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandler}/>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        places: state.places.places
    }
};

export default connect(mapStateToProps)(FindPlaceScreen);