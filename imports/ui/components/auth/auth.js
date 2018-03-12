import './auth.html';
c
//"http://graph.facebook.com/\" + user.services.facebook.id + \"/picture/?type=medium"
//"http://graph.facebook.com/100001524268375/picture/?type=small"

Template.Auth.helpers({
    image: function () {
        if (!Meteor.user()) {
            return null;
        }
        console.log(Meteor.user());
        return Meteor.user().profile.picture;

    }

});
