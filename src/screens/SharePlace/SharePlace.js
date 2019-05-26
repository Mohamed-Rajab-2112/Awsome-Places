import React, {Component} from 'react'
import {View} from 'react-native'
import PlaceInput from "../../components/PlaceInput/PlaceInput";
import {connect} from "react-redux";
import {addPlace} from "../../store/actions";

class SharePlaceScreen extends Component {

    render() {
        return (
            <View>
                <PlaceInput onPlaceAdded={this.props.addPlace}/>
            </View>
        )
    }
}

export default connect(null, {addPlace})(SharePlaceScreen);