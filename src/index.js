import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './App.css';
import {createStore} from 'redux'

//action
const increment = ()=>{
  return{
    type:'INCREMENT'
  }
}

const decrement = ()=>{
  return{
    type:'DECREMENT'
  }
}

//reducer
const counter = (state =0, action)=> {
  switch(action.type){
    case "INCREMENT":
      return state+1;
    case "DECREMENT":
      return state-1;
      default:
        return state
  }

};
//store
let store = createStore(counter)

store.subscribe(()=>console.log(store.getState()));

//dispacher
store.dispatch(increment())
store.dispatch(increment())


ReactDOM.render(
  <App class= "App"/>,
  
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
