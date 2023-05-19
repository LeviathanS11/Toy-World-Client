import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';

const Blog = () => {
    return (
        <div>
            <Header></Header>
            <br />
            <div>
            <i><b>Question and Answer.</b></i>
            <div>
                <p>
                    <b>What is an access token and refresh token? How do they work and where should we store them on the client-side?</b>
                </p>
                <p>
                    <i>Refresh tokens allow you to balance your user's access needs with your organization's security practices. Access tokens help users get the resources they need to complete their tasks.
                        <br />
                        You can store the access token and refresh token in the server-side session. The application can use web sessions to communicate with the server. The token is then available for any requests originating from server-side code.
                    </i>
                </p>
            </div>
            <br />
            <div>
                <p>
                    <b>Compare SQL and NoSQL databases?</b>
                </p>
                <p>
                    <i>SQL: <ul>
                        <li>1.Stands for Structured Query Language</li>
                        <li>2.Relational database management system (RDBMS)</li>
                        <li>3.Suitable for structured data with predefined schema</li>
                        <li>4.Data is stored in tables with columns and rows</li>
                        <li>5.Supports JOIN and complex queries</li>
                    </ul>
                    </i>
                    <br />
                    <i>NoSQL: <ul>
                        <li>1.Stands for Not Only SQL</li>
                        <li>2.	Non-relational database management system</li>
                        <li>3.	Suitable for unstructured and semi-structured data</li>
                        <li>4.Data is stored in collections or documents</li>
                        <li>5.	Does not support JOIN and complex queries</li>
                    </ul>
                    </i>
                </p>
            </div>
            <br />
            <div>
                <p>
                    <b>What is express js? What is Nest JS ?</b>
                </p>
                <p>
                    <i>Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js
                        <br />
                        Nest. js is a server-side Node. js framework that's great for building highly testable and maintainable backend applications.
                    </i>
                </p>
            </div>
            <br />
            <div>
                <p>
                    <b>What is MongoDB aggregate and how does it work ?</b>
                </p>
                <p>
                    <i> Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages.</i>
                </p>
            </div>
        </div>
        <br />
        <Footer></Footer>
        </div>
    );
};

export default Blog;