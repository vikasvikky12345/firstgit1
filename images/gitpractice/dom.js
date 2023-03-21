 // traversing dom
 //var itemlist = document.querySelector("#items");
 //console.log(itemlist.parentNode);
 //itemlist.parentNode.style.backgroundColor ='#f4f4f4';
 



 var itemlist = document.querySelector("#items");
 console.log(itemlist.parentElement);
 itemlist.parentElement.style.backgroundColor ='#f4f4f4';

 itemlist.children[2].style.backgroundColor ='yellow';
 console.log(itemlist.children);
 //firstelementchild
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent = 'hello1';
//lastelemntchild
itemlist.lastElementChild.textContent = 'hello4';
//nextelementsibling
console.log(itemlist.nextElementSibling);
//prevelementsibling
console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.color ='green';


var newdiv = document.createElement('div')
newdiv.className='hello'
newdiv.id ='hello1'
newdiv.setAttribute('title','hello div')
console.log(newdiv)



 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 //var input = document.querySelector('input');
//input.value = 'hello';

//var header = document.querySelector('#main-header');
//header.style.borderBottom = 'solid 4px #fff';
//var submit = document.querySelector('input[type=submit]');
//submit.value='send';
//var item = document.querySelector('.list-group-item');
//item.style.color = 'pink';
//var lastitem = document.querySelector('.list-group-item:last-child');
//lastitem.style.color ='red';


//var titles = document.querySelectorAll('.title');
//titles[0].textContent ='vikas';
//console.log(titles);


//var list = document.querySelectorAll('.list-group-item');
//for(var i = 0; i < list.length; i++) {
  //  list[2].style.color ='green';
//}



//var odd = document.querySelectorAll('li:nth-child(odd)');
//for(var i = 0; i < odd.length; i++) {
  //  odd[i].style.backgroundColor ='f4f4f4'; 
//}
//var li = document.getElementsByTagName('li');
//for(var i = 0;i < li.length; i++){
 //   li[2].style.backgroundcolor ='green';
//}

//var lidiff = document.getElementsByClassName('list-group-diff');
//lidiff.style.backgroundColor ='#ccc';
//lidiff.style.fontWeight = 'bold';
//console.log(lidiff);
//var all = document.querySelectorAll
//var element = document.getElementsByClassName('title');
//element.innertext ='hello';
//console.log(li);
//li[1].style.fontWeight = 'bold';
//li[2].style.backgroundcolor ='green';


//var header = document.querySelector('#main-header');
//header.style.borderBottom = 'solid 4px #ccc';

//var title =document.getElementById('header-title');
//title.innerText = "hello"
//console.log(title)
//title.style.borderBottom="solid 3px black";
var item = document.getElementsByClassName('list-group-item');
console.log(item);
console.log(item[1]);
item[1].style.color = 'yellow';