import React from 'react';
import './App.css';
// import { Provider } from 'react-redux';
// import store from './redux/store';
import MainPage from './Pages/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      {/* <Provider store={store} /> */}
      <MainPage/>
    </div>
  );
}

export default App;
