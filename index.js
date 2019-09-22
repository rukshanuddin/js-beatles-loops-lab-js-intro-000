// add solution here
function theBeatlesPlay(musicians, instruments){
  const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
  const theyPlay = []
  for (var i = 0; i <4; i++){
    theyPlay.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return theyPlay
}
