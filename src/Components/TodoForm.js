import React, {useState} from 'react'
import {
    Container,
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
}from "reactstrap"

import {v4} from "uuid"

//redux
import { connect, Connect } from 'react-redux'
import {addTodo} from "../Action/todo"

const  TodoForm = ({addTodo}) => {

    const [title, setTitle]  = useState("");

    const handleSubmit = e =>{
        e.preventDefault();
            if (title === '') {
                return alert("please add to do")
            }

            const todo ={
                title,
                id: v4()
            }

            addTodo(todo);

            setTitle("");
    }

    return (
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <InputGroup>
              <Input
                type="text"
                name="todo"
                id="todo"
                placeholder="Your next Todo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              {/* <InputGroupAddon addonType="prepend"> */}
                <Button color="primary" onClick={handleSubmit}>
                  ADD
                </Button>
              {/* </InputGroupAddon> */}
            </InputGroup>
          </FormGroup>
        </Form>
      );
}


const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    addTodo: todo => {
        dispatch(addTodo(todo))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
