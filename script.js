// Commit 1 – preserve main handler
document.getElementById('apply-btn').addEventListener('click',function(){
  var c=document.getElementById('color-input').value;
  document.getElementById('box').style.backgroundColor=c;
});
