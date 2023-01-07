import ThemeProvider from './Components/ThemeProvider';
import ThemedText from './Components/ThemedText'

import './App.css';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={{background: "limegreen"}}>
        <div>
          <div>
            <ThemedText>Hola esto debería tener un fondo color verde lima.</ThemedText>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
