import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg?url';
import './index.css';

function Home() {
    return (
        <div className='home-block'>
            <h1 className='home-title'>Stel Stelox</h1>
            <div className='info-block'>
                <h1 className='info-title'>Info me</h1>
                <p>Hello everyone! My name is Andrey, and my nickname on the Internet is StelStelox. I am a beginner developer studying Web development.</p>
            </div>

            <div className='framework-block'>
                <h1 className='framework-title'>This website is made through Vite builder using React framework</h1>
                <a href='https://vite.dev/' target='_blank' rel='noreferrer'>
                    <img src={viteLogo} alt='Vite Logo' className='logo'/>
                </a>
                <a href='https://react.dev/' target='_blank' rel='noreferrer'>
                    <img src={reactLogo} alt='React Logo' className='logo react' />
                </a>
            </div>
        </div>
    );
}

export default Home;