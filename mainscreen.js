import React from "react";
import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import {decreaseCount,increaseCount} from './store/actions/Counter';

const MainScreen = props => {

    const value = useSelector(state => state.valueReducer.value);
    const dispatch = useDispatch();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <View style={{ marginBottom: 20 }}>
                <Button title="Press Me For Decrement" color='black' onPress={() => {
                    dispatch(decreaseCount())
                }} />
            </View>
            <Text>
                Counter: {value}
            </Text>
            <View style={{ marginTop: 20 }}>
                <Button title="Press Me For Increment" color='black' onPress={() => {
                    dispatch(increaseCount())
                }} />
            </View>

        </View>
    );
}

export default MainScreen;