var t = "7523.79830" // (DDMM.MMMMM)
var g = "03412.9873" //(DDDMM.MMMMM)

function lat(t){
  return (Number(t.slice(0,2)) + (Number(t.slice(2,10))/60))
}

function lng(g) {
  return (Number(g.slice(0,3)) + (Number(g.slice(3,10))/60))
}

// console.log(lat(t)) 
// console.log(lng(g))  

module.exports = { lat, lng };