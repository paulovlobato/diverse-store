import './App.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <header>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Welcome to the Diverse Store!
        </p>
        <div>
          <Link to='/product/list'>View Store Products</Link>
        </div>
        <div>
          <Link to='/cart'>View Shopping Cart</Link>
        </div>
      </header>
    </div>
  );
}

export default Home;
