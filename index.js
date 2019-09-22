// add solution here
function theBeatlesPlay(musicians, instruments){

  const theyPlay = []
  for (let i = 0, l = musicians.length; i < l; i++){
    theyPlay.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return theyPlay
}
function johnLennonFacts(facts){
  const factsExclaim = [];
 let n = 0
  while (n < facts.length){
    factsExclaim.push(`${facts[n]}!!!`)
    n++
  }
  return factsExclaim
}
function iLoveTheBeatles(num) {
  const array = []
  let i = num
	function incrementVariable() {
		i = i + 1;
    return i;
	}

  do {
    array.push(`I love the Beatles!`);
  } while (incrementVariable() < 15);
}
