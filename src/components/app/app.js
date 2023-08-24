import NewTaskForm from '../new-task-form/new-task-form';
import Task from '../task/task';
import TaskList from '../task-list/task-list';
import Footer from '../footer/footer';
import TasksFilter from '../tasks-filter/tasks-filter';
import { useState } from 'react';

import './app.css';

function App() {
  const [data, setData] = useState([]);

  const [filter, setFilter] = useState('all');

  const setCurrentFilter = (filterName) => {
    setFilter(filterName);

    if (filterName === 'active') {
      const arr = data.map((elem) => {
        if (!elem.checked) {
          return { ...elem, visible: true };
        }

        return { ...elem, visible: false };
      });
      setData(arr);
    }

    if (filterName === 'completed') {
      const arr = data.map((elem) => {
        if (elem.checked) {
          return { ...elem, visible: true };
        }
        return { ...elem, visible: false };
      });
      setData(arr);
    }

    if (filterName === 'all') {
      const arr = data.map((elem) => {
        return { ...elem, visible: true };
      });
      setData(arr);
    }
  };

  const addTask = (name) => {
    setData((arr) => {
      const last = arr[arr.length - 1];
      const obj = {
        name: name,
        id: arr.length > 0 ? last.id + 1 : 1,
        checked: false,
        visible: filter !== 'completed' ? true : false,
        createDate: new Date(),
      };

      return [...arr, obj];
    });
  };

  const toggleChecked = (id) => {
    setData(
      data.map((elem) => {
        if (elem.id === id) {
          return { ...elem, checked: !elem.checked };
        }
        return elem;
      })
    );
  };

  const deleteTask = (id) => {
    setData(data.filter((elem) => elem.id !== id));
  };

  const clearComplited = () => {
    setData(data.filter((elem) => !elem.checked));
  };

  const editTodo = (id, text) => {
    const arr = data.map((elem) => {
      if (id !== elem.id) {
        return elem;
      }

      return { ...elem, name: text };
    });
    setData(arr);
  };

  return (
    <section className="todoapp">
      <NewTaskForm addTask={addTask} />
      <section className="main">
        <TaskList>
          {data.map((item) => (
            <Task key={item.id} task={item} deleteTask={deleteTask} toggleChecked={toggleChecked} editTodo={editTodo} />
          ))}
        </TaskList>
        <Footer clearComplited={clearComplited} items={data.length}>
          <TasksFilter filter={filter} setCurrentFilter={setCurrentFilter} />
        </Footer>
      </section>
    </section>
  );
}

export default App;
