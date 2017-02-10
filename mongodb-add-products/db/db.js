const monk = require('monk');

//Database Established
const url = 'localhost:27017/meanstack';
const db = monk(url);
const collection = db.get('document');

module.exports = {
  collection: collection,
  checkDb: function(){
    //Database Connection
    db.then(() => {
      console.log('Our database is currently running');
    }).catch((err) => {
      console.log('The error is: ' + err);
    });
  }
};
