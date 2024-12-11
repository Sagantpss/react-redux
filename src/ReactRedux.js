import React from "react";
// Redux
import HomeContainer from './containers/HomeContainer';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './services/reducers/index'
const store = createStore(rootReducer)
console.log("Store Data",store);


function ReactRedux() {
    return (
       <Provider store={store}>
        <div className="App">
            <HomeContainer />
        </div>
        </Provider>
    );
}

export default ReactRedux;