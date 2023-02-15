function newUser(name, age, country){
    var name = name || 'Oscar';
    var age = age || 24;
    var country = country || 'México';
    console.log(name, age, country);
}
newUser();
newUser('Emireth', 30, 'Veracruz');

function newAdmin(name = 'Oscar', age = 32, country = 'CL'){
    console.log(name, age, country);
}
newAdmin();
newAdmin('Ana', 28, 'PE');