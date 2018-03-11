import './nav.html';
import '../../stylesheets/home.less';

Template.nav.onCreated(function () {
  console.log("started");
});

Template.nav.helpers({
  sayHello() {
    console.log("hello");
  },
});

Template.nav.events({
  'submit .info-link-add'(event) {
    event.preventDefault();

  },
});
