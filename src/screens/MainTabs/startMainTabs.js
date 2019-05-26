import {Navigation} from "react-native-navigation";
import Icon from 'react-native-vector-icons/Ionicons'

const startMainTabs = () => {
    Promise.all([
        Icon.getImageSource('md-map', 30),
        Icon.getImageSource('ios-share-alt', 30)
    ])
        .then((source) => {
            Navigation.setRoot({
                root: {
                    bottomTabs: {
                        children: [
                            {
                                stack: {
                                    children: [
                                        {
                                            component: {
                                                name: 'awesome-places.FindPlaceScreen',
                                                options: {
                                                    bottomTab: {
                                                        text: 'Find Place',
                                                        icon: source[0]
                                                    },
                                                    topBar: {
                                                        title: {
                                                            text: 'Find Place'
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                stack: {
                                    children: [
                                        {
                                            component: {
                                                name: 'awesome-places.SharePlaceScreen',
                                                options: {
                                                    bottomTab: {
                                                        text: 'Share Place',
                                                        icon: source[1]
                                                    },
                                                    topBar: {
                                                        title: {
                                                            text: 'Share Place'
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            });
        })
};

export default startMainTabs;

