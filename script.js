function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("من فض

            function validateForm() {
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const message = document.getElementById('message').value;
            
                if (name === "" || email === "" || message === "") {
                    alert("من فضلك أكمل جميع الحقول.");
                    return false;
                }
            
                alert("تم إرسال رسالتك بنجاح.");
                return true;
            }
            