SampleData = new Mongo.Collection('sampledata');
SampleData.insert({name:'Sample Data'});

Meteor.publish('sampledata', function(){
  return SampleData.find();
});
