
import './App.css';
import Navigation from './Components/Navigation';
import ContactHeader from './Components/ContactHeader';
import ContactForm from "./Components/ContactForm"
import Button from "./Components/Button"

function App() {
  return (
    <div className="App">
    
     <Navigation/>
     <ContactHeader />
     <ContactForm />
     <Button />
    </div>
  );
}

export default App;
