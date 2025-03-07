import { useState } from 'react';

const imageStyle = { width: '30px', height: '30px', marginTop: '5px', paddingTop: '0px', marginLeft: 5 };
const holder = { width: '1600px', paddingTop: 3, height: '100vh', backgroundColor: 'gray' };

const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20, marginLeft:600};

function PostComponent({ name, subtitle, time, image, description }) {
  return (
    <div style={style}>
      <div style={{ display: "flex" }}>
        <img src={image} style={{ width: 30, height: 30, borderRadius: 20 }} />
        < div style={{ fontSize: 10, marginLeft: 10 }}>
          <b>{name}</b>
          <div>{subtitle}</div>
          {time && (
            <div style={{ display: 'flex' }}>
              <div>{time}</div>
              <img src={"https://media.istockphoto.com/id/931336618/vector/clock-vector-icon-isolated.jpg?s=612x612&w=0&k=20&c=I8EBJl8i6olqcrhAtKko74ydFEVbfCQ6s5Pbsx6vfas="} style={{ width: 12, height: 12 }} />
            </div>
          )}
        </div>
      </div>
      <div style={{ fontSize: 12 }}>
        {description}
      </div>
    </div>
  );
}

function App() {
  const [posts, setPosts] = useState([]);

  const postsList = posts.map((post, index)  => (
    <PostComponent 
      key={index}
      name={post.name}
      subtitle={post.subtitle}
      time={post.time}
      image={post.image}
      description={post.description}
    />
  ));

  function addPost() {
    setPosts([
      ...posts,
      {
        name: "Harkirat",
        subtitle: "10000 followers", // Fixed typo
        time: "2m ago",
        image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
        description: "Want to know how to win big? Come and get a $6000 bounty"
      }
    ]);
  }

  return (
    <div style={holder}>
      <button onClick={addPost}>Add Post</button>
      {postsList}
    </div>
  );
}

export default App;
