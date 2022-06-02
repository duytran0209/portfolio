import React from "react";
import blogs from "../data/blog";
import styled from "styled-components";
import Title from "../Components/Title";
import { MainLayout, InnerLayout } from "../styles/Layouts";

const BlogsPage = () => {
  return (
    <MainLayout>
      <BlogsStyled>
        <Title title={"Blogs"} span={"Blogs"}></Title>
        <InnerLayout>
          <ul className={"blog"}>
            {blogs.map((blog, index) => (
              <li key={blog.id} className={"blog-item"}>
                <div className="image">
                  <img src={blog.image} />
                </div>

                <div className="title">
                  <a href={blog.link}> {blog.title}</a>
                </div>
              </li>
            ))}
          </ul>
        </InnerLayout>
      </BlogsStyled>
    </MainLayout>
  );
};

const BlogsStyled = styled.div`
  padding-left: 17.4rem;
  .blog {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem 2rem;
    .blog-item {
      padding: 1rem;
      background-color: var(--background-dark-grey);
    }

    .image {
      width: 100%;
      overflow: hidden;

      img {
        width: 100%;
        height: 90%;
        object-fit: cover;
        transition: all 0.4s ease-in-out;
        &:hover {
          cursor: pointer;
          transform: rotate(3deg) scale(1.1);
        }
      }
    }

    .title {
      a {
        display: block;
        padding-top: 1rem;
        font-size: 1.4rem;
        color: var(--color-white);
        transition: all 0.4s linear;
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
`;

export default BlogsPage;
