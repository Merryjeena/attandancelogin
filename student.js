// Function to display attendance data in tabular format
document.getElementById("viewAttendanceBtn").addEventListener("click", function () {
    const attendanceData = [
        { subject: "Mathematics", attended: 20, total: 25 },
        { subject: "Physics", attended: 18, total: 25 },
        { subject: "Chemistry", attended: 22, total: 25 },
        { subject: "Computer Science", attended: 25, total: 25 },
    ];

    // Build the table HTML
    let tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>Subject</th>
                    <th>Classes Attended</th>
                    <th>Total Classes</th>
                    <th>Attendance Percentage</th>
                </tr>
            </thead>
            <tbody>
    `;

    // Add rows dynamically from attendance data
    attendanceData.forEach((data) => {
        const percentage = ((data.attended / data.total) * 100).toFixed(2);
        tableHTML += `
            <tr>
                <td>${data.subject}</td>
                <td>${data.attended}</td>
                <td>${data.total}</td>
                <td>${percentage}%</td>
            </tr>
        `;
    });

    tableHTML += `
            </tbody>
        </table>
    `;

    // Display the table inside the container
    document.getElementById("attendance-table").innerHTML = tableHTML;
});
function redirectTo(page) {
    window.location.href = page;
}

    
    function toggleSidebar() {
        const sidebar = document.querySelector('.sidebar');
        const currentLeft = window.getComputedStyle(sidebar).left;

        if (currentLeft === '0px') {
            sidebar.style.left = '-250px'; // Hide the sidebar
        } else {
            sidebar.style.left = '0'; // Show the sidebar
        }
    }