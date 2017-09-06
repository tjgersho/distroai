class GradientDecent {

constructor(nn){
	this.describeClass = "This is the GradientDecent Solver Class";
	this.neuralNet = nn;
	
	
 }


 minimize(){
	// C(v) ... v = v1, v2, v3

	//deltaC ~ dC/dv1*deltaV1 + dC/dv2*deltaV2
	//deltaC ~ GradientC * DeltaV
	//make DeltaV = -n*GradientC

	//learning rate n
	////Were are going to implement the Stochastic Gradient Decent



 }


 print(){
	console.log('GradientDecent Object');

 }

}

export default GradientDecent;