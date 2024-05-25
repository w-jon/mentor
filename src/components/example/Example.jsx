import React, { useState, useEffect } from "react";
import axios from "axios";

const Example = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      const response = axios.get("https://7c5af058-5486-4fe0-a12d-d0768da5df0f-00-24ug6nsenzof7.worf.replit.dev:3001/")
      console.log(response)
      setMessage(response.data.message);
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <div>
      <h1>This is our server's message: {message}</h1>
    </div>
  );
};

export default Example;
