function searchStudent() {
    var name = document.getElementById("name").value;
    document.getElementById("result").innerText =
        "Searching student: " + name;
}