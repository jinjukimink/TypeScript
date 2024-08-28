import { TTodo } from "../types/todo"

export type Action=
|{type:"ADD"; payload:{text:string}}
|{type:"DELETE",payload:{id:number}}
|{type:"TOGGLE",payload:{id:number}};


export const todoReducer = (todos:TTodo[],action:Action)=>{
    switch(action.type){
        case "ADD":
            return [...todos,
                {id:Math.random(),text:action.payload,isComplete:false}];
        case "TOGGLE":
            return todos.map((todo)=> todo.id === action.payload.id?
            {...todo,isComplete: !todo.isComplete}:todo);
        case "DELETE":
            return todos.filter(todo=>todo.id !== action.payload.id);
        default: 
            return todos;
    }
};
