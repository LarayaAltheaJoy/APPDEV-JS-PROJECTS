export default function ShoppingCart(props){
    const listOfItems = props.item;
    const list = listOfItems.map(list =>
        <>
            <ul key = {list.name}>
                <li>{list.name}</li>
            </ul>
        </>
        )
        return(
            <>
            <h3>Cart Items</h3>
            <div className="shopping-list">{list} </div>
            </>
        );
}



///

import React, { useState } from "react";

export default function AdminPanel(props) {
  const accounts = props.accounts;
  const [devlogs, setDevlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function addDevlog() {
    const newDevlog = {
      date: new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate(),
      title: title,
      content: content
    };
    setDevlogs([...devlogs, newDevlog]);
    setTitle("");
    setContent("");
  }

  const renderAccounts = () => {
    return accounts.map((account, index) => (
      <div key={index}>
        <h2>{account.username}</h2>
        <p>{account.role}</p>
      </div>
    ));
  };

  const renderDevlogHistory = () => {
    return devlogs.map((devlog, index) => (
      <div key={index}>
        <h4>{devlog.title}</h4>
        <p>{devlog.content}</p>
        <p>{devlog.date}</p>
      </div>
    ));
  };

  if (props.isLoggedIn === false) {
    return <Login />;
  } else {
    return (
      <div>
        <h1>This is the admin panel</h1>
        <p>These are the active accounts: </p>
        {renderAccounts()}
        

        <hr />
        <h4>Admin Devlogs</h4>
        Title: <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        

        

        Content:
        

        <textarea name="content" value={content} onChange={(e) => setContent(e.target.value)} cols="50" rows="10"></textarea>
        

        <button type="submit" onClick={addDevlog}>Submit</button>
        <h4>Devlog History:</h4>
        {renderDevlogHistory()}
      </div>
    );
  }
}