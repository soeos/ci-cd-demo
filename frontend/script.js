function sayHello() {
    const message = document.getElementById("message");

    message.textContent = "✓ CI/CD Pipeline is working!";

    setTimeout(() => {
        message.textContent = "";
    }, 3000);
}