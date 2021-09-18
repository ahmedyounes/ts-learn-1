import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// * interfaces in TS used to define structure of an object
// * we are creating this interface to tell TS about
// * what type of information we expect to recieve back from this api
interface Todo {
  id: number;
  title: string;
  finished: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data;
  const ID = todo.ID;
  const title = todo.Title;
  const finished = todo.finished;

  console.log(`
    The todo ID is ${ID}
    has title of ${title}
    Is it finished ${finished}
  `);
});
