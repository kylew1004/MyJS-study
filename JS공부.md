
# 명령어 정리
.push(element) : 배열의 뒤에 엘리먼트 추가<br>
.pop() : 배열의 뒤에서 엘리먼트 삭제하고 리턴<br>
.shift() : 배열의 앞에서 엘리먼트 삭제하고 리턴<br>
.unshift(element) : 배열의 앞에 엘리먼트 추가<br>
arr1.concat(arr2) : arr1과 arr2 붙임<br>
arr.indexOf(element) : arr에서 element가 있는 첫 위치를 검색<br>
arr.lastIndexOf(element) : arr에서 element가 있는 마지막 위치를 검색<br>
for ( var i in obj) 객체 속성 접근<br>

# 개념정리

scope : 선언한 변수가 유효한 영역
변수 shadowing 변수를 함수안에서 재정의하면 같은 이름의 바깥 변수에는 영향x
this : 어떤 객체에 바인딩됬는지 확인, 함수안에서는 window객체에 바인딩

CSS나 Javascript 코드를 삽입하기 위해서 존재하는 태그
div 태그는 화면 전체를 사용하기 때문에 줄바꿈이 되고, span은 줄바꿈이 되지 않습니다.

객체추가할 때 파이썬처럼 객체추가할 때처럼 get 안쓰고 바로 obj.newName = ' ' , 이나 obj[newName] = ' ' 으로 추가가 가능하다.

constructor = 생성자 : 함수 앞에 new를 붙이면 생성자가 된다.
prototype은 생성자 함수 내부의 것을 수정할 때 한번에 처리하게 해주는 것 입니다.

prototype을 사용하지 않고 생성자 함수 내부에 매소드가 있다면 객체를 실행할 때 마다 함수를 호출해야 합니다.
하지만 prototype을 사용하면 여러개의 객체가 한 가지의 함수를 공유하므로서 한번만 호출하면 됩니다.

자바스크립트 상속 extends 가능
자식인자에 새로운 인자를 추가하고 싶다면 super함수를 사용할 수 있다.
1. 부모 클래스의 생성자 호출    => super()
2. 부모 클래스                  => super.메소드()

class가 상속을 받는 전통적인 방법과 달리 자바스크립트에서는 객체가 직접 
다른 객체를 상속 받을 수 있고, 얼마든지 상속 관계를 바꿀 수 있습니다.

만약 super object로부터 상속을 받고 있는 sub object가 다른 객체로부터 상속을 받고 싶다면 링크만 바꿔주면 됩니다.
이러한 링크를 prototype link라고 합니다.  그리고 prototype link가 가리키는 객체를 prototype object라고도 합니다.
__proto__라는 prototype link를 통해서 객체를 상속 받을 수 있습니다. 

```
var superObj = {superVal:'super'}
var subObj = {subVal:'sub'}
subObj.__proto__ = superObj;

var superObj = {superVal:'super'} 
var subObj = Object.create(superObj);
subObj.subVal = 'sub';
```

위 코드처럼 Object.create를 사용해서 객체를 상속하는 새로운 객체를 만들 수 있습니다. Object.create의 인자로 부모로 지정할 객체를 넣어 줍니다. 

번외: debugger 키워드로 자바스크립트를 일시 중지 할 수 있습니다.

번외: 자바스크립트의 모든 함수는 call이라는 메소드를 가집니다.  사실 자바스크립트에서는 함수도 객체이기 때문입니다 ..! 
call 메소드의 인자로 객체를 지정하게 되면 해당 함수의 this는 인자로 받은 객체가 됩니다. 
call은 여러 인자를 가질 수 있습니다.  첫번째 인자는 this로 지정할 객체가 오고 그 뒤로는 함수의 인자로 들어갈 값이 들어가게 됩니다. 

1. 
```
var kim = {name:'kim',first:10,second:20}
var lee = {name:'lee',first:10,second:10}
lee.__proto__ = kim

function sum(){ 
    return this.first + this.second;
}

//sum();
console.log("sum.call(kim)",sum.call(kim)); //sum.call(kim) 30
console.log("sum.call(lee)",sum.call(lee)); //sum.call(lee) 20 
```
2.
```
var kim = {name:'kim',first:10,second:20}
var lee = {name:'lee',first:10,second:10}
lee.__proto__ = kim

function sum(prefix){ 
    return prefix+ (this.first + this.second);
}

//sum();
console.log("sum.call(kim)",sum.call(kim,'=> ')); //sum.call(kim) => 30
console.log("sum.call(lee)",sum.call(lee,': ')); //sum.call(lee) : 20
```
bind는 호출한 함수를 변경하는 것이 아니라 인자로 받은 조건을 만족하는 새로운 함수를 리턴해줍니다.

3. 
```
var kim = {name:'kim',first:10,second:20}
var lee = {name:'lee',first:10,second:10}
lee.__proto__ = kim

function sum(prefix){ 
    return prefix+ (this.first + this.second);
}

//sum();
console.log("sum.call(kim)",sum.call(kim,'=> '));
console.log("sum.call(lee)",sum.call(lee,': '));
```

