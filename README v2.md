# Recipe Sharing API Documentation

## Introduction

Welcome to the Recipe Sharing API documentation. This API provides endpoints for managing a collection of recipes, including CRUD operations (Create, Read, Update, Delete), and fetching recipes by their IDs.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have Node.js and npm installed on your machine.
- You have a MongoDB instance running, or a cloud-based MongoDB service configured.
- You have a .env file set up with the correct environment variables (PORT, DATABASE_URL).

## Installation

To install the Recipe Sharing API, follow these steps:

1. Clone the repository to your local machine. `git clone https://github.com/dimaliwatkent/recipe-sharing-api.git`
1. Run `npm install` to install all the necessary dependencies.
1. Rename the `.env.example` to `.env`
1. Configure your `.env` file with the correct database URL and desired port.
1. Start the server with `npm run dev`.

## Usage

Once the server is running, you can interact with the API using HTTP requests. The base URL for all endpoints is /api/recipes.

### Endpoints

- **GET** /api/recipes: Retrieve all recipes.
- **POST** /api/recipes: Create a new recipe.
- **GET** /api/recipes/:id: Get a recipe by its ID.
- **PUT** /api/recipes/:id: Update a recipe by its ID.
- **DELETE** /api/recipes/:id: Delete a recipe by its ID.

## Request Body for POST and PUT

When creating or updating a recipe, the request body should match the following schema:

``` json
{
  "title": "string",
  "ingredients": ["string"],
  "instructions": "string",
  "tags": ["Breakfast", "Lunch", "Dinner", "Dessert"]
}
```

## Deployment

This API is designed to be deployed to a server environment. Follow standard deployment procedures for your chosen hosting provider. Ensure that the environment variables are correctly set in the production environment.

## Security

Ensure that your API is secure by implementing proper authentication and authorization mechanisms. Use HTTPS for all communication and restrict access to sensitive operations.

## Troubleshooting

If you encounter issues, check the logs for any error messages. Common problems could be related to the database connection, incorrect environment variables, or syntax errors in the code.

## Contributing

Contributions to the Recipe Sharing API are welcome. Please submit a pull request with a clear description of the changes and tests.


## Contact

For any further queries or support, please contact the project maintainer.
