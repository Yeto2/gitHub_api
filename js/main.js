
let login;

function myFunc() {
    login = document.querySelector('#txt').value;

    $.get('https://api.github.com/users/'+login , function(data){
        render(data);
        // console.log(data)
    }).fail(function() {
            $( "#dialog" ).dialog({
                width: 600,
                modal: true,
                resizable: false,
                draggable: true
            });
    })
}
$('#img').click(function(){
    $('#img img').toggleClass( "imgEffect");
    $('#img').toggleClass( "bgimg");

})


// a function for rendering the data

function render(data) {
    $("#img").html('<img src="'+data.avatar_url+'" alt="avatar"></img>');
    $("#name").html('<p class="name">'+ data.name +  ' ( ' + data.login + ' )' + '</p>');  
    
        $(".one").html(' Created At   :  '+ data.created_at.substr(0,10));
        $(".two").html(' Followers    :  ' + data.followers );
        $(".three").html(' Following    :  '+ data.following );
        $(".four").html(' Public Repos :  '+ data.public_repos);
        $(".five").html('<a id="link" href="https://github.com/' + data.login +'">Portfolio Link</a>'); 
        
        $("li").css("background","none");
        $(".avatar").css("background","linear-gradient(40deg,#2096ff,#05ffa3)");

}