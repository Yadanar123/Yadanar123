const getOTP = (length, newOption = {}) => {
    let input = document.getElementById('phone')
    if(input.value === ''){
        alert("Please enter the phone number");
        return false;
    }
    const digits = '0123456789';
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const specialChars = '!@#$%^&*';

    let defaultOption = {
        digits : true,
        alphabets : true,
        upperCase : true,
        specialChars : true
    };
    let option = {...defaultOption,...newOption};
    let allowChars = (option.digits || '') && digits
    allowChars += (option.alphabets || '') && alphabets
    allowChars += (option.upperCase || '') && upperCase
    allowChars += (option.specialChars || '') && specialChars
    // console.log(allowChars)

    let otp=''
    while(otp.length < length){
        let random = Math.random()
        let charIndex = Math.floor(random*(allowChars.length-1)+0)
        otp += allowChars[charIndex]
    }
    document.getElementById("result").innerHTML = "OTP Code: "+otp
};