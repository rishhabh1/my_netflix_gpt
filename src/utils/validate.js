export const checkValidationData =(email,password)=>{
    // if(!email,p)

const isEmailValid= /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

// const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)


if(!isEmailValid){
    return 'Email ID not valid'
}
if(!isPasswordValid){
    return 'Password not valid'

}

return null




// if()
}