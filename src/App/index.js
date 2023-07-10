import React from 'react'
import './App.css';
import{ TodoCounter } from '../TodoCounter'
import {TodoSearch} from '../TodoSearch'
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { useLocalStorage } from '../TodoContext/useLocalStorage';
import { TodosLoading} from '../TodosLoading'
import { TodosError} from '../TodosError'
import { EmptyTodos} from '../EmptyTodos'
import { TodoContext, TodoProvider } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
function App() {
  // let parsedTodos=JSON.parse(localStorageTodos)
  
  return (
    <TodoProvider>
      <React.Fragment>
        <TodoCounter 
        // completed={completedTodos} 
        // total={totalTodos} 
        /> 
        <TodoSearch
          // searchValue={searchValue}
          // setSearchValue={setSearchValue}
        /> 

        <TodoContext.Consumer>
          {({
            loading,
            error,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
          })=>(
            <>
            <TodoList>
            {loading && 
            <>
            <TodosLoading/>
            <TodosLoading/>
            <TodosLoading/>
            </>
            }
            {error && <TodosError/>}
            {(!loading && searchedTodos.length===0) && <EmptyTodos/>}
    
            {searchedTodos.map(todo=>(
              <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              onComplete={()=>completeTodo(todo.text)}
              onDelete={()=>deleteTodo(todo.text)}
              />
            ))}
          </TodoList> 

          {openModal && (
                  <Modal>
                    <TodoForm/>
                </Modal>
        )}
          <CreateTodoButton
          setOpenModal={setOpenModal}
        />

          </>
          
          
          )}
        </TodoContext.Consumer>
      
      </React.Fragment>

    </TodoProvider>
  );
}


export default App;
