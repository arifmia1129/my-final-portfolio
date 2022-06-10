import React from 'react';
import code from "../images/code.JPG";

const Blogs = () => {

    return (
        <div>
            <div className="my-5">
                <h3 className="text-2xl text-primary font-bold mb-2">Q-1: How will you improve the performance of a React Application?</h3>
                <div className='text-secondary'>
                    A-1:
                    <ul>
                        <li>1. Use the Production Build</li>
                        <li>2. Create React App: When build project use Create React App</li>
                        <li>3. Single File Builds: Production ready as single files.</li>
                        <li>4. Browserify: Install a few plugins.</li>
                        <li>5. Avoid Reconciliation. etc.</li>
                    </ul>
                </div>
            </div>
            <div className="my-5">
                <h3 className="text-2xl text-primary font-bold mb-2">Q-2: What are the different ways to manage a state in a React application?</h3>
                <div className='text-secondary'>
                    A-2:
                    <ul>
                        <li>1. Local state: (useState)</li>
                        <li>2. Global state: (useContex)</li>
                        <li>3. Server state (useState+useEffect, React useQuery)</li>
                        <li>4. URL state</li>
                    </ul>
                </div>
            </div>
            <div className="my-5">
                <h3 className="text-2xl text-primary font-bold mb-2">Q-3: How does prototypical inheritance work?</h3>
                <div className='text-secondary'>
                    A-3:
                    <img src="https://www.educative.io/api/page/6187859468877824/image/download/6346760642363392" alt="" />
                    <ul>
                        <li>In JavaScript, when an object shares the properties of another object through a prototypical chain, it is called prototypical inheritance. Child inherits property from his parents. If there is any JavaScript on it then use them. If the last thing is not found, the null is found. Basically that's how it works.</li>
                    </ul>
                </div>
            </div>
            <div className="my-5">
                <h3 className="text-2xl text-primary font-bold mb-2">Q-4: Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h3>
                <div className='text-secondary'>
                    A-4:
                    <ul>
                        <li>Because if I set direct then I will not be able to update later easily. And if we do it through useState ([]) then next
                            I can keep the updates in the state variable using setState.</li>
                    </ul>
                </div>
            </div>
            <div className="my-5">
                <h3 className="text-2xl text-primary font-bold mb-2">Q-5: You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
                <div className='text-secondary'>
                    A-5:
                    <img className='w-full' src={code} alt="" />
                    <ul>
                        <li>First all off to get search name from user using input form. Then implement find operation on array of product. Then you got proper product that you found. For better performance you can do lower case when you run find operation.</li>

                    </ul>
                </div>
            </div>
            <div className="my-5">
                <h3 className="text-2xl text-primary font-bold mb-2">Q-6: What is a unit test? Why should write unit tests?</h3>
                <div className='text-secondary'>
                    A-6:
                    <ul>
                        <li>Software developer implement unit test so that test their software part by part. Make sure unit test because of they test some part functionality and ui or other working properly or not. It's important for every developer. This test break the whole work part by part. That is easy for developer. Unit test is software base dynamic test.</li>
                    </ul>
                </div>
            </div>
            <div className="my-5">
                <h3 className="text-2xl text-primary font-bold mb-2">Q-7: Difference between JS and node.js?</h3>
                <div className='text-secondary'>
                    A-7:
                    <br />
                    Javascript:
                    <ul>
                        <li>1. JavaScript is high-level-programming language. JavaScript is a scripting language. This is known as JS.</li>
                        <li>2. JS only can run in the browsers.</li>
                        <li>3. Usually js use in client side.</li>
                    </ul>
                    Node JS:
                    <ul>
                        <li>1. NodeJs is a JS runtime environment. That allows the JS to run be on server-side.</li>
                        <li>2. JS can run other side with help node js.</li>
                        <li>3. Mainly node js use in server side.</li>
                    </ul>
                </div>
            </div>
            <div className="my-5">
                <h3 className="text-2xl text-primary font-bold mb-2">Q-8: When should use NodeJs and MongoDb?</h3>
                <div className='text-secondary'>
                    A-8:
                    <br />
                    Node JS:
                    <ul>
                        <li>1. NodeJs is specially suited where maintain persistent connection from browser to server side.</li>
                        <li>2. When you write an application that sends update an user in real time.</li>
                        <li>3. It runs JavaScript, so you use same programming language in client side and server side.</li>
                    </ul>
                    MongDB:
                    <ul>
                        <li>1. When web application services many users who do not interact with each other.</li>
                        <li>2. When integrating large amounts of diverse data.</li>
                        <li>3. When need data for high performance application mongodb help you.</li>
                    </ul>
                </div>
            </div>
            <div className="my-5">
                <h3 className="text-2xl text-primary font-bold mb-2">Q-9: Difference between SQL and NoSQL?</h3>
                <div className='text-secondary'>
                    A-9:
                    <br />
                    SQL:
                    <ul>
                        <li>1. Relational Database Management System.</li>
                        <li>2. These database best suited for complex queries.</li>
                        <li>3. Vertically scalable.</li>
                    </ul>
                    NoSQL:
                    <ul>
                        <li>1. Non Relation Database Management System.</li>
                        <li>2. These database not good for complex queries.</li>
                        <li>3. Horizontally scalable.</li>
                    </ul>
                </div>
            </div>
            <div className="my-5">
                <h3 className="text-2xl text-primary font-bold mb-2">Q-10: What is the purpose of jwt and how does it work?</h3>
                <div className='text-secondary'>
                    A-10:
                    <br />
                    <h5 className="fw-bold">Purpose:</h5>
                    <p>
                        <span className='fw-bold'>Authentication:</span> Firstly jwt provide authentication service. It checks that user is valid or not. When use logged in jwt taken user info and check it.
                        <br />
                        <span className='fw-bold'>Exchange:</span> When jwt identify valid user it sends or exchange valid user information.
                    </p>
                    <h5 className="fw-bold">Work:</h5>
                    <div>
                        {/* img use from jwt website */}
                        <img className='img-fluid' src="https://cdn2.auth0.com/docs/media/articles/api-auth/client-credentials-grant.png" alt="" />
                        <p>
                            1. First of all client or application requests authorization server for authorization.
                            <br />
                            2. If authorization server granted when give an access token.
                            <br />
                            3. When get access token client or application access permitted service or information.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Blogs;