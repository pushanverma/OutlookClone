import logo from './logo.svg';
import './App.css';
import Inboxit from './json/inbox.json';
import Navbar from './Components1/Navbar';
// import Inbox from './components/Inbox';
import Home from './components/Home';
import {Provider} from 'react-redux';
import store from './redux/store';



function App() {
  return (
  <Provider store={store}>
    <Navbar />
  </Provider>
  );
}

export default App;
