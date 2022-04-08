import './styles.css';
import Add from './images/outline_add_circle_outline_black_18dp.png';

const loadGrid = () => {
    const bodyContainer = document.querySelector("#body-element"); 
    const contentContainer = document.querySelector("#content");
    const divContainer = document.createElement("div"); 
    const backgroundDiv = document.createElement("div"); 
    const inBackgroundDiv = document.createElement("div"); 

    const headerContainer = document.createElement("div"); 
    headerContainer.style.gridArea = "header";

    const sideBarContainer = document.createElement("div"); 
    sideBarContainer.style.gridArea = "sidebar"; 

    const mainContainer = document.createElement("div"); 
    mainContainer.style.gridArea = "main"; 

    // .container {
 // grid-template-columns: [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];
 // grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];

    //bodyContainer.style.backgroundColor = "teal"; 
    bodyContainer.style.margin = "0 0 0 0";
    //bodyContainer.style.width = "200px";
    //contentContainer.style.backgroundColor = "teal";
    divContainer.setAttribute("id", "main-container"); 
    divContainer.style.display = "grid";
    divContainer.style.gridTemplateColumns = "25% 25% 25% 25%";
    divContainer.style.gridTemplateRows = "10% 30% 30% 30%";
    divContainer.style.gridTemplateAreas = '"header header header header"\
                                           "sidebar sidebar main main"\
                                           "sidebar sidebar main main"\
                                           "sidebar sidebar main main';
    divContainer.style.backgroundColor = "teal";
    divContainer.style.height = "972px";
    
    contentContainer.appendChild(divContainer); 
    
}

const loadHeaderBar = () => {
    const contentContainer = document.querySelector("#content"); 
    const divContainer = document.querySelector("#main-container"); 
    const headerContainer = document.createElement("div"); 

    headerContainer.setAttribute("id", "header-container");
    headerContainer.style.width = "400%"; 
    headerContainer.style.height = "100%"; 
    headerContainer.style.backgroundColor = "green"; 

    divContainer.appendChild(headerContainer); 

}

const loadSideBar = () => {
    const contentContainer = document.querySelector("#content");
    const divContainer = document.querySelector("#main-container"); 
   // const backgroundDiv = document.querySelector("#inside-main-container");
    const sideBarContainer = document.createElement("div"); 
    const taskOptionContainer = document.createElement("div"); 
    const createTaskButton = document.createElement("button"); 
    const taskTextField = document.createElement("input"); 

   // const otherContainer = document.createElement("div"); 

    // Container where textfield and button are in (START)
    taskOptionContainer.style.display = "flex";
    taskOptionContainer.style.width = "100%"; 
    taskOptionContainer.style.height = "100px";
    taskOptionContainer.style.justifyContent = "center"; 
    taskOptionContainer.style.marginTop = "20px";

    createTaskButton.setAttribute("id", "create-task");
    createTaskButton.style.width = "60px"; 
    createTaskButton.style.height = "31px"; 
    createTaskButton.textContent = "Create"; 
    createTaskButton.style.marginLeft = "10px";

    taskTextField.setAttribute("id", "textfield-area");
    taskTextField.style.width = "150px";
    taskTextField.style.height = "25px";
    taskTextField.placeholder = "Enter project name here";

    taskOptionContainer.appendChild(taskTextField); 
    taskOptionContainer.appendChild(createTaskButton); 
    // Container where textfield and button are in (END)

    // SideBarContainer STARTS
    sideBarContainer.setAttribute("id", "sidebar-container"); 
    sideBarContainer.style.backgroundColor = "grey"; 
    sideBarContainer.style.width = "100%"; 
    sideBarContainer.style.height = "100%"; 
    sideBarContainer.style.gridColumn = "1 / span 1";
    sideBarContainer.style.gridRow = "2 / span 3";
   // sideBarContainer.style.border = "1px solid red";
   // sideBarContainer.style.borderRadius = "10px";

    sideBarContainer.appendChild(taskOptionContainer); 
    // SidebarContainer ENDS

    const projectContainer = document.createElement("div"); 
    const projectHeader = document.createElement("h1");
    const testProject = document.createElement("div"); 

    projectContainer.style.border = "2px solid turquoise";
    projectContainer.style.height = "85%";
    projectContainer.style.borderRadius = "25px";

    projectHeader.textContent = "Projects"; 

    testProject.setAttribute("class", "font-text");
    testProject.textContent = "test";
    testProject.style.fontSize = "35px";
    testProject.style.fontFamily = "Print";
    
    //testProject.style.fontStyle = "normal";

    projectContainer.appendChild(projectHeader); 
    projectContainer.appendChild(testProject); 
    sideBarContainer.appendChild(projectContainer); 

    // Append the sidebarContainer to the grid
    divContainer.appendChild(sideBarContainer); 
    
   //contentContainer.appendChild(sideBarContainer); 
}

const helperFunction = () => {
    const dropDownContainer = document.querySelector(".dropdown");
    const dropDownContent = document.querySelector(".dropdown-content");

    dropDownContainer.addEventListener("mouseover", function(ev) {
        dropDownContent.style.display = "block"; 
    });
}

const loadMainBar = () => {
    const contentContainer = document.querySelector("#content");
    const divContainer = document.querySelector("#main-container"); 
    const mainContainer = document.createElement("div"); 

    const testTaskContainer = document.createElement("div"); 
    const textFieldTask = document.createElement("input"); 
    const testTaskButton = document.createElement("input");
    const testDateField = document.createElement("input"); 
    
    const dropDownContainer = document.createElement("div"); 
    const dropDownButton = document.createElement("button");  
    const dropDownContent = document.createElement("div");
    const highOption = document.createElement("a"); 
    const mediumOption = document.createElement("a"); 
    const lowOption = document.createElement("a"); 

    dropDownContainer.setAttribute("class", "dropdown"); 
    dropDownContainer.onclick = helperFunction; 
    dropDownContainer.style.position = "relative"; 
    dropDownContainer.style.display = "inline-block"; 

    dropDownButton.setAttribute("class", "dropdown-button");
    dropDownButton.style.padding = "16px"; 
    dropDownButton.style.fontSize = "16px"; 
    dropDownButton.style.color = "white";
    dropDownButton.textContent = "DropDown";

    dropDownContent.setAttribute("class", "dropdown-content");
    dropDownContent.style.display = "none"; 
    dropDownContent.style.position = "absolute"; 
    dropDownContent.style.minWidth = "160px"; 
    dropDownContent.style.boxShadow = "0px 8px 16px 0px rgba(0,0,0,0.2)"; 

    highOption.setAttribute("class", "urgent-option");
    mediumOption.setAttribute("class", "urgent-option");
    lowOption.setAttribute("class", "urgent-option");

    highOption.textContent = "High"; 
    mediumOption.textContent = "Medium"; 
    lowOption.textContent = "Low"; 

    dropDownContainer.appendChild(dropDownButton);
    dropDownContent.appendChild(highOption);
    dropDownContent.appendChild(mediumOption);
    dropDownContent.appendChild(lowOption);
   // dropDownButton.appendChild(dropDownContent); 
    dropDownContainer.appendChild(dropDownContent);



    testTaskContainer.style.width = "100%"; 
    testTaskContainer.style.display = "flex"; 
    testTaskContainer.style.justifyContent = "left";

    textFieldTask.placeholder = "Task Here"; 
    textFieldTask.style.width = "150px";
    textFieldTask.style.height = "30px"; 

    testDateField.placeholder = "MM/DD/YYYY"; 
    testDateField.style.width = "90px";
    testDateField.style.height = "30px";
    testDateField.style.marginLeft = "10px"; 
    testDateField.style.marginRight = "10px";
    
    testTaskButton.style.width = "45px"; 
    testTaskButton.style.height = "35px"; 
    //testTaskButton.style.marginBottom = "10px";
    testTaskButton.type = "image"; 
    testTaskButton.src = Add;

    testTaskContainer.appendChild(textFieldTask); 
    testTaskContainer.appendChild(testDateField);
    testTaskContainer.appendChild(dropDownContainer);
    testTaskContainer.appendChild(testTaskButton);
    mainContainer.appendChild(testTaskContainer); 

    mainContainer.setAttribute("id", "actual-content-container");
    mainContainer.style.width = "100%"; 
    mainContainer.style.height = "100%"; 
    mainContainer.style.gridColumn = "2 / span 3";
    mainContainer.style.gridRow = "2 / span 3"; 
    mainContainer.style.backgroundColor = "purple"; 
    //mainContainer.style.marginLeft = "0.5px";

    divContainer.appendChild(mainContainer); 

}

const taskArea = () => {
    const backgroundDiv = document.querySelector("#inside-main-container");
    const headerContainer = document.querySelector("#header-container"); 
    const sideBarContainer = document.querySelector("#sidebar-container"); 
    const mainContainer = document.querySelector("#actual-content-container"); 
    const task = document.createElement("div"); 

    task.style.width = "100px"; 
    task.style.height = "100px"; 
    task.style.backgroundColor = "red"; 
    task.style.gridColumn = "4 / span 1";
    task.style.gridRow = "3 / span 1";
    
    //task.style.position = "absolute"; 
    //task.style.top = "0"; 
    //task.style.right = "0"; 
    //task.style.justifyContent = "right"; 

    mainContainer.appendChild(task);
    //headerContainer.appendChild(task); 
    //backgroundDiv.appendChild(task);
   //sideBarContainer.appendChild(task);  
}


export {loadGrid, loadHeaderBar, loadMainBar, loadSideBar, taskArea};