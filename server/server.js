Meteor.startup(function () {
  // Insert sample data if the student collection is empty
  if (Candidate.find().count() === 0) {
    JSON.parse(Assets.getText("candidate.json")).candidate.forEach(function (doc) {
      Candidate.insert(doc);
    });
  }
});