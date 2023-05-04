import { useState} from 'react';

import './index.css'

function App() {
  const [divs, setDivs] = useState([]);

  const handleButtonClick = () => {
    setDivs([...divs, <div key={divs.length} className='h-56 bg-black w-3/4'>a fucking div</div>]);
  };

  return (
    <div className="App m-auto">
      <button className='p-3 rounded-2xl bg-blue-200  justify-center' onClick={handleButtonClick}>Add a div</button>
      <div className='grid grid-cols-4 gap-4'>{divs}</div>
    </div>
  );
}

export default App;
