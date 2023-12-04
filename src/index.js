import {useState} from "react"
import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import {Modal} from "./Components"

export default () => {

    const [visibility, setVisibility] = useState(false)

    const Card = () => {
        return(
            <View style={styles.cardContainer}>
                <View style={styles.topContainer}>
                    <Text style={styles.OFF}>50% OFF</Text>
                </View>
                <View style={styles.purchaseContainer}>
                    <Text style={styles.purchase}>on your first purchase</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.input}>Enter your email address here</Text>
                </View>
                <View style={[styles.inputContainer, {backgroundColor: '#F7C74A'}]}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>GET MY 50% OFF</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={{borderBottomWidth: 1.5, borderBottomColor: '#fff'}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold', color: '#fff'}}>NO, THANKS</Text>
                    </View>
                </View>
            </View>
        )
    }

    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f9f9f9'}}>
            <TouchableOpacity
                onPress={() => setVisibility(true)}
                style={styles.button}>
                <Text style={styles.titleButton}>Abrir Modal</Text>
            </TouchableOpacity>
            <Modal visibility={visibility} dismissable={true} handleDismiss={() => setVisibility(false)}>
                <Card />
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 55,
        width: 160,
        backgroundColor: '#CD4E43',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginBottom: 25
    },
    titleButton: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff'
    },
    cardContainer: {
        height: 'auto',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CD4E43',
        padding: 20
    },
    topContainer: {
        height: 'auto',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    OFF: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#fff'
    },
    purchaseContainer: {
        height: 'auto',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    purchase: {
        fontSize: 20,
        fontWeight: '300',
        color: '#fff'
    },
    inputContainer: {
        height: 50,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom: 15 
    },
    input: {
        fontSize: 14,
        fontWeight: '500'
    },
    bottomContainer: {
        height: 'auto',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    }
})