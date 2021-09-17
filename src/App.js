import { Route } from 'react-router';
import Main from './pages/Main';

function App() {
  return (
  
    <Route exact path="/" component={Main} />
  
  );
}

export default App;
