import React, { useState, useEffect } from "react";
import axios from "axios";

const Example = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      const response = axios.get("https://bea3dbf8-6a08-4510-8f34-bf0d7ed58d44-00-isivl9igsjnl.sisko.replit.dev:3001/")
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
