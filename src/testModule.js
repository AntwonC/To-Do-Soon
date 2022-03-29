const loadPage = () => {
    const bodyContainer = document.querySelector("#body-element"); 
    const contentContainer = document.querySelector("#content");
    const divContainer = document.createElement("div"); 
    const backgroundDiv = document.createElement("div"); 
    const inBackgroundDiv = document.createElement("div"); 


    bodyContainer.style.backgroundColor = "teal"; 
    bodyContainer.style.margin = "0 0 0 0";
    //bodyContainer.style.width = "200px";
    //contentContainer.style.backgroundColor = "teal";
    divContainer.setAttribute("id", "main-container"); 
    divContainer.style.display = "flex";
    divContainer.style.justifyContent = "center";
    //divContainer.style.backgroundColor = "teal";
    divContainer.style.height = "950px";
    //divContainer.style.width = "2500px";
    
    inBackgroundDiv.style.width = "100%"; 
    inBackgroundDiv.style.height = "100px";
    inBackgroundDiv.style.backgroundColor = "blue";
    //inBackgroundDiv.style.alignContent = "center";
    //inBackgroundDiv.style.margin = "0 auto";
    //inBackgroundDiv.style.display = "flex";
    
    
    backgroundDiv.setAttribute("id", "inside-main-container"); 
    backgroundDiv.style.width = "2100px"; 
    backgroundDiv.style.height = "870px"; 
    backgroundDiv.style.backgroundColor = "teal"; 
    //backgroundDiv.style.marginRight = "30px";
    //backgroundDiv.style.marginTop = "70px";
    //backgroundDiv.style.marginLeft = "30px";
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
    const divContainer = document.querySelector("#main-container"); 
    const backgroundDiv = document.querySelector("#inside-main-container");
    const sideBarContainer = document.createElement("div"); 
    const otherContainer = document.createElement("div"); 

    sideBarContainer.style.backgroundColor = "grey"; 
    sideBarContainer.style.width = "300px"; 
    sideBarContainer.style.height = "100%"; 
    sideBarContainer.style.justifyContent = "left"
    sideBarContainer.style.display = "flex";
    //sideBarContainer.style.float = "left";
    
    //sideBarContainer.style.paddingRight = "25px";
    //sideBarContainer.style.border = "black solid 2px"
    //sideBarContainer.style.marginRight = "25px";
    //sideBarContainer.style.paddingRight = "25px";
    //sideBarContainer.style.paddingTop = "1000px"; 

    otherContainer.style.width = "100px"; 
    otherContainer.style.height = "100px"; 
    otherContainer.style.display = "flex";
    otherContainer.style.backgroundColor = "red";
    otherContainer.style.justifyContent = "right";

    sideBarContainer.appendChild(otherContainer); 
    backgroundDiv.appendChild(sideBarContainer); 
   //contentContainer.appendChild(sideBarContainer); 
    
}

const taskArea = () => {
    const backgroundDiv = document.querySelector("#inside-main-container");
    const task = document.createElement("div"); 

    task.style.width = "100px"; 
    task.style.height = "100px"; 
    task.style.backgroundColor = "red"; 
    task.style.display = "flex"; 
    task.style.justifyContent = "right"; 

    backgroundDiv.appendChild(task); 
}

export {loadPage, loadSideBar, taskArea};