import React from "react";
import utilStyles from "../../../styles/utils.module.css";
import Link from "next/link";

const allPostsData = [
  { id: "1", title: "First Post" },
  { id: "2", title: "Second Post" },
  { id: "3", title: "Third Post" },
];

const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/blog/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
export default Blog;
