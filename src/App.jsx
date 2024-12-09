import React from "react";
import AddNewBlog from "./blog-app/add-new-blog";
import BlogList from "./blog-app/blog-list";
// import CounterButton from "./counter-example/counter-button";
// import CounterValue from "./counter-example/counter-value";

function App() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Blog List App</h1>
      </header>
      <main style={styles.main}>
        <section style={styles.addBlogSection}>
          <h2 style={styles.sectionTitle}>Add a New Blog</h2>
          <AddNewBlog />
        </section>
        <section style={styles.blogListSection}>
          <h2 style={styles.sectionTitle}>All Blogs</h2>
          <BlogList />
        </section>
      </main>
      <footer style={styles.footer}>
        <p>&copy; 2024 Blog List App. All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    color: "#333",
    backgroundColor: "#f9f9f9",
    padding: "20px",
  },
  header: {
    textAlign: "center",
    padding: "10px",
    backgroundColor: "#6200ea",
    color: "#fff",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "2.5rem",
    margin: "0",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
  addBlogSection: {
    width: "100%",
    maxWidth: "600px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  blogListSection: {
    width: "100%",
    maxWidth: "800px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  sectionTitle: {
    fontSize: "1.5rem",
    marginBottom: "10px",
    borderBottom: "2px solid #6200ea",
    paddingBottom: "5px",
    color: "#6200ea",
  },
  footer: {
    marginTop: "20px",
    textAlign: "center",
    color: "#555",
    fontSize: "0.9rem",
  },
};

export default App;
