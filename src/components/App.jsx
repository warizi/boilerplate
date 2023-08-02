import Style from './App.style';
import Greeting from './Greeting';
import SignIn from './SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Style.Container>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Greeting name="React" />} />
          <Route path='/signin' element={<SignIn />}/>
        </Routes>
      </BrowserRouter>
    </Style.Container>
  );
};

export default App;
