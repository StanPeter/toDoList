// variables
var gray = "rgb(128, 128, 128)"

// function to set events on each <li>
function setEvent(tag){
    // add styiling
    $(tag).click(function(){
        $(this).toggleClass("todo-done");
    });

    //on click delete the <li>
    $(tag).children("span").click(function(event) {
        $(this).parent().fadeOut(500, function(){
            $(this).remove();
    });
    event.stopPropagation(); 
});
}

// function to add new Todo <li>
function addTodo(){
    var newTodo = $("<li id='added'></li>").html("<span ><i class='fa fa-trash'></i></span>" + $("#input").val());
    $("ul").append(newTodo);

    var tag = $("#added");
    setEvent(tag);

    $("#added").removeAttr("id");
    $("#input").val("");
};

// on "enter" add a new toDo <li>
$("#input").keypress(function(event){
    if(event.which === 13){
        addTodo();
    }
});

// fadeIn & fadeOut input text
$("#plus-icon").click(function(){
    $("#input").fadeToggle();
});

setEvent("li");
