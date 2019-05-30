import React, {Component} from 'react'
import {View} from 'react-native'
import PlaceInput from "../../components/PlaceInput/PlaceInput";
import {connect} from "react-redux";
import {addPlace} from "../../store/actions";
import {Navigation} from "react-native-navigation";

class SharePlaceScreen extends Component {

  componentDidMount() {
    this.navigationEventListener = Navigation.events().registerNavigationButtonPressedListener(this.onNavigatorEvent);
  }

  componentWillUnmount() {
    if (this.navigationEventListener) {
      this.navigationEventListener.remove();
    }
  }

  onNavigatorEvent = (e) => {
    if (e.buttonId === 'sideDrawerToggle') {
      Navigation.mergeOptions('leftDrawer', {
        sideMenu: {
          left: {
            visible: true
          }
        }
      });
    }
  };

  render() {
    return (
      <View>
        <PlaceInput onPlaceAdded={this.props.addPlace}/>
      </View>
    )
  }
}

export default connect(null, {addPlace})(SharePlaceScreen);