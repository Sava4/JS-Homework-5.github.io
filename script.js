//Опишите своими словами, что такое экранирование, и зачем оно нужно в языках программирования
// экранирование используется в случае если в текстовом интерфейсе некоторые слова являются управляющими командами. Для предотвращения уязвимеостей весь ввод пользователей экранируется (отделяется) от управляющих команд. Примеры SQL Injection, Cross site scripting

function defineNonWritableProperty(propName, message){
    Object.defineProperty(this, propName, {
        value: prompt(message),
        configurable: true,
        writable: false 
    })
}

function creatNewUser () {
    let newUser = {
        setFirstName() {
            defineNonWritableProperty.call(this, 'firstName', 'Please enter your first name')
        },
        setLastName() {
            defineNonWritableProperty.call(this, 'lastName', 'Please enter your last name');
        },
        setBDate() {
            defineNonWritableProperty.call(this, 'birthday', 'Please enter your birth date dd.mm.yyy format only')
        },
        getLogin() { 
            return (this.firstName.trim().slice(0, 1).toLowerCase() + this.lastName.trim().toLowerCase());
            },
        getAge() {
            let [day, month, year] = this.birthday.split('.');
            month = month--; // month starts from 0
            let now = Date.now();
            let bday = new Date(year, month, day);
            let ageMillis = now - bday;
            let millisInYear = 1000 * 60 * 60 * 24 * 365.25 //seconds * minutes * hours * day * year. 1 in 4 years is 366
            let age = Math.floor(ageMillis / millisInYear);
            return age;
            },
        getPassword() {
            let [,,year] = this.birthday.split('.');
            let fLetter = this.firstName.slice(0,1).toUpperCase();
            let lLower = this.lastName.toLowerCase();
            return fLetter + lLower + year;
        }
        };
newUser.setFirstName();
newUser.setLastName();
newUser.setBDate();
return newUser;
}

const user = creatNewUser();

console.log (user.getAge());
console.log (user.getPassword());


// let [all, year, month, day] =
//     /^(\d\d\d\d)-(\d\d)-(\d\d)$/
//     .exec('2999-12-31') || [];

// https://www.dyn-web.com/javascript/strings/split.php