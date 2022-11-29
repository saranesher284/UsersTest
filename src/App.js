import React , {useEffect, useState}from 'react'
import './App.css';
import Table from './components/table/Table';

const  App=()=> {

  const [users, setUsers] = useState();
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect (()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
         .then((json) => {
                   setUsers(json)
                   setIsLoaded(true);
                  })


  }, [])

  return (
    <div className="App">
     {isLoaded && <Table users={users}/>}
    </div>
  );
}

export default App;
