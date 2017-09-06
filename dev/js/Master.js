import Runner from "./ailibs/Runner.js"
import config from "./distroConfig.js"
import Preceptron from "./ailibs/Preceptron.js"
import PreceptronInput from "./ailibs/PreceptInput.js"
import Sigtron from "./ailibs/Sigtron.js"

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

  buildOnePrecpetron(){
	var precInputs = [];

	precInputs.push(new PreceptronInput(1, 0.5));
        precInputs.push(new PreceptronInput(1, 0.9));
	precInputs.push(new PreceptronInput(0, 1.0));

	var prec = new Preceptron(precInputs, 0.1);

	prec.print();
	
	var preceptOutput = prec.getOutput();
	console.log('Preceptron Output');
	console.log(preceptOutput);


        precInputs.push(new PreceptronInput(1, 0.5));
        precInputs.push(new PreceptronInput(1, 0.9));
	precInputs.push(new PreceptronInput(0, 1.0));

	var prec1 = new Preceptron(precInputs, 3);

	prec1.print();
	
	preceptOutput = prec1.getOutput();
	console.log('Preceptron Output');
	console.log(preceptOutput);



	precInputs = [];

	precInputs.push(new PreceptronInput(0.5, 5));
        precInputs.push(new PreceptronInput(0.8, 9));
	precInputs.push(new PreceptronInput(0.2, 10));

	var sig = new Sigtron(precInputs, 20);

	sig.print();
	
	var sigOutput = sig.getOutput();
	console.log('Sigtron Output');
	console.log(sigOutput);


        precInputs.push(new PreceptronInput(0.8, 5));
        precInputs.push(new PreceptronInput(0.9, 9));
	precInputs.push(new PreceptronInput(0.1, 10));

	var sig1 = new Sigtron(precInputs, 30);

	sig1.print();
	
	sigOutput = sig1.getOutput();
	console.log('sigtron Output');
	console.log(sigOutput);




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