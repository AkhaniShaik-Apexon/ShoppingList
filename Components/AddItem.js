import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const AddItem = ({ addItems }) => {
    const [text,setText] = useState('');

    const onChange = (textValue) => setText(textValue);
    return (
        <View>
            <TextInput placeholder='Add Item...' style={styles.input} onChangeText={onChange} />
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText} onPress={()=>{addItems(text)}}>
                    <Icon name="plus-circle" size={20} />
                    Add Item</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
        marginBottom: 10,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
    },
    btn: {
        backgroundColor: "#c2bad8",
        padding: 9,
        margin: 5,
        borderRadius: 5,
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default AddItem;