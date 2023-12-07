# NodeJS Express MySQL CRUD Project

This project is a basic Node.js application that uses Express and MySQL to perform CRUD (Create, Read, Update, Delete) operations on a 'contatti' (contacts) table.

## Description

The project consists of two main files:

- `app.js`: Contains server setup using Express, MySQL database connection, and utilization of routes defined in `routes.js`.
- `routes.js`: Defines routes for CRUD operations on the 'contatti' table.

## Prerequisites

- Node.js installed on the machine
- MySQL installed and running

## Installation

1. Clone this repository: `git clone <repository-url>`
2. Navigate to the project directory
3. Install dependencies by running: `npm install`

## Configuration

1. Ensure that MySQL is running on your local machine.
2. Modify MySQL configurations in the `routes.js` and `app.js` files if necessary (`host`, `user`, `password`, `database`, `port`).

## Usage

1. Start the server by running: `node app.js`
2. The server will run on `http://localhost:3000`

## Project Structure

- `app.js`: Main entry point of the application configuring the server, managing the database connection, and utilizing routes defined in `routes.js`.
- `routes.js`: Contains route definitions for handling CRUD operations on the 'contatti' table.

## Route '/contatti' (routes.js)

- `GET /`: Returns all contacts present in the 'contatti' table.
- `GET /:id`: Returns the contact corresponding to the specified ID.
- `POST /`: Adds a new contact using the data sent in the request body.
- `PUT /:id`: Modifies an existing contact with the specified ID.
- `DELETE /:id`: Deletes the contact corresponding to the specified ID.

### Note

This is just a basic guide for installing and using the application. For further details on the implementation and management of CRUD operations, refer to the source code in the `app.js` and `routes.js` files.
