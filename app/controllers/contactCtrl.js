function ContactCtrl(ContactService) {
    this.ContactService = ContactService;
    this.contacts = this.ContactService.all();
};
 
ContactCtrl.prototype.isSelectedContact = function(contact) {
    return this.ContactService.selectedContact == contact;
};
 
ContactCtrl.prototype.selectContact = function(contact) {
    this.ContactService.selectContact(contact);
};
 
module.exports = ContactCtrl;