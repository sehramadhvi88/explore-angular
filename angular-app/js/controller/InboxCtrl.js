angular.module('EmailApp')
.controller('InboxCtrl',function InboxCtrl(InboxFactory){

	'use strict';

	console.log(InboxFactory);

	InboxFactory.getMessages().success(function(data){
		debugger;

	});

	this.title="My Inbox";

});





