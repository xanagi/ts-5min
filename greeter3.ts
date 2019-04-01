interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

//let user = "Jane User";
let user = { firstName: "Jane", lastName: "User"};

document.body.innerHTML = greeter(user);
