import React from "react";
import { Input, Button, List, Typography } from "antd";

const TodoListUI = props => {
  return (
    <div style={{ margin: "30px 0 0 30px" }}>
      <Input
        value={props.inputVal}
        placeholder="please input"
        style={{ width: "300px", marginRight: "10px" }}
        onChange={props.handleInputChange}
        onKeyPress={props.handleEnterKey}
      />
      <Button type="primary" onClick={props.handleClick}>
        提交
      </Button>
      <div style={{ width: "300px", marginTop: "30px" }}>
        <List
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => {
                props.handleItemDelete(index);
              }}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};
export default TodoListUI;
