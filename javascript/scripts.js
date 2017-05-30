$(document).ready(function() {
  
  $("#getQ").on("click", function() {
  
    $(".newQ").html(print);
  
  });

});

var array = [
  ["Without music, life would be a mistake.", "Friedrich Nietzsche"],

  ["Music expresses that which cannot be put into words and that which cannot remain silent","Victor Hugo"],
 
  ["Without deviation from the norm, progress is not possible.", "Frank Zappa"],
  
 ["If I should ever die, God forbid, let this be my epitaph: THE ONLY PROOF HE NEEDED FOR THE EXISTENCE OF GOD WAS MUSIC", "Kurt Vonnegut"],
  
  ["After silence, that which comes nearest to expressing the inexpressible is music.","Aldous Huxley"],
  
  ["What is full of redundancy or formula is predictably boring. What is free of all structure or discipline is randomly boring. In between lies art.", "Wendy Carlos"],
  
  ["The music is not in the notes, but in the silence between.", "Wolfgang Amadeus Mozart"],
  
  ["If a composer could say what he had to say in words he would not bother trying to say it in music.",
"Gustav Mahler"],
  
  ["Without music to decorate it, time is just a bunch of boring production deadlines or dates by which bills must be paid.",
"Frank Zappa"],
  
  ["You blows who you is.",
"Louis Armstrong"],
  
  ["Music is enough for a lifetime - but a lifetime is not enough for music.",
"Sergei Rachmaninoff"],
  
  ["Music is mathematics, the mathematics of listening, mathematics for the ears.",
"Karlheinz Stockhausen"],
  
  ["Art is art when it is appreciated by someone.",
"Isao Tomita"],

];
var number = 0;

function random() {
  number = Math.floor((Math.random() * array.length));
}

function print() {
  random.call();
  return "<p><strong>" + array[number][0] + "</strong>" + "<br><br>" + "-" + array[number][1] +'</p>';

}