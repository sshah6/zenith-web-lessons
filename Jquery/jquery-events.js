$(document).ready(function(){
    //in Vanilla JS
    // document.querySelector('#log-in').addEventListener("click", function(){
    //     alert("log in button pushed");
    // })

    //In JQuery
    let $login = $('#log-in');
    $login.on('mouseover', function(){
        alert("Button pushed");
    });
    
    // let $login = $('#log-in');
    $login.on('mousein', function(){
        alert("Button pushed");
    });
    
    // let $login = $('#log-in');
    $login.on('mouseout', function(){
        alert("Button pushed");
    });
    
});