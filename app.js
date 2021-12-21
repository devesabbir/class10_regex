let mobile = prompt('Your Mobile Number...')
let mail =prompt('Your Email Address...')
let user =prompt('User Name....')


//bangladeshi Mobile Number Pattern:
//01744518886
if((/^(01|8801|\+8801)[0-9]{9}$/).test(mobile)){
    console.log(`(${mobile})is valid Number`);
}else{
    console.log(`${mobile}is invalid Number!`);
}
//mail Pattern:
//devssabbir@gmail.com
if((/^[a-z0-9\._-]*@[a-z0-9-]*.[a-z]*$/).test(mail)){
    console.log(`(${mail})is valid Mail`);
}else{
    console.log(`${mail}is invalid Mail!`);
}
//username pattern
//dev-sabbir047
let userPattern =/^[a-z0-9-@]{6,}$/
console.log(userPattern.test(user));
if((/^[a-z0-9-@]{6,}$/).test(user)){
    console.log(`(${mail})is valid Mail`);
}else{
    console.log(`${mail}is invalid Mail!`);
}