angular.module('demotab.chats')
	.controller('ChatsController', function($scope, Chats){
		$scope.chats = Chats.all();
		$scope.remove = function(chat) {
			Chats.remove(chat);
		};		
	});