import logo from './logo.svg';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import ArchiveHeader from './components/ArchiveHeader.js'
import styles from './styles/global.css'

function App() {
  return (
    <div className="App">
        <Container>
            <ArchiveHeader/>
            <main className={styles.main}>
                <div>
                    <p>Hey everyone!</p>
                </div>
            </main>
        </Container>
    </div>
  );
}

export default App;
