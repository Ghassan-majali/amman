// datatybes

/* wellcome in jordan */ 

// ask about the age  


var age = prompt("whats your age?");

function theAge (age) {
    
    console.log(age);
    if (age >= 18 && age <= 60) {
        alert('welcome to jordan');
    } else if (age < 18 || age > 60) {
        alert('sorry your not allowed');
    } else {
        alert('please input a number');
    }
}

theAge(age);

// did u visit jordan 


var jordan= prompt("did u visit jordan?");

function visitJordan (jordan) {

    console.log(jordan);

    if(jordan=='yes'){
        document.write ("<div id=\"div1\">You are from the family</div>");
    }else if(jordan=='no'){
        document.write('<div id=\"div1\">Your chance is now</div>');
    }else{
        alert('choose betwen yes or no next time');

}

}
visitJordan(jordan);


// rated the site 
// between 1 to 5 


var howIsMySite = prompt('how many star you give me from 1 to 5 ?');
var result = '';
var star = '';


star ='<img id="img2" width ="40px" high ="40" src="pic/star.jpg"/>';

for (var i = 0; i  < howIsMySite; i++) {
    if (howIsMySite<=6){
        result += star;
                
    }
    else if(howIsMySite>5){alert ('chose between 1 - 5'); howIsMySite = prompt('how many star you give me from 1 to 5 ?');}
}

console.log(result);

document.write(result);

