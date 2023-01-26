import { useState } from 'react';
import * as C from './App.style'
import { item } from './types/item'
import { ListItem } from './components/Listitem'
const App = () => {
  const [list, setList] = useState<item[]>([
    { id: 1, name: 'Estudar', done: false },
    { id: 2, name: 'Ter foco', done: true },
    { id: 2, name: 'Ter foco em dobro', done: true }
  ]);
  return (
    <C.container>
      <C.area>
        <C.header>Lista de tarefas</C.header>
        {list.map((item, index) => (
          <ListItem key={index} item={item}/>
        ))}
      </C.area>
    </C.container>
  )
};
export default App;