import './App.css';
import Mensaje from '../Mensaje/Mensaje';
import Prueba from '../Prueba/Prueba';

function App() {
  return (
      <div className="App">
        <h1>Hello Dojo!</h1>
        <h2>Things I need to do:</h2>
        <div className='lista'>
          <Mensaje/>
        </div>
      </div>
  );
}

export default App;
