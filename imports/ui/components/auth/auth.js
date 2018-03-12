import './auth.html';

//"http://graph.facebook.com/\" + user.services.facebook.id + \"/picture/?type=medium"
//"http://graph.facebook.com/100001524268375/picture/?type=small"

Template.Auth.helpers({

    image: function () {
        if (!Meteor.user()) return null;

        return `<img src="${Meteor.user().profile.picture}" id="login-buttons-dropdown-align-" />`;
    },


});
