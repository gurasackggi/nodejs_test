var Users = [{name: '강병섭', age: 26}, {name:'김윤수', age:25}, {name:'신준희', age :24}];
console.log('push() 호출 전 배열 요소의 수 : %d', Users.length);

Users.push({name:"김보경", age:23});
console.log('push() 호출 후 배열 요소의 수 : %d', Users.length);

Users.pop();
console.log('pop() 호출 추 배열 요소의 수 : %d', Users.length);
