// Client entry point, imports all client code

import '/imports/startup/client';
import '/imports/startup/both';

Meteor.startup( ()=> {

     Accounts.onCreateUser(function(options, user){
          if (options.profile){
               user.profile = options.profile;
          }

          user.profile.picture =
               `http://graph.facebook.com/${user.services.facebook.id}/picture/?type=small`;
          return user;
     })

});
