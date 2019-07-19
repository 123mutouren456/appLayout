import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes';

const initialState = 
     [
      {
        id: 0,
        text: 'First',
        completed: true
      },
      {
        id: 1,
        text: 'Second',
        completed: false
      },
      {
        id: 2,
        text: 'Third',
        completed: true
      }
    ]
  
  


export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO: {
            return [
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                },
                ...state
            ]
        }
        case TOGGLE_TODO: {
            return state.map(todoItem => {
                if(todoItem.id === action.id){
                    return {...todoItem, completed: !todoItem.completed};
                }else{
                    return todoItem;
                }
            })
        }

        case REMOVE_TODO: {
            return state.filter(todoItem=>{
                return todoItem.id !== action.id;
            })
        }
        default: {
            return state;
        }
    }
}