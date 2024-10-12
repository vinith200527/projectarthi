
var sidebar = document.querySelector(".side-navbar");

function showdata() {
    if (sidebar) {
        sidebar.style.left = "0%"; // Show the sidebar
    } else {
        console.error("Sidebar element not found.");
    }
}

function closedata() {
    if (sidebar) {
        sidebar.style.left = "-29%"; // Hide the sidebar
    } else {
        console.error("Sidebar element not found.");
    }
}