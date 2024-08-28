
import {create} from "zustand"


type TTodo={
    id:number
    text:string;
    isComplete:boolean
}
type TTodoStore={
    todos:TTodo[];
    addTodo:(text:string)=>void;
    toggleTodo:(id:number)=>void;
    deleteTodo:(id:number)=>void;
}

export const useTodoStore = create<TTodoStore>((set) => ({
  todos: [],
  addTodo: (text: string) =>
    set((state) => ({
      todos: [...state.todos, { id: Math.random(), text, isComplete: false }],
    })),
  toggleTodo: (id: number) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      ),
    })),
  deleteTodo: (id: number) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));

//  

        
        

