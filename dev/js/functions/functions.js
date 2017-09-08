function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}



function fillArray(iniArray, val){



debugger;

	function buildArray(elem,  val){
	console.log('Val');
	console.log(val);
	console.log('elem');
	console.log(elem);

  for(var i=0; i<elem.length; i++){
		console.log('elem-i');
		console.log(elem[i]);
		
	 if(typeof(elem[i]) === 'number'){
		elem[i] = val;
		
	}else{
		iniArray = val;
		iniArray.address;

		 buildArray(elem[i], val);
 	}
  }
	

 

}

 return buildArray(iniArray,  val);

}



export   {shuffle, fillArray}