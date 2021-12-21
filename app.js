let mobile = prompt('Your Mobile Number...')
let mail =prompt('Your Email Address...')
let user =prompt('User Name....')
let pass = prompt('Your Password...')
let zip = prompt('Your Zip Code......')


//bangladeshi Mobile Number Pattern:
//01744518886
if((/^(01|8801|\+8801)[0-9]{9}$/).test(mobile)){
    console.log(`
            (${mobile})is valid Number
    `);
}else{
    console.log(`
            ${mobile}is invalid Number!
    `);
}
//mail Pattern:
//devssabbir@gmail.com
if((/^[a-z0-9\._-]*@[a-z0-9-]*.[a-z]*$/).test(mail)){
    console.log(`
            (${mail})is valid Mail
    `);
}else{
    console.log(`
           ${mail}is invalid Mail!
      `);
}
//username pattern
//dev-sabbir047
if((/^[a-z0-9-@]{6,}$/).test(user)){
    console.log(`
          (${user})is valid Username.
    `);
}else{
    console.log(`
          ${user}is invalid Username!
    `);
}




//password pattern
//sabb%#^30-_*!&
if((/^[a-zA-Z0-9]{6,}$/).test(pass)){
    console.log(`
         Your Password is Weak Please Use Special Character & Digit.
    `);
}else if((/^[a-zA-Z!@#$%&*\-_]{6,}$/).test(pass)){
    console.log(`
         Your Password is Medium Please Use any Digit.
`);
}else if((/^[a-zA-Z0-9]{6,}$/).test(pass)){
    console.log(`
         Your Password is Medium Please Use Special Character.
`);
}else if((/^[a-z0-9\!@#$%&*\-_]{6,}$/).test(pass)){
    console.log(`
         Your Password is Medium Please Use an Uppercase Character.
`);
}else if((/^[a-zA-Z0-9\!@#$%&*\-_]{6,}$/).test(pass)){
    console.log(`
         Your Password is Strong.
`);
}else{
    console.log(`
         Use Minimum 6 Character.
    `);
}




//zip code pattern
//7876789
if((/^[0-9]{5,10}/).test(zip)){
    console.log(`
         Your ZIP Code Is Valid.
    `);
}else{
    console.log(`
         ZIP code Length must be minimum 5 characters, maximum 10 characters with only Number value.
    `);
}
