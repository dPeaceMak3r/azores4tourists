import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

// Definition of the posts collection
export const Posts = new Mongo.Collection('posts');

if (Meteor.isServer){
     Meteor.publish('posts', function postsPublication(){
          return Posts.find({

          })
     })

}


Meteor.methods({
     'posts.insert'(text){

     }

})