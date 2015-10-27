var app = angular.module('ZhuRestaurant', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
	$scope.test = 'Hello, welcome to the Restaurant of Zhuxi Middle School';
	$scope.dishs = [
		{title: 'dish 1', upvotes: 5},
		{title: 'dish 2', upvotes: 15},
		{title: 'dish 3', upvotes: 3},
		{title: 'dish 4', upvotes: 7}];

	$scope.addPost = function(){
		$scope.dishs.push({title: 'A new dish', upvotes: 0});
	};
},

]);