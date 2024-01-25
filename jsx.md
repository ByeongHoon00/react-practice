# JSX

### HTML-IN-JS
원래 자바스크립트에서는 HTML과 비슷해 보이는 문법이 존재하지 않았지만, 우리가 리액트에서 HTML과 비슷한 코딩을 할 수 있는 것은 JSX 덕분입니다.

### JSX는 하나의 태그 안에 감싸져 있는 형태여야 한다.
![](https://github.com/ByeongHoon00/react-practice/blob/main/jsx_error_1.png)
사진과 같이 에러가 발생한 이유는, JSX에서 하나의 컴포넌트 안에서 한개의 루트 태그만 렌더링 하기 때문입니다. 여러 개의 독립적인 태그가 있는 형태로 작성하게 되면 에러가 발생합니다.

#### class => className

```markup
<!-- 일반 HTML 일 때의 작성 -->
<div class="not-react">
    안녕하세요 저는 HTML 입니다
</div>

<!-- 리액트일 때의 JSX 작성 -->
<div className="not-react">
    안녕하세요 저는 JSX 입니다
</div>
```

### JSX안에서 변수 사용하기
JSX에서 변수를 사용하기 위해서는 {}를 이용합니다.
중괄호 안에는 자바스크립트 문법을 포함한 여러 변수의 사용이 가능합니다.

### JSX안에서의 스타일링
`<div style="color: red">hello</div>`이렇게만 코딩 해도 HTML에서 저 태그의 색은 빨간색으로 보입니다. 하지만 JSX에서는 스타일링 하는 방법을 바꾸어야 합니다.
`<div style={{color : 'red'}}>hello</div>`와 같이 중괄호에 객체 형태로 넣어 스타일링합니다.


