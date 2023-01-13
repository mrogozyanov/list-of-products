
import './App.css';
import Image from './men.webp'
import ImageTwo from './hops.webp'
import { ActivUser } from './activUser';

function App() {
  return (
    <div>

      <div className='conteiner'>

        <div className='conteiner_two'>
          <img src={ ImageTwo } alt = 'prodyct' width='250px' height = '250px'/>
        </div>

        <div className='conteiner_two'>
          <h1>Grocery List</h1>
        </div>

        <ActivUser/>

        <div className='conteiner_two'>
          <img src={ Image } alt = 'manShops' width='250px' height = '250px'/>
        </div>
      </div>

    </div>
  );
}

export default App;
