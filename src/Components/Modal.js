import { useEffect, useRef } from "react"
import { Animated, Dimensions, StyleSheet, View } from "react-native"

export default ({visibility = true, dismissable = true, handleDismiss = () => {}, children}) => {
    const height = Dimensions.get('window').height
    const width = Dimensions.get('window').width
    
    const maxHeight = height - ((height * 30) / 100)
    const maxWidth = '85%'
    

    const backgroundColor = useRef(new Animated.Value(0)).current
    const translateY = useRef(new Animated.Value(0)).current

    useEffect(() => {
        handleAnimated()
    }, [visibility])

    const handleAnimated = () => {
        Animated.parallel([
            Animated.timing(backgroundColor, {
                toValue: visibility ? 1 : 0,
                duration: 500,
                useNativeDriver: false
            }),
            Animated.timing(translateY, {
                toValue: visibility ? 1 : 0,
                duration: 500,
                useNativeDriver: false
            })
        ]).start()
    }

    const backgroundColorStyle = {
        backgroundColor: backgroundColor.interpolate({
            inputRange: [0, 1],
            outputRange: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.4)'],
            extrapolate: 'clamp'
        })
    }
 
    const translateStyle = {
        transform: [
            {
                translateY: translateY.interpolate({
                    inputRange: [0, 1],
                    outputRange: [height, 0],
                    extrapolate: 'clamp'
                }) 
            },
            {
                scale: translateY.interpolate({
                    inputRange: [0, 0.8, 1],
                    outputRange: [1, 1.5, 1],
                    extrapolate: 'clamp'
                })
            }
        ]
    } 

    return(
        <>
            <Animated.View
                pointerEvents={visibility ? 'auto' : 'none'}
                onTouchStart={dismissable ? () => handleDismiss() : () => {}}
                style={[styles.container, {width: width, height: height}, backgroundColorStyle]} 
            />
            <Animated.View style={[styles.modal, {maxHeight: maxHeight, width: maxWidth}, translateStyle]}>
                {
                    children
                }
            </Animated.View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 0
    },
    modal: {
        height: 'auto',
        position: 'absolute',
        zIndex: 10,
        overflow: 'hidden',
        borderRadius: 2
    }
})