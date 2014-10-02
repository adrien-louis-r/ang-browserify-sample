function ContactCtrl(ContactService) {
    this.ContactService = ContactService;
    this.contacts = this.ContactService.all();
};
 
ContactCtrl.prototype.isSelectedContact = function(contactId) {
    return this.ContactService.selectedContact.id === contactId;
};
 
ContactCtrl.prototype.selectContact = function(contactId) {
    this.ContactService.selectContact(contactId);
};
 
module.exports = ContactCtrl;