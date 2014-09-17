'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */

angular.module('mytodoApp')
  .controller('ContactCtrl', function ($scope) {

     $scope.todos = ['Item 1', 'Item 2', 'Item 3'];

    // $scope.addTodoo = function () {
    //   $scope.todos.push($scope.todo);
    //   $scope.todo = '';
    // };

    // $scope.removeTodo = function (index) {
    //   $scope.todos.splice(index, 1);
    // };

  });


//Note: If you enter in more than one blank todo item, or a todo item with the same name, your todo app will unexpectedly stop working. :( As a fun exercise on your own time, enhance the addTodo() function with error checking.