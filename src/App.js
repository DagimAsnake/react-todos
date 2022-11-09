import Todo from './component/Todo';

function App() {
  return (
    <div className='container'>
      <h1 className='mb-5'>My Todos</h1>
      <Todo title={'learn react'} />
      <Todo title={'Database'} />
      <Todo title={'nodeJs'} />
    </div>
  );
}

export default App;
