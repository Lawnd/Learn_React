import {React, useState} from 'react';
import './index.css';

const ButtonComponent = ({title, handleClick }) => {
    return (
        <button onClick={handleClick} >{title} </button>
    )
}


const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
  };


const Home = () => {
      const [count, setCount] = useState(0);

      const handleClick = () =>{
        // alert('You clicked me!');
        setCount(count + 1);
        }

        return (
    <>       
        <div className='t1'>
        Welcome Home 
        </div>
        

        <h1>{user.name}</h1>
        <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
        />
        <div>
        <ButtonComponent handleClick={handleClick} title={`Click ${count}`} />
        </div>
    </>
  );
}

export default Home;