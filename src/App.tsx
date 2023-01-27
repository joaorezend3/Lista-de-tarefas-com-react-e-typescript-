import { useState } from 'react';
import * as C from './App.style';
import { item } from './types/item';
import { Addtarefa } from './components/addtarefa';
import { ListItem } from './components/Listitem';
import { Listsocial } from './components/social';
const App = () => {
  const [list, setList] = useState<item[]>([
  ]);

  const hendleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }
  return (
    <C.container>
      <C.area>
        <C.header>Lista de tarefas</C.header>
        <Addtarefa onEnter={hendleAddTask} />
        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </C.area>
      <Listsocial />
    </C.container>

  )
};
export default App;