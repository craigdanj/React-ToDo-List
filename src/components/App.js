import React, { Component } from 'react';
import './App.css';
import AppHeader from './AppHeader';
import ListWrapper from './ListWrapper';

class App extends Component {

    render() {
        const title = "Todo List";

        return (
            <div className="App">
                <AppHeader title={title}/>
                <ListWrapper/>
            </div>
        );
    }
}

export default App;