import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() : JSX.Element {
  return (
    <div className="App">
      <h1>Students Table</h1>
      <div className="addButton"><button>Добавить студента</button></div>
      <div className='tableParent'>
        <table>
          <tr>
            <th>ФИО студента</th>
            <th>Дата рождения</th>
            <th>Средний балл</th>
          </tr>
          <tr>
            <td>Пушкин Александр Сергеевич</td>
            <td>06.06.1799</td>
            <td>3,7</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
