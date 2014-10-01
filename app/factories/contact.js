function Contact() {
    return function(id, name, phone) {
        this.id = id;
        this.name = name;
        this.phone = phone;
    };
}
 
module.exports = Contact;