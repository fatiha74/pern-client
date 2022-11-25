import './App.css';

import React, {Fragment} from "react";

//* component
import InputTodo from './components/inputTodo';
import ListTodos from './components/listTodos';

function App() {
  
    return( 
    <Fragment>
      {/* on introduit le component */}
      <div className='container'>  
      <InputTodo />
      <ListTodos/>
      </div>
    </Fragment>
    );
  
}

export default App;
