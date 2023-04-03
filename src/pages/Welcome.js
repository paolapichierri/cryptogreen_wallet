import '../App.css';

function App() {
  return (
        <div className='h-screen bg-white flex flex-col justify-center font-sans'>
          <header className='text-center'>
            <img className='w-full max-w-xs mx-auto' src='/media/welcome-header.png' alt="welcome header"/>
            <h1 className='text-5xl	font-semibold text-primary mt-5'>Crypto<span className='text-accent'>G</span>reen</h1>
          </header>
          <div className='mx-auto mt-20'>
            <button className='w-48 '>
              <a href='' className='w-full bg-accent shadow-xl fill-white flex justify-center items-center py-3 rounded-3xl'>
                <p className='text-2xl text-white font-bold tracking-wide uppercase'>Login</p>
              </a>
            </button>
          </div>
          <a href='' className='text-center mt-4 uppercase font-bold text-xl text-primary'>Sign up</a>
        </div>
  );
}

export default App;
