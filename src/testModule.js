const loadPage = () => {
    const bodyContainer = document.querySelector("#body-element"); 
    const contentContainer = document.querySelector("#content");
    const divContainer = document.createElement("div"); 
    const backgroundDiv = document.createElement("div"); 
    const inBackgroundDiv = document.createElement("div"); 

    bodyContainer.style.backgroundColor = "teal"; 
    //contentContainer.style.backgroundColor = "teal";
    divContainer.style.display = "flex";
    divContainer.style.justifyContent = "right";
    //divContainer.style.backgroundColor = "teal";
    divContainer.style.height = "950px";
    //divContainer.style.width = "2500px";
    
    inBackgroundDiv.style.width = "100px"; 
    inBackgroundDiv.style.height = "100px";
    inBackgroundDiv.style.backgroundColor = "blue";
    inBackgroundDiv.style.alignContent = "center";
    inBackgroundDiv.style.margin = "0 auto";
    //inBackgroundDiv.style.display = "flex";

     
    backgroundDiv.style.width = "750px"; 
    backgroundDiv.style.height = "700px"; 
    backgroundDiv.style.backgroundColor = "white"; 
    backgroundDiv.style.marginTop = "70px";
    backgroundDiv.style.marginLeft = "30px";
    //backgroundDiv.style.display = "flex"; 
    //backgroundDiv.style.margin = "0 auto";
    //backgroundDiv.style.justifyContent = "center"; 
    //backgroundDiv.style.alignContent = "center"; 

    backgroundDiv.appendChild(inBackgroundDiv); 
    divContainer.appendChild(backgroundDiv); 
    contentContainer.appendChild(divContainer); 
    
}

const loadSideBar = () => {
    const contentContainer = document.querySelector("#content");
    const sideBarContainer = document.createElement("div"); 
    const projectsTab = document.createElement("div"); 

    sideBarContainer.style.backgroundColor = "grey"; 
    sideBarContainer.style.width = "50px"; 
    sideBarContainer.style.height = "50px"; 
    sideBarContainer.style.justifyContent = "center";
    sideBarContainer.style.display = "flex"; 
    
    
    contentContainer.appendChild(sideBarContainer); 
    
}

export {loadPage, loadSideBar};