import './App.css';
import Footer from './components/Footer';
import Overview from './components/Overview';

function App() {

  return (
    <div className="App">
      <Overview className="px-4 py-5 bg-white space-y-6 sm:p-6"></Overview>
      <Footer></Footer>
    </div>
  );
}

export default App;
