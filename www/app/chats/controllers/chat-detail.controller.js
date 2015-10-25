angular.module('demotab.chats')
	.controller('ChatDetailController', function($scope, $stateParams, Chats){
		$scope.chat = Chats.get($stateParams.chatId);
	});