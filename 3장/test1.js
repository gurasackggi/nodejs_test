var age = 20;
console.log("나이 : %d", age);

var name = '강병섭';
console.log("이름 : %s", name);

var Person= {};

Person["age"] = 20;
Person["name"] = '강병섭';
Person.mobile = '010-9132-2167';

console.log('나이 : %d', Person.age);
console.log('이름 : %s', Person.name);
console.log('전화 : %s', Person["mobile"]);
