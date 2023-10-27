import React from "react";
import code from "../images/code.JPG";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const mernTechBlogs = [
    {
      title: "Getting Started with MERN Stack",
      description:
        "In this beginner-friendly guide, we'll introduce you to the MERN Stack – MongoDB, Express, React, and Node.js. You'll learn the fundamentals of each component and how they work together to create dynamic web applications. By the end of this blog, you'll have a solid grasp of the MERN Stack and be ready to start your own projects. Whether you're a newbie or looking to refresh your knowledge, this is the perfect starting point.",
      imageUrl:
        "https://graffersid.com/wp-content/uploads/2022/10/MERN-Stack-Full-Form.png",
    },
    {
      title: "Building a Simple To-Do App with MERN Stack",
      description:
        "In this comprehensive tutorial, we'll walk you through building a to-do list application using the MERN Stack. From setting up the backend with Node.js and Express to creating a MongoDB database and developing a responsive React front-end, we'll cover it all. By the end of this guide, you'll have a working to-do app and a deeper understanding of how to build full-stack web applications.",
      imageUrl:
        "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?auto=format&fit=crop&q=80&w=1939&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Understanding MongoDB: A No-SQL Database",
      description:
        "In this blog, we'll delve into the world of MongoDB, the 'M' in MERN. You'll learn about No-SQL databases, the document-oriented structure of MongoDB, and how to work with collections and documents. We'll also explore practical use cases and scenarios where MongoDB shines. Whether you're new to databases or want to add MongoDB to your toolkit, this blog will provide you with essential knowledge.",
      imageUrl:
        "https://images.unsplash.com/photo-1658204238967-3a81a063d162?auto=format&fit=crop&q=80&w=2062&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Creating RESTful APIs with Express.js",
      description:
        "This in-depth guide focuses on creating RESTful APIs with Express.js, the 'E' in MERN. We'll cover everything from routing and handling HTTP requests to integrating your Express.js API with a MongoDB database. You'll gain the skills to build robust and scalable APIs for your web applications. If you're looking to master server-side development, this blog is for you.",
      imageUrl:
        "https://nordicapis.com/wp-content/uploads/Building-a-RESTful-API-Using-Node.JS-and-MongoDB.png",
    },
    {
      title: "Mastering React Components and State Management",
      description:
        "In this blog, we'll go beyond the basics of React, the 'R' in MERN. You'll dive into component creation, state management, and working with props. We'll show you how to build dynamic and interactive user interfaces with React, providing you with the tools to make your MERN projects truly come to life.",
      imageUrl:
        "https://cdn-media-1.freecodecamp.org/images/fDk0J1KHkNJKyjha9jV2Ic5VtMHtx0hX54-5",
    },
    {
      title: "Node.js Fundamentals for MERN Developers",
      description:
        "Node.js is the backbone of MERN Stack applications. In this extensive blog, we'll demystify Node.js by covering event-driven programming, server setup, asynchronous JavaScript, and more. You'll be equipped to create server-side applications using Node.js, which is crucial for full-stack development.",
      imageUrl:
        "https://graffersid.com/wp-content/uploads/2022/10/MERN-Stack-Full-Form.png",
    },
    {
      title: "User Authentication in MERN: JWT and Passport",
      description:
        "Security is paramount in web development. In this detailed guide, we'll walk you through implementing user authentication in your MERN applications using JWT (JSON Web Tokens) and Passport.js. You'll cover user registration, login, and how to protect your routes. By the end of this blog, your applications will be more secure and user-friendly.",
      imageUrl: "https://jwt.io/img/pic_logo.svg",
    },
    {
      title: "Frontend Routing with React Router",
      description:
        "Routing is essential for creating multi-page applications. In this extensive blog, we'll explore React Router, a popular library for handling frontend routing in React. You'll learn how to create dynamic navigation, page transitions, and secure your routes. By the end, you'll be able to build seamless and interactive user experiences in your MERN projects.",
      imageUrl:
        "https://graffersid.com/wp-content/uploads/2022/10/MERN-Stack-Full-Form.png",
    },
    {
      title: "Deploying Your MERN App to the Web",
      description:
        "You've built your MERN app, but how do you share it with the world? In this comprehensive guide, we'll walk you through deploying your application to popular hosting platforms like Heroku, Netlify, and Vercel. You'll learn about setting up custom domains, optimizing performance, and making your app accessible to others. Get your app live and start sharing your work with the world.",
      imageUrl:
        "https://graffersid.com/wp-content/uploads/2022/10/MERN-Stack-Full-Form.png",
    },
    {
      title: "Tips for MERN Stack Development: Best Practices",
      description:
        "Discover best practices and tips for efficient MERN Stack development. We'll explore code organization, debugging techniques, performance optimization, and project structure. By following these guidelines, you can enhance your development skills and build more effective and maintainable MERN applications.",
      imageUrl:
        "https://graffersid.com/wp-content/uploads/2022/10/MERN-Stack-Full-Form.png",
    },
    {
      title: "Scaling Your MERN App: Performance Optimization",
      description:
        "In this comprehensive blog, we'll explore strategies for scaling your MERN application. You'll learn how to optimize your code, improve database performance, and enhance the user experience. We'll cover topics like caching, lazy loading, and reducing load times. By the end of this guide, you'll be equipped to build high-performance MERN applications that can handle heavy traffic.",
      imageUrl:
        "https://graffersid.com/wp-content/uploads/2022/10/MERN-Stack-Full-Form.png",
    },
    {
      title: "Real-time Web Applications with MERN and Socket.io",
      description:
        "Discover the exciting world of real-time web applications in this blog. We'll show you how to integrate Socket.io with your MERN Stack projects, enabling instant updates and real-time communication between clients and the server. Whether you're interested in building chat apps, collaborative tools, or live updates in your applications, this guide will get you started on the right path.",
      imageUrl:
        "https://graffersid.com/wp-content/uploads/2022/10/MERN-Stack-Full-Form.png",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 px-2 md:px-5">
      {mernTechBlogs?.map((blog, index) => (
        <div key={index} className="card bg-base-100 shadow-xl rounded-none">
          <img className="w-full h-64" src={blog?.imageUrl} alt="" />
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center mb-5">
              {blog?.title}
            </h2>
            <div>
              <p>{blog?.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
