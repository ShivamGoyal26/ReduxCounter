import React from 'react';
import { SafeAreaView } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import valueReducer from './store/reducers/Counter';
import MainScreen from './mainscreen';

const rootReducer = combineReducers({
    valueReducer: valueReducer,
});


const store = createStore(rootReducer);


const App = props => {
    return (
        console.log("Working"),
        <Provider store={store}>
            {/* <SafeAreaView> */}
                <MainScreen />
            {/* </SafeAreaView> */}
        </Provider>
    );
};

export default App;