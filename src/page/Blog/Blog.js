import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <h2 className="text-center mt-3 mb-3 blog-heading">Welcome to Blog</h2>
      <div className="jumbotron container">
        <div className="row">
          {/* first question */}
          <div className="col-lg-12">
            <div className="p-5 mb-4 bg-jumbotron rounded-3">
              <div className="container-fluid py-5 shadow">
                <h1 className="display-5 fw-bold">what is cors?</h1>
                <p className="col-md-8 fs-4">
                  CORS stands for Cross-Origin Resource Sharing. It allows us to
                  relax the security applied to an API. This is done by
                  bypassing the Access-Control-Allow-Origin headers, which
                  specify which origins can access the API. In other words, CORS
                  is a browser security feature that restricts cross-origin HTTP
                  requests with other servers and specifies which domains access
                  your resources.
                </p>
                {/* <button className="btn btn-primary btn-lg" type="button">
                  Example button
                </button> */}
              </div>
            </div>
          </div>
          {/* first question end */}
          {/* second question */}
          <div className="col-lg-12">
            <div className="p-5 mb-4 bg-jumbotron rounded-3">
              <div className="container-fluid py-5 shadow">
                <h1 className="display-5 fw-bold">
                  Why are you using firebase? What other options do you have to
                  implement authentication?
                </h1>
                <p className="col-md-8 fs-4">
                  Firebase Authentication provides backend services, easy-to-use
                  SDKs, and ready-made UI libraries to authenticate users to
                  your app. It supports authentication using passwords, phone
                  numbers, popular federated identity providers like Google,
                  Facebook and Twitter, and more. Firebase Authentication
                  integrates tightly with other Firebase services, and it
                  leverages industry standards like OAuth 2.0 and OpenID
                  Connect, so it can be easily integrated with your custom
                  backend.
                </p>
                {/* <button className="btn btn-primary btn-lg" type="button">
                  Example button
                </button> */}
              </div>
            </div>
          </div>
          {/* second question end */}
          {/* third question */}
          <div className="col-lg-12">
            <div className="p-5 mb-4 bg-jumbotron rounded-3">
              <div className="container-fluid py-5 shadow">
                <h1 className="display-5 fw-bold">
                  How does the private route work?
                </h1>
                <p className="col-md-8 fs-4">
                  The react private route component renders child components
                  (children) if the user is logged in. If not logged in the user
                  is redirected to the /login page with the return url passed in
                  the location state property.
                </p>
                {/* <button className="btn btn-primary btn-lg" type="button">
                  Example button
                </button> */}
              </div>
            </div>
          </div>
          {/* third question end */}
          {/* fourth question */}
          <div className="col-lg-12">
            <div className="p-5 mb-4 bg-jumbotron rounded-3">
              <div className="container-fluid py-5 shadow">
                <h1 className="display-5 fw-bold">
                  What is Node? How does Node work?
                </h1>
                <p className="col-md-8 fs-4">
                  Node.js is an open-source backend javascript runtime
                  environment. It is a used as backend service where javascript
                  works on the server-side of the application. This way
                  javascript is used on both frontend and backend. Node.js runs
                  on chrome v8 engine which converts javascript code into
                  machine code, it is highly scalable, lightweight, fast, and
                  data-intensive. Working of Node.js: Node.js accepts the
                  request from the clients and sends the response, while working
                  with the request node.js handles them with a single thread. To
                  operate I/O operations or requests node.js use the concept of
                  threads.
                </p>
                {/* <button className="btn btn-primary btn-lg" type="button">
                  Example button
                </button> */}
              </div>
            </div>
          </div>
          {/* fourth question end */}
        </div>
      </div>
    </div>
  );
};

export default Blog;
