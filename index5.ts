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
  logTodo(id, completed, title);
});

//* 1- we need to add type annotations to helper arguments
//* add it for completed then check error above then fix order of args
//* then run file
const logTodo = (id: number, title: string, completed) => {
  console.log(`
    The todo ID is ${id}
    has title of ${title}
    Is it compoleted ${completed}
  `);
};
