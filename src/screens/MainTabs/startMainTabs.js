import {Navigation} from "react-native-navigation";
import Icon from 'react-native-vector-icons/Ionicons'

const startMainTabs = () => {
  Promise.all([
    Icon.getImageSource('md-map', 30),
    Icon.getImageSource('ios-share-alt', 30),
    Icon.getImageSource('ios-menu', 30),
  ])
    .then((source) => {
      Navigation.setRoot({
        root: {
          sideMenu: {
            left: {
              component: {
                name: 'awesome-places.SideDrawer',
                id: 'leftDrawer'
              }
            },
            center: {
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
                                },
                                leftButtons: [
                                  {
                                    id: 'sideDrawerToggle',
                                    icon: source[2]
                                  }
                                ]
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
                                },
                                leftButtons: [
                                  {
                                    id: 'sideDrawerToggle',
                                    icon: source[2]
                                  }
                                ]
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              },
            }
          },
        }
      });
    })
    .catch(() => {
      console.log('failed');
    })
};

export default startMainTabs;

