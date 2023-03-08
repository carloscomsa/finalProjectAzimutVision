function callsubmitButton(){
    const submitButton = document.querySelector("#contactid")
    const textForm = "<h2>Thank you! Your submission has been received!</h2>";
    submitButton.innerHTML = textForm;
    submitButton.style.backgroundColor = "#888"; submitButton.style.margin = "10px";
}


function moveToMyPortfolio (){
    const viewPortfolio = document.querySelector("#creationText");
    viewPortfolio.scrollIntoView();
}

function moveToMyServices (){
    const viewServices = document.querySelector("#wedoid");
    viewServices.scrollIntoView();
}

function moveToMyContact (){
    const viewContact = document.querySelector(".contact");
    viewContact.scrollIntoView();
}
