import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/gustavomarques00.png",
      name: "Gustavo Marques",
      role: "CTO Microsoft",
    },
    content: [
      { type: "paragraph", content: "conteúdo Top" },
      { type: "paragraph", content: "conteúdo Top 2" },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-07-04 20:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/gustavomarques00.png",
      name: "João Alves",
      role: "Educator Microsoft",
    },
    content: [
      { type: "paragraph", content: "conteúdo Top" },
      { type: "paragraph", content: "conteúdo Top 2" },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-04-02 16:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
