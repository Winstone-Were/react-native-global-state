import { StatusBar } from 'expo-status-bar';

import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import React, { useState } from 'react';

import { getStateArray, pushToStateArray } from '../Services/StateService';

export default function FirstScreen({ navigation }) {
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
            <Text>FirstScreen</Text>
            <TouchableOpacity onPress={() => navigation.push('ScreenTwo')}>
                <Text> Tap to go to Screen Two </Text>
            </TouchableOpacity>
            <Button title='Push' onPress={() => WriteValue(10)} />
            <Button title='Read' onPress={() => ReadValue()} />
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
