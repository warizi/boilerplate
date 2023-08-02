import Style from './App.style';
import Greeting from './Greeting';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Style.Container>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Greeting name="React" />} />
        </Routes>
      </BrowserRouter>
    </Style.Container>
  );
};

export default App;
