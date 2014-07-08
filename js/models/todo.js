Todos.Todo = DS.Model.extend({
  title: DS.attr("string"),
  isCompleted: DS.attr("boolean")
});

Todos.Todo.FIXTURES = [
  {
    id: 1,
    title: "Learn Ember.js",
    isCompleted: true
  },
  {
    id: 2,
    title: "Build a portfolio site",
    isCompleted: false
  },
  {
    id: 3,
    title: "Grow a handlebar mustache",
    isCompleted: false
  }
];
