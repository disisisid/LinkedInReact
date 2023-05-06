import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {
  let usersUrl = "https://jsonplaceholder.typicode.com/users";

  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch(usersUrl)
    .then(res => res.json())
    .then(data => {
      data.forEach(d => {
        d.address = d.address.city;
        d.company = d.company.name;        
      })
      setUsers(data)
    });
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div className="App">
{/*      
      <ul>
        {users.map((user) => (<li>{user.name}</li>))}
      </ul>
*/}
      <table>
        <tr>
          {users[0]?.id && Object.keys(users[0]).map((k, i) =>
            (
            <th key={i}>{k.slice(0,1).toUpperCase() + k.slice(1,k.length)}</th>
            ))
          }
        </tr>
        {users.map((u, i) =>
        (<tr key={i}>
          {Object.keys(u).map(k => <td key={k} onClick={() => console.log(u)} onMouseOver={() => console.log(u)} >{u[k]}</td>)}
        </tr>))
        }
      </table>
    </div>
  );
}

export default App;
