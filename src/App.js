import React from 'react'; //Reactを読み込んでいる
//画面遷移で使用する{ BrowserRouter, Route, Switch }を'react-router-dom'から読み込んでいる
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import page1 from './page1'; //作成したpage1.jsを読み込んでいる


class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={page1} />　//URLのパスが'/'のみの時にpage1を表示する
        </Switch>
      </BrowserRouter>
    );
  };
}

export default App;