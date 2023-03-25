import logo from './logo.svg';
import './App.css';

function App() {
  const todos = ["ABC", "DEF"]
  return (
    <div id="root">
       {todos.map((todo,index) => {
        return <p key={index}>{todo}</p>
       })}
    </div>
  );
}

export default App;

