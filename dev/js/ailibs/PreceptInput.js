class PreceptInput {
 
 constructor(onOff, weight) {

	if(onOff === undefined || weight === undefined) throw error;

        this.describeClass = "This is a preceptron INPUT class - ";
	this.switch = onOff;
	this.weight = weight;
 }

 setSwitch(bool){
	this.switch = bool;

 }
 setWeight(val){
	this.weight = val;

 }

 
print(){

	console.log('This is a single Preceptron INPUT');
	
	for(var key in this){
		console.log(key);
		console.log(this[key]);
		
    	}
	console.log(this);


   }

}

export default PreceptInput;