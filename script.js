
var typed = new Typed('#element', {
    strings: ['Web Developer', 'Frontend Developer'],
    typeSpeed: 50,
});



    document.getElementById("contactform").addEventListener("submit", function (event) {
        event.preventDefault(); 

      
        let username = document.querySelector("input[name='Username']").value;
        let password = document.querySelector("input[name='Password']").value;
        let gmail = document.querySelector("input[name='Gmail']").value;
        let message = document.querySelector("textarea[name='Message']").value;

        
        let outputDiv = document.getElementById("formOutput");
        outputDiv.innerHTML = `
            <h3>Submitted Data:</h3>
            <p><strong>Username:</strong> ${username}</p>
            <p><strong>Password:</strong>****</p>                                 
            <p><strong>Gmail:</strong> ${gmail}</p>
            <p><strong>Message:</strong> ${message}</p>
        `;
        document.getElementById("contactform").reset();
    });


