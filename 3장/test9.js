var Users = [{name: '강병섭', age: 26}, {name:'김윤수', age:25}, {name:'신준희', age :24}];

console.log('배열 요소의 수 : %d', Users.length);
for (var i=0; i<Users.length; i++){
  console.log('배열 요소 #' + i + ' : %s',Users[i].name);
}

console.log('\nforeach 구문 사용하기');
Users.forEach(function(item,index){
  console.log('배열 요소 #' + index + ' : %s', item.name);
})
