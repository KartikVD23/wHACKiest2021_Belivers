import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import "../App.css";
function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function validateForm() {
    return (
      username.length > 0 &&
      password.length > 0 &&
      username === "admin" &&
      password === "admin"
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <h1>Admin Login</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Link to="/admin-dashboard">
          <Button
            class="btn btn-success"
            block
            size="lg"
            type="submit"
            disabled={!validateForm()}
            onSubmit={handleSubmit}
          >
            Login
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default AdminLogin;
