import './posts.html';

Template.Post.events({

     'submit #postForm': function (e, tmpl) {
          e.preventDefault();

          let title = tmpl.find('#postTitle').value;
          let body = tmpl.find('#postBody').value;

          Meteor.call('submitPost', title, body);
     }
});


Template.listPosts.posts = function () {
     return Posts.find({});
}