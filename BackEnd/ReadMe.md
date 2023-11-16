# User Management Router

This router module provides an Express.js router for managing user operations in a Node.js application. It supports creating, editing, deleting, and retrieving user records.

## Prerequisites

- Node.js
- Express.js
- Mongoose
- bcrypt for password hashing

## Installation

To install this router into your project, follow these steps:

1. Ensure you have the necessary prerequisites installed.
2. Include the router in your server file: `const userRouter = require('./path_to_router/user');`
3. Use the router: `app.use('/api', userRouter);`

## API Reference

### POST /user/create

Creates a new user.

- Request body: JSON object with user details.
- Response: Success or failure message.

### PUT /user/edit/:email

Updates an existing user.

- Parameters: `email` of the user to update.
- Request body: JSON object with fields to update, excluding the email.
- Response: Updated user object.

### DELETE /user/delete/:email

Deletes a user.

- Parameters: `email` of the user to delete.
- Response: Success or error message.

### GET /user/getAll

Retrieves all users.

- Response: Array of user objects.

## Examples

Include example `curl` commands or JavaScript `fetch` calls that demonstrate how to interact with the API.

## Error Handling

Errors are returned as JSON objects with `isSuccess` set to `false` and an `error` message.

## Security

Passwords are hashed using bcrypt before storing in the database.