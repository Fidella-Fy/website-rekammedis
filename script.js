document.getElementById('busForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let destination = document.getElementById('destination').value;

    // Create new table row
    let table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow();

    // Insert new cells
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);

    // Append values to the cells
    cell1.textContent = name;
    cell2.textContent = age;
    cell3.textContent = gender;
    cell4.textContent = destination;

    // Clear the form
    document.getElementById('busForm').reset();
});

// JavaScript interaction for changing color on click
document.querySelectorAll('th, td').forEach(function(cell) {
    cell.addEventListener('click', function() {
        this.style.backgroundColor = this.style.backgroundColor === 'yellow' ? '' : 'yellow';
    });
});
