//paste in the console (press F12 or ctrl + shift + i go to the console section and paste the code in there)

function login(token)
{
    //create an item in local storage with the key = token and the value = the token you put
    setInterval(() => {
        document.body.appendChild(document.createElement(`iframe`)).contentWindow.localStorage.token = `"${token}"`
    }, 50);

    //after 2.5s reload the page
    setTimeout(() => {
        location.reload();
    }, 2500);
}

//login to the token's user
login('your token');
