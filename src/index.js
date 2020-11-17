import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import reducer from './redux/reducer';
import reportWebVitals from './reportWebVitals';

// 1. Buat store
// 2. Buat reducer
// 3. Buat action/dispatch --> biasanya pakai mapDispatchToProps
const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* // DISPATCH SECARA TIDAK LANGSUNG */}
      <Counter />
      {/* // DISPATCH SECARA LANGSUNG */}
      <Counter2 />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
