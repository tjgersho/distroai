import $  from 'jquery' 


import Master from './Master'
import Game from './components/Game.jsx'

import React from 'react'
import ReactDOM from 'react-dom'


import TestAI from './TestAI'


console.log('DistroAI Entry');



const appMaster = new Master();


appMaster.run();

appMaster.print();
appMaster.buildOnePrecpetron();

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);


const testAI = new TestAI();


testAI.run()

