// Server entry point, imports all server code

import '/imports/startup/server';
import '/imports/startup/both';


Meteor.startup(function(){

    Accounts.onCreateUser(function(options, user){
        if (options.profile){
            user.profile = options.profile;
        }

        user.profile.picture =
            `http://graph.facebook.com/${user.services.facebook.id}/picture/?type=small`;
        return user;
    })

});