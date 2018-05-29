var result = 0;

console.time('duration time');
for (var i = 1; i<= 1000; i++){
  result += i;
}

console.timeEnd('duration time');
console.log('1부터 1000까지 더한 결과물 : %d', result);

console.log('현재 실행한 파일의 이름 : %s', __filename);
console.log('현재 실핼한 파일의 경로 : %s', __dirname);


var person =  {name: '강병섭', age:26};
console.dir(person);
