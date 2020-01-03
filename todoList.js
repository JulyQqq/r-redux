import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input, Button, List, Typography } from "antd";
import store from "./store";

class todoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
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
        />
        <Button type="primary" onClick={this.handleClick}>
          提交
        </Button>
        <div style={{ width: "300px", marginTop: "30px" }}>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => (
              <List.Item onClick={this.handleItemDelete.bind(index)}>
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
  handleInputChange(e) {
    const action = {
      type: "change_input_value",
      value: e.target.value
    };
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }
  handleClick = () => {
    const action = {
      type: "add_todo_item"
    };
    store.dispatch(action);
  };
  handleItemDelete = index => {
    const action = {
      type:'delete_item',
      index
    }
    console.log(index);
    store.dispatch(action)
  };
}
export default todoList;
