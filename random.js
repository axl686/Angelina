function generate() { 
var pass = ""; 
var strong = 8; 
var dic = "abcdefghijklmnopqrstuvwxyz1234567890"; 

for (var i = 0; i < strong; i++) 
{ 
pass += dic.charAt(Math.floor(Math.random() * dic.length)); 
} 
document.getElementById('random').innerHTML = pass; 
}
