angular.module('demotab')
	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			
			// setup an abstract state for the tabs directive
			.state('tab', {
				url: '/tab',
				abstract: true,
				templateUrl: 'app/core/views/tabs.html'
			})
	
			// Each tab has its own nav history stack:
			.state('tab.dash', {
				url: '/dash',
				views: {
					'tab-dash': {
						templateUrl: 'app/core/views/tab-dash.html',
						controller: 'DashController'
					}
				}
			})
			
			.state('tab.account', {
				url: '/account',
				views: {
				'tab-account': {
						templateUrl: 'app/core/views/tab-account.html',
						controller: 'AccountController'
					}
				}
			})
			
			.state('tab.chats', {
				url: '/chats',
				views: {
					'tab-chats': {
						templateUrl: 'app/chats/views/tab-chats.html',
						controller: 'ChatsController'
					}
				}
			})
			.state('tab.chat-detail', {
				url: '/chats/:chatId',
				views: {
					'tab-chats': {
						templateUrl: 'app/chats/views/chat-detail.html',
						controller: 'ChatDetailController'
					}
				}
			});
			
		// if none of the above states are matched, use this as the fallback
		$urlRouterProvider.otherwise('/tab/dash');					
	});