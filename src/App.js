import './App.css';
import './styles.css'
import { ContextProvider } from './components/Context';
import { DarkModeProvider } from './components/DarkModeContext';
import Main from './components/Main';

function App() {
  return (
    <DarkModeProvider>
      <ContextProvider>
        <Main />
      </ContextProvider>
    </DarkModeProvider>
  );
}

export default App;
