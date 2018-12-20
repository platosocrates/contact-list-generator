let listContacts = function(contacts) {
    document.write("<h1>Planetary peeps</h1>");

    contacts.forEach(function (item) {
        document.write("<h2>" + item.name + "</h2>");
        document.write("<dl>");
        document.write("<dt>E-mail address</dt>");
        document.write("<dd><a href='mailto:" + item.email + "'>" + item.email + "</a></dd>");
        document.write("<dt>Phone number</dt>");
        document.write("<dd><a href='tel:" + item.tel + "'>" + item.tel + "</a></dd>");
        document.write("</dl>");
    })
};

listContacts(peeps);