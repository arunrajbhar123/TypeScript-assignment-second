var info = {
    title: "masai",
    status: true,
    id: 4
};
var funUser = function (_a) {
    var firstname = _a.firstname, lastname = _a.lastname;
    if (firstname !== undefined && lastname !== undefined) {
        console.log(firstname + " " + lastname);
    }
    else {
        console.log(firstname);
    }
};
var preson = {
    firstname: "Masai",
    lastname: "School"
};
funUser(preson);
// 5. PhoneBook
var arrPerson = [];
var Person3 = {
    phone: 4564565,
    addresses: "mumbai",
    email: "adss58@gmail.com",
    firstname: "Masai",
    lastname: "School"
};
arrPerson.push(Person3);
console.log(arrPerson);
