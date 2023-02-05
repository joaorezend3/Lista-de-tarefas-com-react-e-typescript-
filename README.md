# Todo List com React e TypeScript

![Screenshot](https://github.com/joaorezend3/Lista-de-tarefas-com-react-e-typescript-/blob/master/src/imgs/lista_img.png)

## Sobre o Projeto:

Este é um projeto simples que permite ao usuário gerenciar sua lista de tarefas. O usuário pode adicionar uma nova tarefa e marcá-la como concluída. Todas as tarefas são salvas no local storage do browser.

## Características

- Adição de novas tarefas
- Marcação de tarefas como concluídas
- Armazenamento de tarefas no local storage do browser

## Tecnologias Utilizadas

- React
- TypeScript
- styled-components
## Instalação

`git clone https://github.com/joaorezend3/Lista-de-tarefas-com-react-e-typescript-.git`

`cd Lista-de-tarefas-com-react-e-typescript`

`npm install`

`npm start`

# Arquivos Relevantes

O componente principal da aplicação é o arquivo `App.tsx.` Este componente gerencia o estado da lista de tarefas e exibe os componentes necessários para adicionar e exibir as tarefas.

```typescript
const [list, setList] = useState<item[]>(
  JSON.parse(localStorage.getItem("list") || "[]")
);
```

Este trecho usa o hook `useState` do React para gerenciar o estado da lista de tarefas. O valor inicial da lista é obtido do local storage do browser ou, se não houver nenhum valor salvo, é definido como um array vazio `[]`.

```typescript
const hendleAddTask = (taskName: string) => {
  let newList = [...list];
  newList.push({
    id: list.length + 1,
    name: taskName,
    done: false,
  });
  setList(newList);
  localStorage.setItem("list", JSON.stringify(newList));
};
```

Este é um manipulador de evento que é acionado quando o usuário adiciona uma nova tarefa. Ele adiciona uma nova tarefa à lista existente e atualiza o estado da lista com `setList.` Além disso, ele salva a lista atualizada no local storage.

```typescript
<Addtarefa onEnter={hendleAddTask} />;
{
  list.map((item, index) => <ListItem key={index} item={item} />);
}
```

Aqui, o componente Addtarefa é renderizado e o manipulador de evento hendleAddTask é passado como uma propriedade. Além disso, a lista de tarefas é mapeada e cada item é renderizado como um componente ListItem.

<p align="center">
<a href="https://www.linkedin.com/in/jo%C3%A3o-rezende-b3aa4821b/" ><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
</svg></a><p>
