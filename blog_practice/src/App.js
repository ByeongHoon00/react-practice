import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = '강남 우동 맛집';
  // 일반 변수는 변경되면 html에 자동으로 반영되지 않기 때문에 state사용
  // state 만드는 법 : 1. import { useState } 2. useState(보관할 자료) 3. let[작명, 작명]
  // let [a1, b1] = useState('남자 코트 추천');
  // let [a2, b2] = useState('남자 코트 추천');
  // let [a3, b3] = useState('남자 코트 추천');
  let [글제목, 글제목변경] = useState([
    '남자 코트 추천',
    '강남 우동 맛집',
    '독학',
  ]);
  let [logo, setLogo] = useState('ReactBlog');
  let [좋아요, 좋아요변경] = useState([0, 0, 0]);
  let [modal, modal함수] = useState(false);
  let [입력값, 입력값변경] = useState('');
  // a는 state에 보관했던 자료가 나옴, b는 state 변경을 도와주는 함수

  function 함수() {
    좋아요변경(좋아요 + 1);
  }
  //return()안에는 병렬로 태그 2개 이상 기입금지
  return (
    <div className="App">
      <div className="black-nav">
        {' '}
        {/* jsx에서 class를 넣을 땐 className을 사용 */}
        {/* jsx에서 style을 넣을 땐 style={{이름 : '값'}}을 사용 */}
        <h4 style={{ color: 'red', fontSize: '16px' }}> {logo} </h4>
      </div>
      <button
        onClick={() => {
          let copy2 = [...글제목];
          copy2.sort();
          글제목변경(copy2);
        }}
      >
        가나다순정렬
      </button>
      <button
        onClick={() => {
          //array/object는 다룰 때 원본을 보존하는게 좋음
          //글제목변경(['여자 코트 추천', '강남 우동맛집', '독학']);
          let copy = [...글제목];
          copy[0] = '여자 코트 추천';
          글제목변경(copy);
        }}
      >
        글수정
      </button>
      <Good title={글제목} 좋아요={좋아요} 좋아요변경={좋아요변경}></Good>
      {/* <div className="list">
        <h4>
          {글제목[0]} */}
      {/* onClick={함수}를 이용해 버튼을 생성 가능*/}
      {/* <span onClick={함수}>👍</span>
          {좋아요}
        </h4>
        <p>2월 17일 발행</p>
      </div> */}
      {/* <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div> */}
      {/* <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}
      <h4>
        {post}
        {/* jsx에서 변수를 넣을 땐 중괄호를 사용*/}
      </h4>
      <button
        onClick={() => {
          modal함수(!modal);
        }}
      >
        열고닫는버튼
      </button>
      {modal === true ? <Modal 글={글제목}></Modal> : null}
      <p></p>
      <input
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          let newtitlelist = [...글제목];
          newtitlelist.push(입력값);
          글제목변경(newtitlelist);
          let 좋아요추가 = [...좋아요];
          좋아요추가.push(0);
          좋아요변경(좋아요추가);
        }}
      >
        게시물추가
      </button>
    </div>
  );
}

// function App() {
//   let [title, setTitle] = useState([
//     '23 FW 패션',
//     '용산 맛집',
//     '가을 나들이 명소',
//   ]);
//   let [좋아요, 좋아요변경] = useState([0, 0, 0]);
//   let [modal, modal함수] = useState(false);

//   return title.map(function (titleName, i) {
//     return (
//       <div className="list">
//         <h4>
//           {titleName}
//           <span
//             key={i}
//             onClick={() => {
//               let copyCount = [...좋아요]; // 원본 배열을 복사해서
//               copyCount[i]++; // 복사 배열의 값 수정
//               좋아요변경(copyCount); // (값을 수정한) 복사 배열로 변경
//             }}
//           >
//             ❤️
//           </span>
//           {좋아요[i]} // map의 인덱싱을 사용해 인덱싱 각각 선택
//         </h4>
//         <p>date</p>
//       </div>
//     );
//   });
// }

// component 만드는 법 : 1. function을 만듬 2. return()안에 html을 담는다 3. <함수명></함수명>쓰기
// component를 사용하면 좋은경우 : 1. 반복적인 html을 축약할 때 2. 큰 페이지 3. 자주변경되는 것들
function Modal(props) {
  return (
    // 의미없는 <div>대신 <></>사용가능
    <>
      <div className="modal">
        <h4>{props.글[0]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
      <div></div>
    </>
  );
}

function Good(props) {
  return props.title.map(function (titleName, i) {
    return (
      <div className="list">
        <h4>
          {titleName}
          <span
            key={i}
            onClick={() => {
              let copyCount = [...props.좋아요]; // 원본 배열을 복사해서
              copyCount[i]++; // 복사 배열의 값 수정
              props.좋아요변경(copyCount); // (값을 수정한) 복사 배열로 변경
            }}
          >
            👍
          </span>
          {props.좋아요[i]}
        </h4>
        <p>date</p>
      </div>
    );
  });
}

export default App;
