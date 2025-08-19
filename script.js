// Commit 1 – preserve main handler
document.getElementById('apply-btn').addEventListener('click',function(){
  var c=document.getElementById('color-input').value;
  document.getElementById('box').style.backgroundColor=c;
});

// Commit 2 – helper + generator
function setBox(c){document.getElementById('box').style.backgroundColor=c;}
function randomHex(){return'#'+Math.floor(Math.random()*0xffffff).toString(16).padStart(6,'0');}