import './App.css';
import './styles.css'
import { ContextProvider } from './components/Context';
import Main from './components/Main';

function App() {
  return (

    <ContextProvider>
      <Main />
    </ContextProvider>
  );
}

export default App;
