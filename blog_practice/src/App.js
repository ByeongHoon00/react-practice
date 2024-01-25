import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = '강남 우동 맛집';
  // 일반 변수는 변경되면 html에 자동으로 반영되지 않기 때문에 state사용
  // state 만드는 법 : 1. import { useState } 2. useState(보관할 자료) 3. let[작명, 작명]
  let [a, b] = useState('남자 코트 추천');
  let [logo, setLogo] = useState('ReactBlog');
  // a는 state에 보관했던 자료가 나옴, b는 state 변경을 도와주는 함수

  // return()안에는 병렬로 태그 2개 이상 기입금지
  return (
    <div className="App">
      <div className="black-nav">
        {' '}
        {/* jsx에서 class를 넣을 땐 className을 사용 */}
        {/* jsx에서 style을 넣을 땐 style={{이름 : '값'}}을 사용 */}
        <h4 style={{ color: 'red', fontSize: '16px' }}> {logo} </h4>
      </div>
      <div className="list">
        <h4>{a}</h4>
        <p>2월 17일 발행</p>
      </div>
      <h4>
        {post}
        {/* jsx에서 변수를 넣을 땐 중괄호를 사용*/}
      </h4>
    </div>
  );
}

export default App;
