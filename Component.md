# Component
---
우리는 지금까지
```javascript
<div className="modal">
  <h4>제목</h4>
  <p>날짜</p>
  <p>상세내용</p>
</div>
```
와 같은 코드를 여러줄 작성해서 사용해왔다.

**Component**를 이용하면 이처럼 긴 코드를 간단하게 줄여 사용할 수 있다.

### Component 사용예제
```javascript
function App(){
	return(
      <div>
      	<Modal></Modal>
      </div>
    )}
function Modal() {
  return (
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  );
}
```
이처럼 우리는 **Component**를 이용해 ```<Modal></Modal>```과 같은 간단한 코드로 줄일 수 있다.

### Component 이용시 주의사항
```
1. Component 작명할때 첫글자는 보통 영어대문자로 시작한다.
2. return() 내부는 하나의 태그로 시작해 하나의 태그로 끝나야한다.
3. Component의 위치는 다른 function 바깥에 만든다.
```

### Component를 이용하면 좋은 경우
```
1. 반복적인 HTML을 축약하는 경우
2. 내용의 변경이 잦은 HTML
3. 다른 페이지를 만드는 경우 해당 페이지의 HTML 내용들을 하나의 컴포넌트로 만들기도 함
```

