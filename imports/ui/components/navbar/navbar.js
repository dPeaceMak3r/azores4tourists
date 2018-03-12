import './navbar.html';

Template.navbar.onCreated(function () {
  console.log("started");
});

Template.navbar.helpers({
  sayHello() {
    console.log("hello");
  },
});

Template.navbar.events({
  'click img'(event) {

    let islandId = event.target.id;
    FlowRouter.go('/' + islandId);

  },

});
