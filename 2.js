function isUsernameValid(username){
  if(/^[a-z]/.test(username) && username.match(/^[0-9a-z._]+$/) && !/[-!$%^&*()+|~=`{}[:;<>?,@#\]]/g.test(username) && /^.{8,12}$/.test(username) ){
    return true
  }
}

function isPasswordValid(password){
  if(password.length === 9 && password.match(/[^a-zA-Z0-9]/gi).length >= 1 && password.match(/[0-9]/gi).length >= 1){
    return true
  }
}
