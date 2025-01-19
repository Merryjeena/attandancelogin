function goBack() {
    window.location.href = 'faculty.html'; // Redirect to timetable.html
}

function editTimetable() {
    const cells = document.querySelectorAll('#timetable td span');
    
    cells.forEach(cell => {
        cell.contentEditable = true;
        cell.style.backgroundColor = '#fff'; // Make editable cells white
    });
    
    const button = document.querySelector('button');
    button.innerHTML = 'Save Time Table';
    button.setAttribute('onclick', 'saveTimetable()');
}

function saveTimetable() {
    const cells = document.querySelectorAll('#timetable td span');
    
    cells.forEach(cell => {
        cell.contentEditable = false; // Disable editing
        cell.style.backgroundColor = ''; // Remove background color
    });

    const button = document.querySelector('button');
    button.innerHTML = 'Edit Time Table';
    button.setAttribute('onclick', 'editTimetable()');
    
    // Optionally, save the timetable changes to the server or database here
    alert('Time Table Saved!');
}
