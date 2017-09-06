class NeuralNet {

constructor(sizes){
	this.describeClass = "This is the Neural Net Class";
	this.num_layers = sizes.length;
	this.sizes = sizes;

         this.biases = [];
	
         this.weights = [[[]]];


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

	console.log('Net Biases');

	console.log(this.biases);

	console.log('net weights');

	console.log(this.weights);

	

 }


costFunction(){

//C(w,b) = 1/2n* SUM(Math.pow(y(x)-a,2))
//quadratic cost function



}

 print(){
	console.log('NuralNet Object');

 }

}

export default NeuralNet;