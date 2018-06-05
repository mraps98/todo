$(document).ready(function(){
    "use strict";

    var App = {
        todo : ["Groceries","Homework"],
        done : ["Internship","Git Commit"],
    };

    App.start = function(){
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

        $(document).on('click','.clickableitem',function(){
            let id = $(this).attr("data-index");
            $("#"+id).hide();
            $("#listitem"+id).show();
        });

        $(document).on('click','.doneeditbutton',function(){
            let index = $(this).attr('data-input');
            let value = $("#input"+index).val();
            App.todo[index] = value;
            App.update();
        });
        App.update();
    };

    App.update = function(){
        $("#todolist").empty();
        $("#donelist").empty();
        $("#todoinput").val("");
        for(var i = 0; i < App.todo.length; i++){
            $("#todolist").append("<li id='"+ i + "' class='listitem'><button class='donebutton' data-text='" + App.todo[i] + "'>Done</button> <span class='clickableitem' data-index='"+ i + "'>" + App.todo[i] + "</span></li><li class='editinput' id='listitem"+i + "'><button class='doneeditbutton' data-input='"+i+"'>Done</button><input id='input" + i + "' type='text' value ='" + App.todo[i] + "'></li>");
        }
        for(var i = 0; i < App.done.length; i++){
            $("#donelist").append("<li><button class='removebutton' data-text='" + App.done[i] + "'>Remove</button> " + App.done[i] + "</li>");
        }
        $(".editinput").hide();
    };

    App.start();
});