import config from "./distroConfig.js"



import fs from 'file-system'
import path from 'path'

import nj from 'numjs'
import jd from 'jsdataframe'
import {CostReduction, SGDOptimizer, InCPUMemoryShuffledInputProviderBuilder, Session, Graph, Array1D, NDArrayMathGPU, Scalar} from 'deeplearn';




class TestAI {

  constructor() {

        this.name = "Working on AI Running!";


	for(var key in config){
		console.log(key);
		console.log(config[key]);

        this[key] = config[key];

	}

  }

  run() {
	console.log('Test AI Runner');
	
  }

  print(){

	console.log('This is a test AI runner');
	
	for(var key in this){
		console.log(key);
		console.log(this[key]);

    	}
	console.log(this);


   }
}

export default TestAI;