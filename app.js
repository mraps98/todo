$(document).ready(function(){
    "use strict";

    var App = {
        todo : ["groceries","homework"],
        done : ["firstday","gitcommit"],
    };

    App.start = function(){
        App.update();
    };

    App.update = function(){
        $("#todolist").empty();
        $("#donelist").empty();
        $("#todoinput").val("");
        for(var i = 0; i < App.todo.length; i++){
            $("#todolist").append("<li><button class='donebutton' data-text='" + App.todo[i] + "'>Done</button>" + App.todo[i] + "</li>");
        }
        for(var i = 0; i < App.done.length; i++){
            $("#donelist").append("<li><button class='removebutton' data-text='" + App.done[i] + "'>Remove</button>" + App.done[i] + "</li>");
        }
    };

    $(document).on('click','#addbutton',function(){
        console.log("add");
        let temp = $("#todoinput").val();
        App.todo.push(temp);
        App.update();
    });

    $(document).on('click',".donebutton",function(){
        console.log("done");
        let temp = $(this).attr("data-text");
        let index = App.todo.indexOf(temp);
        App.todo.splice(index, 1);
        App.done.push(temp);
        App.update();
    });

    $(document).on('click',".removebutton",function(){
        console.log("remove");
        let temp = $(this).attr("data-text");
        let index = App.done.indexOf(temp);
        App.done.splice(index,1);
        App.update();
    });
    
    $(document).keypress(function(e){
        if (e.which == 13 && $("#todoinput").val() ){
            console.log("add");
            let temp = $("#todoinput").val();
            App.todo.push(temp);
            App.update();
        }
    });

    App.start();
});