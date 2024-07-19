import logo from './logo.svg';
import './App.css';
import Todo from './Components/to-do-list/to-do';
import Header from './Components/header/header';


function App() {

  const styles = {
    margin: 0,
    padding: 0,
    boxSizing: 'borderBox',
}

  return (
   <div style={styles}>
        <Todo />
   </div>
  );
}

export default App;
