import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  //* 2- then use helper here
  //* 5- we mixed up order of arguments and we got errors
  //* after we run code so we did not use TS correctly now move to index5.ts
  logTodo(id, completed, title);
  //* 3- now run ts-node index4.ts an notice errors
});

// * 1- lets create helper function for above api
//* 4- notice order of arguments 
const logTodo = (id, title, completed) => {
  console.log(`
    The todo ID is ${id}
    has title of ${title}
    Is it compoleted ${completed}
  `);
};
