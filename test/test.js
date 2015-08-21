var test = require('tape'),
    strp = require('../'),
    fixtures = [
      { "User Email <user@email.com>": "User Email" },
      { "<user@email.com>": "" },
      { "user@email.com": "" },
      { "User Email <user.foo@email.com>": "User Email" },
      { "User Email <user.foo123@email.com>": "User Email" },
      { "User Email <user.foo123@email.com>": "User Email" },
      { "User Email 123user.foo@123email.com": "User Email" },
      { "user@email": "user@email" },
      { "User Email <user.foo@email.biz>": "User Email" },
      { "User Email <user.foo@email.ninja>": "User Email" }
    ];



test('strip email', function (t) {
  
  t.plan(fixtures.length);
  
  fixtures.map(function (obj) {

    var key = Object.keys(obj)[0];
    t.equal(strp(key), obj[key]);
  
  });
});
