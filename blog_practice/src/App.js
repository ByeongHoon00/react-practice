import logo from './logo.svg';
import './App.css';

function App() {
  let post = '강남 우동 맛집';

  return (
    <div className="App">
      <div className="black-nav">
        {' '}
        {/* jsx에서 class를 넣을 땐 className을 사용 */}
        {/* jsx에서 style을 넣을 땐 style={{이름 : '값'}}을 사용 */}
        <h4 style={{ color: 'red', fontSize: '16px' }}> 블로그입니다 </h4>
      </div>
      <h4>
        {post}
        {/* jsx에서 변수를 넣을 땐 중괄호를 사용*/}
      </h4>
    </div>
  );
}

export default App;
