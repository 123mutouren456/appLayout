import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {toggleTodo, removeTodo} from '../actions';

class TodoItem extends React.Component{
    constructor(){
        super(...arguments);
    }

    render(){
        const {onToggle, onRemove, completed, text} = this.props;

        return (
            <li className="todo-item" 
            style={{textDecoration:completed?'line-through': "none"}}>
                <input className="toggle" type="checkbox" checked={completed?"chekced":""} readOnly onClick={onToggle} />
                <label className="text" >{text}</label>
                <button className="remove" onClick={onRemove}>X</button>
            </li>
        )
    }
}

TodoItem.proptypes = {
    onToggle: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

const mapDispatchToProps = (dispatch, ownProps)=>{
    const {id} = ownProps;
    return {
        onToggle: () => dispatch(toggleTodo(id)),
        onRemove: () => dispatch(removeTodo(id))
    }
}

export default connect(null, mapDispatchToProps)(TodoItem);