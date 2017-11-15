function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
}


function increaseRankBy(n){
  var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++){
    var foo = parseInt(lis[i].innerHTML);
    lis[i].innerHTML = foo + n;
  }
}

function deepestChild(){
  var divs = document.getElementById('grand-node').querySelectorAll('div');
  var blank = divs[divs.length-1];
  var runner = blank.innerHTML;
  return blank;

}
