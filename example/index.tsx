import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Popup from '../.'; // 此处存在parcel alias 见下文
import '../dist/react-easy-popup.min.css'; // 此处不存在parcel alias 写好相对路径

const App = () => {
  return (
    <div>
      <Popup />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
