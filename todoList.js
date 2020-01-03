import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input, Button, List, Typography } from "antd";
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
      <div style={{ margin: "30px 0 0 30px" }}>
        <Input
          value={this.state.inputVal}
          placeholder="please input"
          style={{ width: "300px", marginRight: "10px" }}
          onChange={this.handleInputChange}
          onKeyPress={this.handleEnterKey}
        />
        <Button type="primary" onClick={this.handleClick}>
          提交
        </Button>
        <div style={{ width: "300px", marginTop: "30px" }}>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => (
              <List.Item onClick={this.handleItemDelete.bind(this, index)}>
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    );
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
