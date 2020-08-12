import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utilities/axiosWithAuth";
import Friends from "./friends";
import loginForm from "./loginForm";

function friendsList(props) {
  const [friends, setFriends] = useState([]);

  const getData = () => {
    axiosWithAuth()
      .get(`/friends`)
      .then((res) => {
        setFriends(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error(err.message));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Friends!</h1>
      <loginForm />
      <div>
        {friends.map((friend) => (
          <div>
            <Friends name={friend.name} age={friend.age} email={friend.email} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default friendsList;
