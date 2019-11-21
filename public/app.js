document.addEventListener("DOMContentLoaded", function () {

    var submit = document.querySelector("#submit");



    submit.addEventListener("click", function (event) {
        event.preventDefault()
        var userInput = document.querySelector("#burgerInput").value.trim();
        var burger = {
            name: userInput
        }
        fetch("/burger", {
            method: "post",
            body: JSON.stringify(burger),
            headers: { 'Content-type': 'application/json' }
        }
        ).then(data => {
            location.reload();
        })
    });
    document.querySelectorAll(".devourButton").forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            var id = this.getAttribute("data-id")

            fetch("/burger/" + id, {
                method: "put",
                headers: { 'Content-type': 'application/json' }
            }).then(data => {
                location.reload();
            })
        })
    })

});