import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// * interfaces in TS used to define structure of an object
// * we are creating this interface to tell TS about
// * what type of information we expect to recieve back from this api
// * open url above and check what type of information we expect
// * and create interface with it
// * now type as Todo after response data and check errors
// * TS will analyze our code and tell us what errors we may have 
// * before execution and even before compiling
// * and while we are coding THIS IS THE KEY or benifit
// * now try fix errors below then run file with ts-node index3.ts
// * then move to index4.ts
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo; // * remove as Todo and check then type it again
  const ID = todo.ID;
  const title = todo.Title;
  const finished = todo.finished;

  console.log(`
    The todo ID is ${ID}
    has title of ${title}
    Is it finished ${finished}
  `);
});
