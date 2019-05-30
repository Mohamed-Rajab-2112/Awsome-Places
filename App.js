import React from 'react'
import {Navigation} from "react-native-navigation";
import {Provider} from 'react-redux'
import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import configureStore from './src/store/configureStore'
import PlaceDetail from "./src/screens/PlaceDetail/PlaceDetail";
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";

const store = configureStore();

// Register Screens
Navigation.registerComponent("awesome-places.AuthScreen", () => (props) => (
        <Provider store={store}>
            <AuthScreen {...props} />
        </Provider>
    ), () => AuthScreen
);

Navigation.registerComponent("awesome-places.FindPlaceScreen", () => (props) => (
        <Provider store={store}>
            <FindPlaceScreen {...props} />
        </Provider>
    ), () => FindPlaceScreen
);

Navigation.registerComponent("awesome-places.SharePlaceScreen", () => (props) => (
        <Provider store={store}>
            <SharePlaceScreen {...props} />
        </Provider>
    ), () => SharePlaceScreen
);

Navigation.registerComponent("awesome-places.PlaceDerailsScreen", () => (props) => (
        <Provider store={store}>
            <PlaceDetail {...props} />
        </Provider>
    ), () => PlaceDetail
);

Navigation.registerComponent("awesome-places.SideDrawer", () => (props) => (
        <Provider store={store}>
            <SideDrawer {...props} />
        </Provider>
    ), () => SideDrawer
);

// Start a App
Navigation.setRoot({
    root: {
        stack: {
            children: [
                {
                    component: {
                        name: "awesome-places.AuthScreen"
                    }
                }
            ],
            options: {
                topBar: {
                    title: {
                        text: 'Log In'
                    }
                }
            }
        }
    }
});
