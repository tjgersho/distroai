///////////DISTROAI.COM///////////////////////
////////////////////////////////////////////
//Simple Sigmoid preceptron Class
///////////////////////////////////////////
///////////////////////////////////////////

class Sigtron {
 
 constructor(inputarray, bias) {
     this.describeClass = "This is a preceptron class - ";
	this.x = [];
	for(var i=0; i<inputarray.length; i++){
		this.x[i] = inputarray[i];
	}

	this.bias = bias;
 }

 setInputs(inputarray){
	this.x = null;
	this.x = [];
	for(var i=0; i<inputarray.length; i++){
		this.x[i] = inputarray[i];
	}

 }
 getOutput(){
	
	var val = 0;
	
	for(var i=0; i<this.x.length; i++){
			val =  val  + this.x[i].weight * this.x[i].switch;
	}
	console.log('Value');
	console.log(val);

	
      return this.activationFunc(val);

 }

activationFunc(dotProd){


return 1/(1+Math.exp(-dotProd-this.bias));

}

print(){

	console.log('This is a single Preceptron');
	
	for(var key in this){
	       console.log('Outer Key');
		console.log(key);
		console.log('typeof(This[key])');
		console.log(typeof(this[key]));
		if(typeof(this[key]) !== 'object' &&  typeof(this[key]) !== 'array'){

		  console.log(this[key]);
		}else{
		   for(var jey in this[key]){

			console.log(this[key][jey]);
		

		   }
		}

    	}
	console.log(this);


   }

}

export default Sigtron;