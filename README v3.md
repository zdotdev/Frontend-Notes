# Course Management API

This is a simple course management API built with Express.js and MongoDB. It allows you to manage and retrieve course information.

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

You need to have the following installed on your machine:

- Node.js
- MongoDB

## Installing

1. Clone the repository:
   - `git clone https://github.com/dimaliwatkent/course-management-api.git`
1. Navigate into the project directory
   - `cd course-management-api`
1. Install the dependencies
   - `npm install`
1. Rename the `.env.example` file to `.env` in the root directory of the project and add your MongoDB URI.

1. Start the server
   - `npm start`
   - The server will start and listen on the port specified in the .env file or port 3000 if no port is specified.

## API Endpoints

- **GET** `/api/allcourses` : Fetches all fields in courses.
- **GET** `/api/courses` : Fetches the name and specialization of the courses.
- **GET** `/api/bsis` : Fetches BSIS courses.
- **GET** `/api/bsit` : Fetches BSIT courses.

## Built With

- `Express.js` - The web framework used
- `Mongoose` - MongoDB object modeling tool
- `Dotenv` - Loads environment variables from a .env file into process.env

## Challenges and Solutions

### Schema Design Problem

**Problem**: The initial schema design was complex due to the structure of the data, with separate fields for "1st Year", "2nd Year", "3rd Year", and "4th Year". This made it difficult to work with the data.

**Solution**: A hardcoded years in the schema.

```javascript
const yearSchema = new mongoose.Schema({
  "1st Year": [courseSchema],
  "2nd Year": [courseSchema],
  "3rd Year": [courseSchema],
  "4th Year": [courseSchema],
});
```

**Expectation**:

```javascript
const yearSchema = new mongoose.Schema({
  year: [courseSchema],
});
```

### Aggregation Problem

**Problem**: Initially, there was difficulty in retrieving courses without using the aggregate function.

**Solution**: The aggregate function was used anyway. The decision to use the aggregate function required learning more about its usage and implementation. [Aggregation Docs](https://www.mongodb.com/docs/manual/reference/operator/aggregation-pipeline/)

### Filtering Problem

**Problem**: There was a challenge in adding filters to the aggregate function to display specific curriculum, such as BSIS or BSIT.

**Solution**: A solution was found by passing an object with the desired filter to the aggregate function. For example, to display BSIS courses, an object { "courses.tags": "BSIS" } was passed to the aggregate function. Can be found [here](https://github.com/dimaliwatkent/course-management-api/blob/main/routes/courseRoutes.js)
