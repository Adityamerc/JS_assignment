(function (){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for(var i = 0; i < names.length; i++){
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter ==='j') {
    	byeSpeaker.func2(names[i]);
  } 
    else {
    	helloSpeaker.func1(names[i]);
  }
  }
})();
