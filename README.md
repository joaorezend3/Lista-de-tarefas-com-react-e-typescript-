# Lista de Tarefas

<img href="https://github.com/joaorezend3/Lista-de-tarefas-com-react-e-typescript-/blob/master/src/imgs/lista_img.png" alt="IMG PROJECT"> 

### Para iniciar o projeto em sua maquina e necessário seguintes comandos:
### `npm install` 
### logo em seguida use o seguinte comando para inicializar o todo em seu browser:

`npm start`   

 ## Sobre o Projeto:
>Este projeto é uma aplicação web simples de lista de tarefas, usando React. Ele permite que os usuários adicionem novas tarefas digitando-as em um campo de texto e pressionando Enter. As tarefas são exibidas em uma lista com o nome e o status de conclusão (feito ou não). O estado da lista é gerenciado usando o gancho "useState" do React.

 ## Adição de novas tarefas:
> O componente Addtarefa permite que os usuários adicionem novas tarefas digitando-as em um campo de texto e pressionando Enter. Ele usa o gancho "useState" do React para gerenciar o estado do campo de texto e chama uma função "onEnter" quando o usuário pressiona Enter.

```typescript
export const Addtarefa = ({ onEnter }: Props) => {
    const [inputText, setInputex] = useState('');
    const hendleKeyUp = (e: KeyboardEvent) => {
        if (e.key === 'Enter' && inputText !== ' ') {
            onEnter(inputText);
            setInputex('');
        }
    }
    return (
        <C.container>
                <input type="text"
                    placeholder="Adicionar Tarefa"
                    value={inputText}
                    onChange={e => setInputex(e.target.value)}
                    onKeyUp={hendleKeyUp} />
        </C.container>
    );
}
````

## Exibição de tarefas:
> O componente ListItem é responsável por exibir cada tarefa na lista. Ele usa o gancho "useState" do React para gerenciar o status de conclusão (feito ou não) de cada tarefa e tem um checkbox que permite que o usuário altere o status.
```typescript
export const ListItem = ({ item }: props) => {
    const [isChecked, setCheckd] = useState(item.done);
    return (
        <C.container done={isChecked}>
            <input type="checkbox" checked={isChecked} onChange={e => setCheckd(e.target.checked)} />
            <label>{item.id} - {item.name}</label>
        </C.container>
    );
}
```
## Gerenciamento de lista:
 >O componente App é o componente principal da aplicação e gerencia o estado da lista de tarefas usando o gancho "useState" do React. Ele chama a função "hendleAddTask" quando o usuário adiciona uma nova tarefa e renderiza cada tarefa usando o componente ListItem.

```typescript
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
```

<p align="center">
<a href="https://www.linkedin.com/in/jo%C3%A3o-rezende-b3aa4821b/" ><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
</svg></a><p>