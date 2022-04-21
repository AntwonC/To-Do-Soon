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

const showDropDown = () => {
    const dropDownContainer = document.querySelector(".dropdown");
    const dropDownContent = document.querySelector(".dropdown-content");
  
        dropDownContent.style.display = "block";    
}

const notShowDropDown = () => {
    const dropDownContainer = document.querySelector(".dropdown");
    const dropDownContent = document.querySelector(".dropdown-content");

        dropDownContent.style.display = "none";   
}

const selectPriorityOption = (element, button) => {
   // const dropDownButton = document.querySelector(".dropdown-button");
  // console.log(element); 
   //console.log(button.textContent); 
   button.textContent = element.textContent;
}

const loadMainBar = () => {
    const contentContainer = document.querySelector("#content");
    const divContainer = document.querySelector("#main-container"); 
    const mainContainer = document.createElement("div"); 

    const testTaskContainer = document.createElement("div"); 
    const textFieldTask = document.createElement("input"); 
    const testTaskButton = document.createElement("input");
    const testDateField = document.createElement("input"); 
    const testDescriptionField = document.createElement("input");
    
    const dropDownContainer = document.createElement("div"); 
    const dropDownButton = document.createElement("button");  
    const dropDownContent = document.createElement("div");
    const highOption = document.createElement("a"); 
    const mediumOption = document.createElement("a"); 
    const lowOption = document.createElement("a"); 

    dropDownContainer.setAttribute("class", "dropdown"); 
    dropDownContainer.addEventListener("mouseenter", showDropDown); 
    dropDownContainer.addEventListener("mouseleave", notShowDropDown);
    dropDownContainer.style.position = "relative"; 
    dropDownContainer.style.display = "inline-block"; 

    dropDownButton.setAttribute("class", "dropdown-button");
    //dropDownButton.setAttribute("id", "dropButton"); 
    //dropDownButton.style.padding = "16px"; 
    dropDownButton.style.fontSize = "16px"; 
    dropDownButton.style.width = "100px"; 
    dropDownButton.style.height = "35px"; 
    dropDownButton.style.marginLeft = "10px"; 
    dropDownButton.style.marginRight = "10px"; 
    dropDownButton.textContent = "Priority";

    dropDownContent.setAttribute("class", "dropdown-content");
    dropDownContent.style.display = "none"; 
    dropDownContent.style.position = "absolute"; 
    dropDownContent.style.width = "90px"; 
    dropDownContent.style.marginLeft = "10px";
    //dropDownContent.style.boxShadow = "0px 8px 16px 0px rgba(0,0,0,0.2)"; 

    highOption.setAttribute("class", "urgent-option");
    mediumOption.setAttribute("class", "urgent-option");
    lowOption.setAttribute("class", "urgent-option");

    highOption.textContent = "High"; 
    mediumOption.textContent = "Medium"; 
    lowOption.textContent = "Low"; 

    // START: Add event listener to each option 

    highOption.addEventListener("click", function() {
        selectPriorityOption(highOption, dropDownButton);
    }); 

    mediumOption.addEventListener("click", function() {
        selectPriorityOption(mediumOption, dropDownButton);
    }); 

    lowOption.addEventListener("click", function() {
        selectPriorityOption(lowOption, dropDownButton);
    });
    
    // END: Add event listener to each option

    dropDownContainer.appendChild(dropDownButton);
    dropDownContent.appendChild(highOption);
    dropDownContent.appendChild(mediumOption);
    dropDownContent.appendChild(lowOption);
   // dropDownButton.appendChild(dropDownContent); 
    dropDownContainer.appendChild(dropDownContent);

    // START: Container that holds all the textfield elements
    testTaskContainer.style.width = "100%"; 
    testTaskContainer.style.display = "flex"; 
    testTaskContainer.style.justifyContent = "left";
    // END: Container that holds all the textfield elements

    // START: Task Title element
    textFieldTask.setAttribute("id", "textfield-title");
    textFieldTask.setAttribute("class", "input-element");
    textFieldTask.placeholder = "Task Title Here"; 
    textFieldTask.style.width = "100px";
    textFieldTask.style.height = "30px"; 
    textFieldTask.style.marginRight = "10px";
    // END: Task Title element

    // START: Task description element
    testDescriptionField.setAttribute("id", "textfield-desc"); 
    testDescriptionField.setAttribute("class", "input-element"); 
    testDescriptionField.placeholder = "Details of your task"; 
    testDescriptionField.style.width = "150px"; 
    testDescriptionField.style.height = "30px"; 
    testDescriptionField.style.marginLeft = "10px"; 
    testDescriptionField.style.marginRight = "10px"; 
    // END: Task description element

    // START: Task date element
    testDateField.setAttribute("id", "textfield-date"); 
    testDateField.setAttribute("class", "input-element"); 
    testDateField.placeholder = "MM/DD/YYYY"; 
    testDateField.style.width = "90px";
    testDateField.style.height = "30px";
    testDateField.style.marginLeft = "10px"; 
    testDateField.style.marginRight = "10px";
    // END: Task date element

    // START: Button to create user task 
    testTaskButton.setAttribute("id", "create-task-button");
    testTaskButton.style.width = "40px"; 
    testTaskButton.style.height = "35px"; 
    testTaskButton.type = "image"; 
    testTaskButton.src = Add;
    // END: Button to create user task 

    testTaskContainer.appendChild(textFieldTask);
    testTaskContainer.appendChild(testDescriptionField); 
    testTaskContainer.appendChild(testDateField);
    testTaskContainer.appendChild(dropDownContainer);
    testTaskContainer.appendChild(testTaskButton);
    mainContainer.appendChild(testTaskContainer); 

    // // TestTaskContainer ENDS
    mainContainer.setAttribute("id", "actual-content-container");
    mainContainer.style.width = "100%"; 
    mainContainer.style.height = "100%"; 
    mainContainer.style.gridColumn = "2 / span 3";
    mainContainer.style.gridRow = "2 / span 3"; 
    mainContainer.style.backgroundColor = "purple"; 
    //mainContainer.style.marginLeft = "0.5px";

    divContainer.appendChild(mainContainer); 

}
// PROBLEM: Wanted to pass parameters into event listener as input from user is used (closure)
// https://stackoverflow.com/questions/44162969/javascript-addeventlistener-function-parameters
const inputHandler = (evt, fieldElement) => {
    //console.log(e); 
    //fieldElement.textContent = e.target.value; 
    //console.log(evt.target.value);
    fieldElement.textContent = evt.target.value;
    //console.log(fieldElement);  
}


const checkTaskFields = () => {
    const message = document.createElement("div"); 
    
    const testFieldTask = document.querySelector("#textfield-title"); 
    const testDateField = document.querySelector("#textfield-date");
    const testDescriptionField = document.querySelector("#textfield-desc");
    const dropDownButton = document.querySelector(".dropdown-button");
    const testTaskButton = document.querySelector("#create-task-button");

    const fieldElements = document.querySelectorAll(".input-element");

    // Task Title
    // DO: Check if its empty (DONE) 
    if ( testFieldTask.textContent.length == 0 ) {
        alert(`This textfield is empty`);
    } else {
        alert(`Task Title is not empty`);
    }

    // Task Details 
    // DO: Check if its empty, could be anything

    // Task Date
    // DO: Check if its empty and need to check for valid date

    //if ( testDateField)


    //testFieldTask.addEventListener("input", inputHandler);
   /*testFieldTask.addEventListener("input", function() {
        inputHandler();
    }); */
    //testFieldTask.oninput = inputHandler(textField); 
    //console.log(testFieldTask); 
}

const addInputListeners = () =>  {
    const testFieldTask = document.querySelector("#textfield-title"); 
    const testDateField = document.querySelector("#textfield-date");
    const testDescriptionField = document.querySelector("#textfield-desc");

    const fieldElements = document.querySelectorAll(".input-element");
   /* ( function (i) {
        testFieldTask.addEventListener("input", function (e) {
            inputHandler(); 
        }, false); 
    })(testFieldTask); */
    
    fieldElements.forEach(element => {
        element.addEventListener("input", function(evt) {
            inputHandler(evt, element); 
        });
    });

    //testFieldTask.myParam = testFieldTask; 
    //testFieldTask.addEventListener("input", function(evt) {
     //   inputHandler(evt, testFieldTask); 
    //});
    /*testFieldTask.addEventListener("input", (function ( myParam ) {
        return function () {
            inputHandler(); 
        }
    } (testFieldTask)) , false);
     */


}

const taskArea = () => {
    //const backgroundDiv = document.querySelector("#inside-main-container");
    //const headerContainer = document.querySelector("#header-container"); 
    //const sideBarContainer = document.querySelector("#sidebar-container"); 
    const mainContainer = document.querySelector("#actual-content-container"); 
    
    const testFieldTask = document.querySelector("#textfield-title"); 
    const testDateField = document.querySelector("#textfield-date");
    const testDescriptionField = document.querySelector("#textfield-desc");
    const dropDownButton = document.querySelector(".dropdown-button");
    const testTaskButton = document.querySelector("#create-task-button");

    addInputListeners(); 


    testTaskButton.addEventListener("click", function() {
       // alert("Calling alert from taskArea()"); 
       checkTaskFields(); 
    });

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

    //mainContainer.appendChild(task);
    //headerContainer.appendChild(task); 
    //backgroundDiv.appendChild(task);
   //sideBarContainer.appendChild(task);  
}


export {loadGrid, loadHeaderBar, loadMainBar, loadSideBar, taskArea};