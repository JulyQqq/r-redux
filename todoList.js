import React, { Component } from "react";
import TodoListUI from "./todoListUI";
import "antd/dist/antd.css";
import axios from 'axios'

import store from "./store";
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction
} from "./store/actionCreators";

class todoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return (
      <TodoListUI
        inputVal={this.state.inputVal}
        list={this.state.list}
        handleEnterKey={this.handleEnterKey}
        handleInputChange={this.handleInputChange}
        handleClick={this.handleClick}
        handleItemDelete={this.handleItemDelete}
      />
    );
  }
  componentDidMount(){
    axios.get('/list.json').then(res=>{
      
    })
  }
  handleInputChange = e => {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  };

  handleStoreChange = () => {
    this.setState(store.getState());
  };
  handleClick = () => {
    const action = getAddItemAction();
    store.dispatch(action);
  };
  handleEnterKey = e => {
    if (e.which === 13) {
      this.handleClick();
    }
  };
  handleItemDelete(index) {
    console.log(index);
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }
}
export default todoList;
