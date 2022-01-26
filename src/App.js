import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

const fiveFirstContacts = contacts.slice(0, 5);

function App() {
  const [celebrities, setCelebrities] = useState(fiveFirstContacts);

  const addRandomContacts = () => {
    let randomCelebrity =
      contacts[Math.floor(Math.random() * (contacts.length - 5) + 5)];
    setCelebrities([...celebrities, randomCelebrity]);
  };

  const sortCelebritiesByName = () => {
    const copy = [...celebrities];
    copy.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setCelebrities(copy);
  };

  const sortCelebritiesByPopularity = () => {
    const copy = [...celebrities];
    copy.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setCelebrities(copy);
  };

  const handleDelete = (id) => {
    console.log(id);
    const copy = celebrities.filter((celebrity) => celebrity.id !== id);
    console.log(copy);
    setCelebrities(copy);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>IronContacts</h1>
        <button onClick={addRandomContacts}>Add Random Contact</button>
        <button onClick={() => sortCelebritiesByPopularity()}>
          Sort by popularity
        </button>
        <button onClick={sortCelebritiesByName}>Sort by name</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won an Oscar</th>
              <th>Won an Emmy</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {celebrities.map((celebrity) => (
              <tr key={celebrity.id}>
                <td>
                  <img src={celebrity.pictureUrl} alt="" width={200} />
                </td>
                <td>{celebrity.name}</td>
                <td>{celebrity.popularity.toFixed(2)}</td>
                {celebrity.wonOscar ? <td>🏆</td> : <td></td>}
                {celebrity.wonEmmy ? <td>🏆</td> : <td></td>}
                <td>
                  <button onClick={() => handleDelete(celebrity.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
