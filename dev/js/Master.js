import Runner from "./ailibs/Runner.js"
import config from "./distroConfig.js"

class Master {

  constructor() {

        this.name = "The one and ONLY!";


	for(var key in config){
		console.log(key);
		console.log(config[key]);

        this[key] = config[key];

	}

  }

  run() {
	console.log('Master Run Method');
	
	var runner = new Runner();

	runner.run();

  }

  print(){

	console.log('This is the Master Object for DistroAI');
	
	for(var key in this){
		console.log(key);
		console.log(this[key]);

    	}
	console.log(this);


   }
}

export default Master;