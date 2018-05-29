var Users = [{name: '강병섭', age: 26}, {name:'김윤수', age:25}];

var add = function(a,b){
  return a + b;
};

Users.push(add);

console.log('배열 요소의 수: %d',Users.length);
console.log('세 번째 요소로 추가된 함수 실행: %d', Users[2](10,10));
