const loadPage = () => {
    const contentContainer = document.querySelector("#content");
    const divContainer = document.createElement("div"); 
    const backgroundDiv = document.createElement("div"); 

    //contentContainer.style.display = "flex";
    divContainer.style.display = "flex";
    divContainer.style.justifyContent = "center";
    divContainer.style.backgroundColor = "teal";

    backgroundDiv.style.width = "100px"; 
    backgroundDiv.style.height = "100px"; 
    backgroundDiv.style.backgroundColor = "blue"; 
    //backgroundDiv.style.display = "flex"; 
    //backgroundDiv.style.margin = "0 auto";
    //backgroundDiv.style.justifyContent = "center"; 
    //backgroundDiv.style.alignContent = "center"; 


    divContainer.appendChild(backgroundDiv); 
    contentContainer.appendChild(divContainer); 
    
}

export {loadPage};