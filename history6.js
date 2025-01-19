function goBack() {
    window.location.href = 'faculty.html'; // Redirect to timetable.html
}


// Attendance
const attendanceCheckboxes = document.querySelectorAll('.attendance');
const totalStudentsEl = document.getElementById('totalStudents');
const presentCountEl = document.getElementById('presentCount');
const absentCountEl = document.getElementById('absentCount');
const attendanceDateEl = document.getElementById('attendanceDate');

// Assignment
const assignmentCheckboxes = document.querySelectorAll('.assignment');
const totalStudentsAssignmentEl = document.getElementById('totalStudentsAssignment');
const submittedCountEl = document.getElementById('submittedCount');
const notSubmittedCountEl = document.getElementById('notSubmittedCount');

// Function to update attendance counts
function updateAttendance() {
    let presentCount = 0;
    let absentCount = 0;
    const totalStudents = attendanceCheckboxes.length;

    attendanceCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            presentCount++;
        } else {
            absentCount++;
        }
    });

    presentCountEl.textContent = presentCount;
    absentCountEl.textContent = absentCount;
    totalStudentsEl.textContent = totalStudents;
}

// Function to update assignment counts
function updateAssignment() {
    let submittedCount = 0;
    let notSubmittedCount = 0;
    const totalStudents = assignmentCheckboxes.length;

    assignmentCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            submittedCount++;
        } else {
            notSubmittedCount++;
        }
    });

    submittedCountEl.textContent = submittedCount;
    notSubmittedCountEl.textContent = notSubmittedCount;
    totalStudentsAssignmentEl.textContent = totalStudents;
}

// Save attendance function
function saveAttendance() {
    const attendanceDate = attendanceDateEl.value;
    if (!attendanceDate) {
        alert('Please select a date before saving attendance.');
        return;
    }

    let attendanceData = [];
    attendanceCheckboxes.forEach((checkbox, index) => {
        attendanceData.push({
            student: checkbox.closest('tr').querySelector('td:nth-child(2)').textContent,
            present: checkbox.checked
        });
    });

    console.log('Attendance Saved:', { date: attendanceDate, attendance: attendanceData });
    alert('Attendance saved successfully!');
}

// Save assignment submission function
function saveAssignment() {
    let assignmentData = [];
    assignmentCheckboxes.forEach((checkbox, index) => {
        assignmentData.push({
            student: checkbox.closest('tr').querySelector('td:nth-child(2)').textContent,
            submitted: checkbox.checked
        });
    });

    console.log('Assignment Submission Saved:', { assignment: assignmentData });
    alert('Assignment submission saved successfully!');
}

// Event listeners
attendanceCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateAttendance);
});
assignmentCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateAssignment);
});
