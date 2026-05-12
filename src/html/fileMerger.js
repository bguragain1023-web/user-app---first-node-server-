

export const mergeHtmlStrings = (userArray) => {
    console.log(userArray)
const str = userArray.reduce((acc, user) => 
    user.length ? acc + `<li>${user.split(",")[0]} : ${user.split(",")[1]} </li> `: acc , "" );




    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>User app</title>
</head>

<body>
    <div class="wrapper">
        <nav class ="navbar" style = "display:flex; justify-content:space-between; align-items:center;">
           
           <div class="container">
<div class="logo p-2">SRR</div>
            <div>
                <a href="/">Home</a>
                <a href="/login">login</a>
                <a href="/register">register</a>
            </div>

           </div>
            
        </nav>
        
        <h1 class="d-flex justify-content-center align-items-center">Welcome to the User App</h1>
        <hr>
<div class="container bg-light p-3 mb-5">
    create account with us to be connected . Thank you. please sign up now or login</div>
<div class="container bg-dark text-white border rounded p-3 mb-5">
    <h3 class="text-center">List of registered users</h3>
    <hr> <ul>`
    + str +
    
     ` </ul></div>
</body>
</html>
    
    
    `
}