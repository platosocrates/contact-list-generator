let listContacts = function(contacts) {
    document.write("<h1>Planetary peeps</h1>");

    contacts.forEach(function (item) {
        document.write("<h2>" + item.name + "</h2>");
        document.write("<dl>");
        document.write("<dt>E-mail address</dt>");
        document.write("<dd><a href='mailto:" + item.email + "'>" + item.email + "</a></dd>");
        document.write("<dt>Phone number</dt>");
        document.write("<dd><a href='tel:" + item.tel + "'>" + item.tel + "</a></dd>");
        document.write("<dt>Location</dt>");
        document.write("<dd>Between " + item.loc[0] + "km & " + item.loc[1] + "km from the sun.</dd>");
        document.write("</dl>");
    })
};

listContacts(peeps);