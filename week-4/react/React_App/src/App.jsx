import { useEffect, useState } from 'react';

function App() {
  const [currentTab, setCurrentTab] = useState(1);
  const [currentData, setCurrentData] = useState({});
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Set loading to true when starting to fetch
    setLoading(true);

    // Fetch data when currentTab changes
    fetch('https://jsonplaceholder.typicode.com/todos/' + currentTab)
      .then(async (res) => {
        const json = await res.json();
        setCurrentData(json);
      })
      .finally(() => {
        // Set loading to false once the data is fetched
        setLoading(false);
      });
  }, [currentTab]);

  return (
    <div style={{ marginTop: -390 , marginLeft: 400}}>
      <center>
        <button onClick={() => setCurrentTab(1)} style={{ color: currentTab === 1 ? 'red' : 'black' }}>todo1</button>
        <button onClick={() => setCurrentTab(2)} style={{ color: currentTab === 2 ? 'red' : 'black' }}>todo2</button>
        <button onClick={() => setCurrentTab(3)} style={{ color: currentTab === 3 ? 'red' : 'black' }}>todo3</button>
        <button onClick={() => setCurrentTab(4)} style={{ color: currentTab === 4 ? 'red' : 'black' }}>todo4</button>
      </center>

      {/* Render current data */}
      <div>
        <h2>Todo {currentTab} Details:</h2>
        <div>{loading ? "loading..." : currentData.title}</div>
      </div>
    </div>
  );
}

export default App;
