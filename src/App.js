import './App.css';
import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import AddListing from './components/AddListing';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar/>
        <BookList/>
        <AddListing/>
      </BookContextProvider>
    </div>
  );
}

export default App;
