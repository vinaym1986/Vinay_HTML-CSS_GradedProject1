document.getElementById("labTestForm").addEventListener("submit", function(event) {
    var checkboxes = document.querySelectorAll('input[name="testType"]:checked');
    if (checkboxes.length === 0) {
        event.preventDefault();
        document.getElementById("testTypeError").style.display = "block";
    } else {
        document.getElementById("testTypeError").style.display = "none";
    }
});
