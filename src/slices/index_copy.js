import {useState} from "react"
import {StyleSheet, SafeAreaView, Text, View, ScrollView, KeyboardAvoidingView, TextInput, Platform, TouchableOpacity} from "react-native"
import Material from 'react-native-vector-icons/MaterialCommunityIcons'
import {Blue, LightBlue, LightRed, LightSucess, Red, Success} from "./colors"
import {useDispatch, useSelector} from "react-redux"
import {addTodo, checkTodo, selectTodos} from "./slices/todoSlice"

export default () => {
    const todos = useSelector(selectTodos)
    console.log('todos: ', todos)
    const dispatch = useDispatch()

    const [text, setText] = useState('')
    
    const handleAddTodo = () => {
        const todo = {
            id: Math.random().toString(),
            title: text,
            show: false,
            checked: false,
        }

        dispatch(addTodo(todo))
        setText('')
    }

    const handleChecked = (id) => {
        dispatch(checkTodo(id))
    }

    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#f1f1f1'}}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{fontSize: 28, fontWeight: 'bold', color: '#383838'}}>:: TODO APP</Text>
                </View>
                <View style={styles.body}>
                    <ScrollView style={{height: 'auto', alignSelf: 'stretch'}}>
                        {
                            todos.map(x => 
                                <TouchableOpacity
                                    onPress={() => handleChecked(x.id)}
                                    key={x.id} 
                                    style={{height: 'auto', alignSelf: 'stretch', backgroundColor: '#f1f1f1', borderRadius: 4, overflow: 'hidden', padding: 10, marginBottom: 10, flexDirection: 'row'}}>
                                        <View style={{height: 35, width: 35, borderRadius: 4, justifyContent: 'center', alignItems: 'center', backgroundColor: x.checked ? LightSucess : '#dadada'}}>
                                            <Material name={'check'} size={18} color={x.checked ? Success : 'transparent'}/>
                                        </View>
                                        <View style={{flex: 1, marginLeft: 10, justifyContent: 'center', alignItems: 'flex-start'}}>
                                            <Text style={[{fontSize: 18, fontWeight: 'bold', color: '#383838'}, x.checked ? styles.titleChecked : undefined]}>{x.title}
                                                {
                                                    x.title.length > 13 
                                                    &&
                                                       <Text>...</Text>
                                                }
                                            
                                            </Text>
                                        </View>
                                        <View style={{height: 35, width: 35, borderRadius: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: LightBlue}}>
                                            <Material name={'pencil'} size={18} color={Blue}/>
                                        </View>
                                        <View style={{marginLeft: 10, height: 35, width: 35, borderRadius: 4, justifyContent: 'center', alignItems: 'center', backgroundColor: LightRed}}>
                                            <Material name={'trash-can'} size={18} color={Red}/>
                                        </View> 

                                </TouchableOpacity>    
                            )
                        }
                    </ScrollView>
                    <KeyboardAvoidingView
                        behavior={Platform.OS ? "padding" : undefined}
                        style={styles.footer}
                    >
                        <TextInput 
                            value={text}
                            onChangeText={(e) => setText(e)}
                            style={styles.input}
                            placeholder={'Escribe una tarea'}/>
                        <View style={{width: 18}}/>
                        <TouchableOpacity 
                            onPress={() => text !== '' ? handleAddTodo() : {}}
                            style={styles.button}>
                            <Material name={'plus'} size={18} color={'#fff'}/>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    header: {
        height: 60,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 18
    },
    body: {
        flex: 1,
        alignSelf: 'stretch',
        paddingHorizontal: 18
    },
    footer: {
        height: 80,
        alignSelf: 'stretch',
        flexDirection: 'row',
        paddingHorizontal: 18,
    },
    input: {
        height: 55,
        flex: 1,
        backgroundColor: '#f5f5f5',
        borderWidth: 1,
        borderColor: '#dadada',
        borderRadius: 4,
        paddingHorizontal: 12
    },
    button: {
        width: 55,
        height: 55,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Blue
    },
    titleChecked: {
        textDecorationColor: '#383838',
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid'
    }
})