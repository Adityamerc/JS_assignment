(function (window){
  var speakWord = "Good Bye";
  var byeSpeaker = {
  	func2 : function speak(name) {
  console.log(speakWord + " " + name);
             }
  };
  
 window.byeSpeaker = byeSpeaker
})(window);