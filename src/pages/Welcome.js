import Button from '@atoms/Button';
import { Link } from 'react-router-dom';
import '../App.css';

function App() {
  return (
        <div className='h-screen bg-white flex flex-col justify-center font-sans'>
          <header className='text-center'>
            <img className='w-full max-w-xs mx-auto' src='/media/welcome-header.png' alt="welcome header"/>
            <h1 className='text-5xl	font-semibold text-primary mt-5'>Crypto<span className='text-accent'>G</span>reen</h1>
          </header>
          <div className='mx-auto mt-20'>
            <Button to="/login">Log in</Button>
          </div>
          <Link to='/register/access-data' className='text-center mt-4 uppercase font-bold text-xl text-primary'>Sign up</Link>
        </div>
  );
}

export default App;
