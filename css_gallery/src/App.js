import './App.css';
import Main from './components/main.js'
import {BrowserRouter} from 'react-router-dom'
import Bounce from './components/BounceLoading.js'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        {/* <Main /> */}
        <Bounce />
      </BrowserRouter>
    </div>
  );
}

export default App;
