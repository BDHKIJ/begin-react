import { useRef, useState } from 'react';
import './App.css';
import UserList from './components/UserList';
//함수형 컴포넌트
function App() {
  const [statenum,setStateNum] = useState(1);
  const refnum = useRef(1);
  const nameInput = useRef();
  let varnum = 1;
  const addstateNum = () => {
    setStateNum(statenum+1);
    console.log(statenum);
  }
  const addRefNum = () => {
    refnum.current = refnum.current + 1 ;
    console.log(refnum.current);
  }
  const addVarNum = () => {
    varnum = varnum + 1;
    console.log(varnum);
  }
  const inputFocus = () => {
    nameInput.current.focus();
  }
  return (
    <div className="App">
      <UserList />
      <div>
        <p>
          <input name='name' ref={nameInput} />
          <input name='nickname' />
          <button onClick={inputFocus}>클릭</button>
        </p>
        <p>state : {statenum}</p>
        <p>ref : {refnum.current}</p>
        <p>var : {varnum}</p>
        <button onClick={addstateNum}>state+1</button>
        <button onClick={addRefNum}>ref+1</button>
        <button onClick={addVarNum}>var+1</button>
      </div>
    </div>
  );
}

export default App;
