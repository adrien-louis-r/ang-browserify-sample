var angular = require('angular-last');
var modules = [require('angular-ui-router')];
var app = angular.module('app', modules);

app.config(['$stateProvider', '$urlRouterProvider', require('./configs').router]);
app.factory('Contact', [require('./factories/contact.js')]);
app.service('ContactService', ['Contact', require('./services/contactService.js')]);
app.controller('ContactCtrl', ['ContactService', require('./controllers/contactCtrl.js')]);