# useState
---
useState를 사용하기 위해서는 두 줄의 코드가 추가되어야한다.
```
import {useState} from 'react';
let [a,b] = useState('보관할 자료');
```
첫번째 코드를 이용해 useState를 import한다. 이를 통해 useState를 선언 할 수 있다.

두번째 코드는 [데이터1, 데이터2]를 사용하는 array를 선언한다.

a 변수에는 state에 보관했던 데이터가 들어가있고, b 변수에는 state에 보관한 데이터를 변경할 함수가 들어있다.

### useState 사용예제

```
let [logo, setLogo] = useState('ReactBlog');
<h4> {logo} </h4>
```
이를 사용하면 ```<h4> ReactBlog </h4>```으로 렌더링 된다.
이처럼 **useState**를 이용해 {중괄호}를 사용하면 원하는 곳에 **Data-binding**이 가능하다.
