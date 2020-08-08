import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utilities/axiosWithAuth";

const friendsList = () => {
  const initialNewFriend = {
    name: "",
    age: "",
    email: "",
  };

  const [friends, setFriends] = useState([]);
  const [newFriend, setNewFriend] = useState(initialNewFriend);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => {
        console.log("Error fetching friends", err.message);
      });
  }, []);

  const handleChanges = (e) => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value,
    });
  };

  const addFriend = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends", newFriend)
      .then((res) => {
        setNewFriend(initialNewFriend);
        setFriends(res.data);
      })
      .catch((err) => {
        console.log("There was an error adding friends", err.message);
      });
  };

  return (
    <div>
      <form onSubmit={addFriend}>
        <input
          type="text"
          name="name"
          value={newFriend.name}
          onChange={handleChanges}
          placeholder="Name"
        />
        <input
          type="number"
          name="age"
          value={newFriend.age}
          onChange={handleChanges}
          placeholder="Age"
        />
        <input
          type="email"
          name="email"
          value={newFriend.email}
          onChange={handleChanges}
          placeholder="Email"
        />
      </form>

      <div>
        <h2>Friends List</h2>
        {friends.map((friend) => (
          <div key={friend.id}>
            <p>Name: {friend.name}</p>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default friendsList;
