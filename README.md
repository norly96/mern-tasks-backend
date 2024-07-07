# MERN-TASKS-BACKEND

This project is a backend API that provides user authentication and task management functionalities. Users can register and log in, and each authenticated user can create, read, update, and delete tasks.

## Content

- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Configuration](#configuration)
- [Technologies](#technologies)
- [Contact](#contact)

## Installation

Follow these steps to install and set up the project on your local machine.

1. Clone the repository:

```bash
   git clone https://github.com/norly96/mern-tasks-backend.git
```

2. Navigate to the project directory:

```bash
   cd your-repository
```

3. Install the dependencies:

```bash
   npm install
```

## Usage

To start the server, run:

```bash
nmp run dev
```

By default, the server will run on http://localhost:3030. If you want to change the port, set the PORT environment variable in a .env file.

## API Documentation

The API documentation is available via Swagger. Once the server is running, you can access the documentation at the following URL:

```bash
http://localhost:3030/api/docs
```

## Configuration

The project uses environment variables for sensitive configurations. Create a .env file in the project root and define the following variables:

```bash
PORT=3030
SECRET_TOKEN=SECRETTOKEN
```

## Technologies

- Node.js
- Express
- MongoDB

## Contact

    Name: Norluis Galvez Sanchez
    GitHub: https://github.com/norly96
    Linkedin: https://www.linkedin.com/in/norly96
