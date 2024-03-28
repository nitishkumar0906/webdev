async function fetchUserData(){
    const url = "https://api.github.com/users";
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
async function getUsers(){
    const users = await fetchUserData();
    console.log(users)
}
getUsers();