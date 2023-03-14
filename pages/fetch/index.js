function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li style={{color:"white"}}>{post.name}</li>
      ))}
    </ul>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const posts = await res.json();

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.log("Codinganmu Error Mas");
  }
}

export default Blog
