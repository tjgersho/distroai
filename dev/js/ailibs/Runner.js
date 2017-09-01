
import Atomic from "../vendor/atomic.js"


class Runner {
 
 constructor() {
     this.describeClass = "This is the runner Class";
 }

 run(){
	console.log('RUnner run method()');

	console.log(Atomic);
 }

}

export default Runner;