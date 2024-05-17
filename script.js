function matchpassword(){
    var firstpass = document.f1.password.value;
    var secondpass = document.f1.password2.value;
    if(firstpass == secondpass){
        alter ("Your password is correct");
        return true;
    }
    else{
        alter ("Password must be same!!");
        return false;
    }
}