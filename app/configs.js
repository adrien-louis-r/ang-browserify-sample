var Configs = {
	router: function($stateProvider, $urlRouterProvider) {
		this.contacts = {
			name: 'contacts',
			url: '',
			templateUrl: 'views/contacts.html',
			controller: 'ContactCtrl as Contact'
		};

		this.contactsInfo = {
			name: 'contacts.info',
			parent: 'contacts',
			url: '/:id',
			templateUrl: 'views/contacts.info.html',
			controller: function($stateParams, ContactService) {
				ContactService.selectContact($stateParams.id);
				this.contact = ContactService.selectedContact;
			},
			controllerAs: 'ContactInfo'
		};

	 	$stateProvider
		.state(this.contacts)
		.state(this.contactsInfo);
	}
}

module.exports = Configs;
 