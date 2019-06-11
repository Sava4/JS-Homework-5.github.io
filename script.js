//Опишите своими словами, что такое экранирование, и зачем оно нужно в языках программирования

function creatNewUser () {
    let newUser = {
        setFirstName() {
            Object.defineProperty(this, 'firstName', {
                value: prompt('Please enter your first name'),
                configurable: true,
                writable: false 
            })},
        setLastName() {
            Object.defineProperty(this, 'lastName', {
                value: prompt('Please enter your last name'),
                configurable: true,
                writable: false
            })},
        getLogin() { 
            return (this.firstName.trim().slice(0, 1).toLowerCase() + this.lastName.trim().toLowerCase());
            }
        };
newUser.setFirstName();
newUser.setLastName();
return newUser;
}

console.log(creatNewUser().getLogin());

