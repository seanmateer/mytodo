'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */

angular.module('mytodoApp')
  .controller('ContactCtrl', function ($scope, localStorageService) {

    var todosInStore = localStorageService.get('todos');

    $scope.todos = todosInStore && todosInStore.split('\n') || [];

    $scope.todones = ['item 1' , 'item 2', 'item 3'];

    $scope.$watch('todos', function () {
      localStorageService.add('todos', $scope.todos.join('\n'));
    }, true);

    $scope.addTodo2 = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };

    $scope.completeTodo = function () {
      $scope.todones.push($scope.todo);
      $scope.todone = '';
    };

    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };

    $scope.editTodo = function (index) {
      $scope.todos.splice(index, 1);
    };

  });


//Note: If you enter in more than one blank todo item, or a todo item with the same name, your todo app will unexpectedly stop working. :( As a fun exercise on your own time, enhance the addTodo() function with error checking.