import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <div className="question-answer-component">
        <h1>Questions and Answers</h1>
        <div className="question-answer">
          <h3 className="mb-4">
            1. What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h3>
          <p>
            Access Token is a Short-lived credential for authorization. Carries user
            identity and permissions. Sent with each request to access protected
            resources.On the other hand Refresh Token is Long-lived credential to obtain a new
            access token. Stored securely on the client-side. Used to request a
            new access token when the current one expires.  Storage on
            Client-Side, Access tokens are stored in memory or short-lived
            storage. Refresh tokens are securely stored in HTTP-only cookies or
            secure storage mechanisms like local storage.
          </p>

          <h3 className="mb-4">2. Compare SQL and NoSQL databases?</h3>
          <p>
            SQL databases: Structured, tabular data model with predefined
            schemas. Use SQL for querying. Fixed schema. Scale vertically and
            horizontally.
            <br />
            NoSQL databases: Flexible data models (key-value, document,
            columnar, graph). Various query languages. Dynamic or schema-less.
            Scale horizontally. Used for unstructured/semi-structured data, high
            scalability, and rapid development.
          </p>

          <h3 className="mb-4">3. What is express js? What is Nest JS ?</h3>

          <p>
            Express.js is a popular web application framework for Node.js. It
            provides a minimalistic, flexible, and unopinionated approach to
            building web servers and APIs. It is Lightweight web framework for
            Node.js. Handles HTTP requests, routes, middleware. Simple and
            flexible. <br />
            Nest.js is a Progressive Node.js framework. Combines Angular and
            Express.js. Structured, scalable, and opinionated. Supports routing,
            validation, authentication, and more. Ideal for enterprise
            applications.
          </p>

          <h3 className="mb-4">4. What is MongoDB aggregate and how does it work ?</h3>
          <p>
            MongoDB aggregate is a feature that lets you perform advanced data
            analysis and transformations on your collections. It works by
            defining a pipeline of stages, where each stage applies a specific
            operation to the data. The pipeline processes documents in a
            sequential manner, transforming them at each stage until the desired
            result is obtained. It's a powerful tool for querying, aggregating,
            and manipulating data in MongoDB.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
