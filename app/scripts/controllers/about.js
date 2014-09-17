'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('AboutCtrl', function ($scope) {

  	$scope.todos = [
    	{text:'item 1', done:false},         
    	{text: 'item 2', done:false}
  	];

  	$scope.getTotalTodos = function () {
    	return $scope.todos.length;
  	};

  	$scope.addTodo = function () {
    	$scope.todos.push({text:$scope.formTodoText, done:false});
    	$scope.formTodoText = '';
  	};

  	 $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.done;
        });
    };
  
  });
