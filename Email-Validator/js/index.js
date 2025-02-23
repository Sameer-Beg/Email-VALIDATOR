console.log("this is my script");

let results = {
    "tag": "",
    "free": true,
    "role": false,
    "user": "sameer7080000",
    "email": "sameer7080000@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
}

submitbtn.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("clicked!");
    
    resultcont.innerHTML = `<img width="42px" src="img/loading.svg" alt="">`;

    let key = "ema_live_YRbYvozB4OzUxCuIBlMRCNlOMhaPkS4Gd9NwxiHN";
    let email = document.getElementById("username").value;
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
    
    let res = await fetch(url);
    let results = await res.json();

    let str = ``;
    for (let key of Object.keys(results)) {
        if (results[key] !== null && results[key] !== " ") {  // ✅ Fixed condition
            str += `<div>${key}: ${results[key]}</div>`;
        }
    }
    
    console.log(str);
    resultcont.innerHTML = str;
});
