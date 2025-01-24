import './App.css'
import AddTodo from './components/AddTodos'
import Todos from './components/Todos'

function App() {
  
    return (
    <>
     <div className="text-2xl font-semibold mb-6">Todos</div>
    <AddTodo />
    <Todos />
    </>
  )
}

export default App