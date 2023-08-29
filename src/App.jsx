import { RouterProvider } from 'react-router-dom';
import './App.css';
import {routes} from '../src/Routes/Routes'
import { Provider } from 'react-redux';
import { store } from './Redux/Store';


function App() {
  return <Provider store={store} >     <RouterProvider router={routes} />    </Provider> 
}

export default App;
