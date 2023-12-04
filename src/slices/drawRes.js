import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator, useDrawerProgress} from '@react-navigation/drawer';
import {Animated, View, Text, TouchableOpacity} from 'react-native'

const Drawer = createDrawerNavigator();

const Feed = () => {
    const progress = useDrawerProgress()

    console.log('progress: ', progress.value)

    const backgroundColor = progress.value.interpolate({
        inputRange: [0, 1],
        outputRange: ['rgba(255,255,255,1)', 'rgba(0,0,0,1)'],
        extrapolate: 'clamp'
    })

    return(
        <Animated.View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: backgroundColor}}>
            <Text>Feed</Text>
        </Animated.View>
    )
}

const Article = () => {
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'cyan'}}>
            <Text>Article</Text>
        </View>
    )
}

export default () => {
  return (
    <NavigationContainer>
        <Drawer.Navigator
            screenListeners={{}}
            initialRouteName={'Feed'}
        >
            <Drawer.Screen name="Feed" component={Feed} />
            <Drawer.Screen name="Article" component={Article} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}