import numeric from 'numeric'
import {shuffle, fillArray} from '../functions/functions'


class NeuralNet {

constructor(sizes){
	this.describeClass = "This is the Neural Net Class";
	this.num_layers = sizes.length;
	this.sizes = sizes;

         this.biases = [];
	 this.biasesNj = [];

         this.weights = [];

		var postFirstRow = sizes.slice(1);


	for(var i=1; i<sizes.length; i++){
		
		this.biases[i-1] = [];
		
		for(var j=0; j<sizes[i]; j++){

			this.biases[i-1][j] = (Math.random()*2)-1;
		}
	}

	for(var i=1; i<sizes.length; i++){
            this.weights[i-1] = [];


		for(var j=0; j< sizes[i]; j++){
		     this.weights[i-1][j] = [];

			for(var n=0; n<sizes[i-1]; n++){

				this.weights[i-1][j][n] = (Math.random()*2)-1;
				

			}

		}
	}

	console.log(numeric);

	console.log(numeric.exp([1]));


	console.log(this.weights);

	console.log(this.weights[0][0]);

	console.log('Typeof arry');

	console.log(typeof(this.weights[0][0]));

	
	var s = this.sigmoid(this.weights[0][0]);

	console.log(s);

	s = this.sigmoid_prime(s);

console.log(s);

var td = [
		[
		[2,1],[2] 
		],[
		[2,2],[3]
		],[
		[2,3],[4]
		],[
		[2,4],[5]
		]


	];


console.log('TD Fill array before');
console.log(td);
td = fillArray(td, 0);
console.log('TD Fill array after');
console.log(td);


var mbs = 2;
var ep = 2;
var eta  = 1;


this.SGD(td, ep, mbs, eta);



 }

feedforward(a){

// """Return the output of the network if "a" is input."""
//        for b, w in zip(self.biases, self.weights):
//            a = sigmoid(np.dot(w, a)+b)
//        return a





}



SGD(training_data, epochs, mini_batch_size, eta, test_data){

 //       """Train the neural network using mini-batch stochastic
 //       gradient descent.  The ``training_data`` is a list of tuples
 //      ``(x, y)`` representing the training inputs and the desired
 //       outputs.  The other non-optional parameters are
 //       self-explanatory.  If ``test_data`` is provided then the
 //       network will be evaluated against the test data after each
 //       epoch, and partial progress printed out.  This is useful for
 //       tracking progress, but slows things down substantially."""


 if(test_data){
   var n_test = test_data.length;
 }

 var n = training_data.length;


  for(var j=0; j< epochs; j++){
	training_data = shuffle(training_data);
    var mini_batches = []

	for(var k=0; k< n; k+=mini_batch_size){
		mini_batches.push(training_data.slice(k,k+mini_batch_size));
		
	}
	for(var i=0; i<mini_batches.length; i++){
		this.update_mini_batch(mini_batches[i], eta);
	}

	if(test_data){
                console.log("Epoch "+ j + ": "+this.evaluate(test_data)+" / " + n_test);
         }else{
                console.log("Epoch "+ j + " complete");
	 }

   }


}

update_mini_batch(mini_batch, eta){
//  """Update the network's weights and biases by applying
//        gradient descent using backpropagation to a single mini batch.
//        The ``mini_batch`` is a list of tuples ``(x, y)``, and ``eta``
//        is the learning rate."""
//       nabla_b = [np.zeros(b.shape) for b in this.biases]

   var nabla_b = this.biases.slice();
   var nabla_w = this.weights.slice();

//       nabla_w = [np.zeros(w.shape) for w in this.weights]

//       for x, y in mini_batch:
//            delta_nabla_b, delta_nabla_w = self.backprop(x, y)
//            nabla_b = [nb+dnb for nb, dnb in zip(nabla_b, delta_nabla_b)]
//            nabla_w = [nw+dnw for nw, dnw in zip(nabla_w, delta_nabla_w)]
//        self.weights = [w-(eta/len(mini_batch))*nw
//                        for w, nw in zip(self.weights, nabla_w)]
//       self.biases = [b-(eta/len(mini_batch))*nb
//                       for b, nb in zip(self.biases, nabla_b)]




}

costFunction(){
//C(w,b) = 1/2n* SUM(Math.pow(y(x)-a,2))
//quadratic cost function

}

sigmoid(z){
//The sigmoid function.
	
	if(z.length > 1){
		var arrLen = z.length;
		var sigArry = [];
		for (var i=0; i< arrLen; i++){
			var zinn = z[i];
		  	sigArry[i] =  1.0/(1.0+Math.exp(-zinn));
		}

		return sigArry;
	}else{
		return	[1.0/(1.0+Math.exp(-z))];
	}

}


sigmoid_prime(z){
   //Derivative of the sigmoid function.
	if(z.length > 1){
		var arrLen = z.length;
               	var sigPrimeArry = [];
		for (var i=0; i< arrLen; i++){
		    	var zinn = z[i];
		    sigPrimeArry[i] = 	this.sigmoid(zinn)*(1-this.sigmoid(zinn));
		}

		return sigPrimeArry;
	}else{
	  return [this.sigmoid(zinn)*(1-this.sigmoid(zinn))];
	}
}


 print(){
	console.log('NuralNet Object');

 }

}

export default NeuralNet;