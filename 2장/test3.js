//console.dir(process.env);

//console.log('JAVA_HOME 환경 변수의 값:'+ process.env[JAVA_HOME]);

//process.env 객체에 들어있는 속성 만으로는 JAVA_HOME과 같은 시스템 환경변수에 접근할수가 없다
//그래서 오류가 발생하므로 모듈을 이해후 들아옴


//해결법

var nconf = require('nconf');
nconf.env();

console.log('JAVA_HOME 환경 변수의 값: %s', nconf.get('JAVA_HOME'));
