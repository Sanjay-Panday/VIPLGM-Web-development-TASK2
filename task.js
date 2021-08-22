import React, { useState } from 'react';
import Loading from './Loading';
// import Loading from 'Loading';
const App = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const GetData = async () => {
        setLoading(true);
        console.log("Sanjaypandey");
        const response = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
        const jsonresponse = await
            response.json();
        setUsers(jsonresponse);
        setLoading(false);


    };
    console.log(users);
    return (
<>
<div>
            <nav>
                <div>
                <h1>Zippy Usercard</h1>
                </div>
<div className="btn">
                <button  onClick={GetData}>Get Users Details</button>
                </div>
            </nav>
            <h2> Welcome to Let's Grow More</h2>
            <div className="cards">
                {/* <div className=""> */}
                <ul>
                    {loading ? (<Loading />) : null}
                    {users ? (users.map(({ id, title }) => (
                        <li className="card-group" key={id}><img className="card-img" src="https://picsum.photos/200/300"></img>
                        <br /><div className="title">{title}</div>
                        <button className="card-btn">Read More</button>
                        </li>
                    ))) : (<h1>Loading</h1>)}
                </ul>
            </div>
            </div>
</>

    );
}
export default App;

