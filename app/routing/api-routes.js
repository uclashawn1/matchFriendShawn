/* ===============================================================================
    LOADING DATA
    static data is saved in friends.js as a variable and module. This saved module allows us to transport it's
    array content here by requiring it here using 'require' and the file's address. When we set this to a
    variable, it's like we have the array in this file. So then we can utilize the array.
    I need this array here, because this is the file designated to update that array and create a new array so
    that the static friends array data never changes but that we also have a realtime friends array to 
    compare, compute, and match friends.
   =============================================================================== */

var friends = require('../data/friends.js');
/*  Use new friends variable created from module in friends.js and use in new module designed to do the 
  aforementioned by setting this api-routes.js module to a function and eventually requiring it in server.js
*/
module.exports = function (app) {
  /* api path to get the friends data, responds with a json object (an array of friends). Activated on both
  html pages with blue API Link */
  app.get('/api/friends', function (req,res) {
      res.json(friends);
  });

  /* *** Updates an array of friends "database" array and sends back the json form of the most compatible
   new friend */
  app.post('/api/friends', function (req, res) {
      // newFriend is the user that filled out the survey
      var newFriend = req.body;

      // compute best match from scores
      var bestMatch = {};

      for(var i = 0; i < newFriend.scores.length; i++) {
        if(newFriend.scores[i] == "1 (Strongly Disagree)") {
          newFriend.scores[i] = 1;
        } else if(newFriend.scores[i] == "5 (Strongly Agree)") {
          newFriend.scores[i] = 5;
        } else {
          newFriend.scores[i] = parseInt(newFriend.scores[i]);
        }
      }
      /* compare the scores of newFriend with the scores of each friend in the database and find the friend
       with the smallest difference when each set of scores is compared */

      var bestMatchIndex = 0;
      /* greatest score difference for a question is 4, therefore greatest difference is 4 times # of
       questions in survey */
      var bestMatchDifference = 40;

      for(var i = 0; i < friends.length; i++) {
        var totalDifference = 0;

        for(var index = 0; index < friends[i].scores.length; index++) {
          var differenceOneScore = Math.abs(friends[i].scores[index] - newFriend.scores[index]);
          totalDifference += differenceOneScore;
        }

        /* if the totalDifference in scores is less than the best match so far
         save that index and difference */
        if (totalDifference < bestMatchDifference) {
          bestMatchIndex = i;
          bestMatchDifference = totalDifference;
        }
      }

      // the best match index is used to get the best match data from the friends index
      bestMatch = friends[bestMatchIndex];

      // Pushes new friend data from survey into "database" array
      friends.push(newFriend);

      // return the best match with friends
      res.json(bestMatch);
  });

};
