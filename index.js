// add solution here
function theBeatlesPlay(musicians, instruments){

  const theyPlay = []
  for (let i = 0, l = musicians.length; i < l; i++){
    theyPlay.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return theyPlay
}
function johnLennonFacts([]){
  const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
  ];

  while (n < 4){
    console.log(`${facts[n]}!!!`)
  }
}
function iLoveTheBeatles(num) {
	var i = 0;
  const array = []
	function incrementVariable() {
		i = i + 1;
    return i;
	}

  do {
    array.push(`I love the Beatles!`);
  } while (incrementVariable() < 15);
}
