function App() {
  const fruits = ["Apple", "Banana", "Cherry"];
  const isLoggedIn = true;
  const imageAttributes = { src: "https://via.placeholder.com/150", alt: "Placeholder Image" };
  const isDarkMode = true;
  const styles = { backgroundColor: isDarkMode ? "black" : "white", color: isDarkMode ? "white" : "black", padding: "10px" };
  const name = "John";
  const age = 30;
  const TagName = "h1";
  const categories = [{ name: "Fruits", items: ["Apple", "Banana"] }, { name: "Veggies", items: ["Carrot", "Spinach"] }];
  const users = [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }];

  function getGreeting() {
    return <h2>Hello from a function!</h2>;
  }

  return (
    <div>
      <ul>{fruits.map((fruit, index) => <li key={index}>{fruit}</li>)}</ul>
      <div>{isLoggedIn ? <h1>Welcome</h1> : <h1>Please log in</h1>}</div>
      <img {...imageAttributes} />
      <div style={styles}>Styled Div</div>
      <p>{`${name} is ${age} years old.`}</p>
      <TagName>This is dynamic!</TagName>
      <div>
        {categories.map((cat, index) => (
          <div key={index}>
            <h3>{cat.name}</h3>
            <ul>{cat.items.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
          </div>
        ))}
      </div>
      <table border="1">
        <thead><tr><th>Name</th><th>Age</th></tr></thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {getGreeting()}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
