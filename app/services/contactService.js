function ContactService(Contact) {
    this.contacts = [
        new Contact(1, 'Damien', '0102030405'),
        new Contact(2, 'Pierre', '0203040501'),
        new Contact(3, 'Hadrien', '0304050102'),
        new Contact(4, 'Adrien', '0405010203'),
        new Contact(5, 'Frank', '0501020304'),
        new Contact(6, 'Etienne', '0504030201')
    ];
 
    this.selectedContact;
}
 
ContactService.prototype.all = function() {
    return this.contacts;
};
 
ContactService.prototype.selectContact = function(contactId) {
    this.selectedContact = this.contacts.filter(function(contact) {
        return contact.id == contactId;
    })[0];
};
 
module.exports = ContactService;