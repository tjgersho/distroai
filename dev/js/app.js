import $  from 'jquery' 


import Master from './Master'
import Game from './components/Game.jsx'

import React from 'react'
import ReactDOM from 'react-dom'


console.log('DistroAI Entry');



const appMaster = new Master();


appMaster.run();

appMaster.print();


ReactDOM.render(
  <Game />,
  document.getElementById('root')
);