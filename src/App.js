import { useDispatch, useSelector } from 'react-redux/es/exports';
import './App.css';
import { clearHelloAction, sayHelloAction } from './actions/actions';
import MainPage from './pages/mainPage/MainPage';
import NumberPage from './pages/numberPage/NumberPage';

function App() {
  const dispatch = useDispatch()


  const sayHello = () => {
    dispatch(sayHelloAction("Abdulazim"))
  }

  const clearHello = () => {
    dispatch(clearHelloAction())
  }

  return (
    <>
      <MainPage/>
      <NumberPage/>
    </>
  );
}

export default App;
