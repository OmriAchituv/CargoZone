import React from 'react';
import { Provider } from 'react-redux';
import store from './store'; 
import Counter from './Components/Counter';
import HttpRequestComponent from './Components/HttpRequest';
import './App.css';



const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <h1 className="text-center">My Redux Counter</h1>
        <div className="text-center">
          <Counter />
        </div>
      </div>
      <div className="http-request">
        <div className='text-http-request'>
          <h3>Please enter a valid json url</h3>
          <p> <b>For example: <br></br>https://jsonplaceholder.typicode.com/posts </b></p>
        </div>
        <HttpRequestComponent />
    </div>
    </Provider>
  );
};

export default App;
