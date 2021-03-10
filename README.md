# Mongo Media
Mongo Media is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. MM is built using Express.js for routing, a MongoDB database, and the Mongoose ODM.

## User Story
AS A social media startup <br>
I WANT an API for my social network that uses a NoSQL database <br>
SO THAT my website can handle large amounts of unstructured data <br>

## Performance Criteria
GIVEN a social network API <br>
WHEN I enter the command to invoke the application <br>
THEN my server is started and the Mongoose models are synced to the MongoDB database <br>
WHEN I open API GET routes in Insomnia Core for users and thoughts <br>
THEN the data for each of these routes is displayed in a formatted JSON <br>
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core <br>
THEN I am able to successfully create, update, and delete users and thoughts in my database <br>
WHEN I test API POST and DELETE routes in Insomnia Core <br>
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list <br>

## Technologies Used
- JavaScript
- MongoDB
- Mongoose.js
- Express.js
- Node.js
- IndexedDB
- service-workers

## Set Up
``` git clone git@github.com:AidanGuarniere/fantastic-umbrella.git ```
<br>
and THEN run the following in the CLI
<br>

``` npm start ```

## Screencastify Turtorial
[here](https://drive.google.com/file/d/14e-F4Alf6xr28uanfedKUNU6dPJBINX1/view)
