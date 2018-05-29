var Users = [{name: '강병섭', age: 26}, {name:'김윤수', age:25}, {name:'신준희', age :24}];
console.log('unshift() 호출 전 배열 요소의 수 : %d', Users.length);

Users.unshift({name: '김보경', age: 23});
console.log('unshift() 호출 후 배열 요소의 수 : %d', Users.length);

Users.shift();
console.log('shift() 호출 후 배열 요소의 수 :%d', Users.length);

delete Users[1];
console.log('delete 키워드로 배열 요소 삭제 후');
console.dir(Users);
