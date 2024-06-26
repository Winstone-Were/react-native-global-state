import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, StyleSheet,Button } from 'react-native';
import React, {useState} from 'react';

import { getStateArray, pushToStateArray, emptyStateArray } from '../Services/StateService';

export default function SecondScreen({ navigation }) {
    const [value, setValue] = useState();
    const ReadValue = () => {
        console.log(getStateArray());
        setValue(getStateArray());
    }
    const WriteValue = (value) => {
        pushToStateArray(value);
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.push('ScreenOne')}>
                <Text> Tap to go to Screen 1 </Text>
            </TouchableOpacity>
            <Text>SecondScreen</Text>
            <Button title='Push' onPress={() => WriteValue(10)} />
            <Button title='Read' onPress={() => ReadValue()} />
            <Button title='ClearState' onPress={() => emptyStateArray()}/>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
