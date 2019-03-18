//Include the path package to get the correct file path
var path = require('path');
//***********************
/* Routing Path to use with buttons
    Create module to export app for use in other files in order to move user through app according 
    to intended process (from homepage to survey and back to homepage as a default measure). 
    Set module export declaration to an umbrella function that includes 3 app(objects) connected via
    dot notation to get(object method) to create 3 function arguments which achieve the aforementioned 
    objectives*/
//***********************/
module.exports = function(app) {
/* Basic route that sends the userto the home page. App gets us into the directory, then starts function
    function takes in a request in the form of a sendfile command with res + dot notation to output
    the home page to browser by using pathjoin to combine directoryname and fileaddress into exact location 
    of file.    
*/
  app.get('/', function (req, res) {
      res.sendFile(path.join(__dirname, '/../public/home.html'));
  });
  /* route to display the survey page - survery.html. App gets us into the directory, then starts function
    function takes in a request in the form of a sendfile command with res + dot notation to output
    the survey page to browser by using pathjoin to combine directoryname and fileaddress into exact location 
    of file.   
  */
  app.get('/survey', function (req, res) {
      res.sendFile(path.join(__dirname, '/../public/survey.html'));
  });

  /* If, a request (req) is made and no other route match is found, result (res) is set to default 
    apps output webpage to homepage
  */
  app.use(function (req, res) {
      res.sendFile(path.join(__dirname + '/../public/home.html'));
  });
};
