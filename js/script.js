// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let input = document.querySelector('#addForm');
let output = document.querySelector('#employees');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let countEmployees = 0;

// ADD EMPLOYEE
input.addEventListener('submit', (e) => {

    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.querySelector('#id').value;
    let name = document.querySelector('#name').value;
    let ext = document.querySelector('#extension').value;
    let email = document.querySelector('#email').value;
    let dept = document.querySelector('#department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let newRow = output.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = newRow.insertCell();
    let cellName = newRow.insertCell();
    let cellExt = newRow.insertCell();
    let cellEmail = newRow.insertCell();
    let cellDept = newRow.insertCell();
    let cellDelete = newRow.insertCell();

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(document.createTextNode(id));
    cellName.appendChild(document.createTextNode(name));
    cellExt.appendChild(document.createTextNode(ext));
    cellEmail.appendChild(document.createTextNode(email));
    cellDept.appendChild(document.createTextNode(dept));

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    cellDelete.appendChild(deleteBtn);

    // RESET THE FORM
    input.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    countEmployees += 1;
    document.querySelector('#empCount').innerText = `(${countEmployees})`;
});

// DELETE EMPLOYEE
output.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        if (confirm('Are you sure you want to delete this task?')) {
            output.deleteRow(e.target.parentNode.parentNode.rowIndex);
            countEmployees -= 1;
            if (countEmployees > 0) {
                document.querySelector('#empCount').innerText = `(${countEmployees})`;
            } else {
                document.querySelector('#empCount').innerText = ``;
            }
        }
    }
});