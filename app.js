const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
var instructors = [{
  id: 1,
  fullName: "Kyle Coberly",
  title: "Lead Instructor",
  numberOfDogs: 0
}, {
  id: 2,
  fullName: "Danny Fritz",
  title: "Lead Instructor",
  numberOfDogs: 0
}, {
  id: 3,
  fullName: "CJ Reynolds",
  title: "Lead Instructor",
  numberOfDogs: 0
}, {
  id: 4,
  fullName: "Brooks Patton",
  Title: "Lead Instructor",
  numberOfDogs: 0
}, {
  id: 5,
  fullName: "Roberto Ortega",
  title: "Lead Instructor",
  numberOfDogs: 1
}, {
  id: 6,
  fullName: "Chad Drummond",
  title: "Lead Instructor",
  numberOfDogs: 0
}, {
  id: 7,
  fullName: "Kim Schlesinger",
  title: "Instructor",
  numberOfDogs: 0
}, {
  id: 8,
  fullName: "Peter Ostiguy",
  title: "Associate Instructor",
  numberOfDogs: 1
}, {
  id: 9,
  fullName: "Cass Torske",
  title: "Resident",
  numberOfDogs: 1
}, {
  id: 10,
  fullName: "Matt Winzer",
  title: "Resident",
  numberOfDogs: 2
}, {
  id: 11,
  fullName: "Aaron Goodman",
  title: "Resident",
  numberOfDogs: 0
}, {
  id: 12,
  fullName: "Michelle Bergquist",
  title: "Resident",
  numberOfDogs: 1
}];
function findId(instructors, id){
  for (let i=0;i<instructors.length;i++) {
    if (instructors[i].id == id){
      return instructors[i];
    }
  }
  return null;
}
app.get('/', function (request, response) {
  response.json({instructors});
})
app.get('/:id', function (request, response) {
  var foundId = findId(instructors, request.params.id);
  if (!foundId){
    response.status(404);
    response.json({
      error: {
        message: "No record found!"
      }
    });
  }
  response.json({instructors: foundId});
});
app.listen(process.env.PORT || 3000);
