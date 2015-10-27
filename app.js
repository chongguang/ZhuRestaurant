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
			if(!$scope.title || $scope.title === '') {
				return;
			}
			$scope.dishs.push({title: $scope.title, link: $scope.link, upvotes:0});
			$scope.title = '';
			$scope.link = '';
		};

		$scope.incrementUpvotes = function(dish){
			dish.upvotes += 1;
		}
	},

]);