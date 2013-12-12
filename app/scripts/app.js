/*global define */
define([], function () {
    'use strict';
    var highlight = function(button, color) {
      var oldColor = button.css("background-color")
      button.css("background-color", color)
      setTimeout(function() {
         button.css("background-color", oldColor)
      }, 200)
/*
      var oldColor = button.css("background-color")
      button.css("background-color", color)
            .delay(200)
            .queue( function() {
                    button.css("background-color", oldColor).dequeue()
                  })
      setTimeout(function() {
        button.css("background-color", oldColor)
      }, 100);
*/
    }
    
    var userClicks = new Array()
    var buttonList
    var computerSequence = new Array()
    
    $(document).ready(function() {
        buttonList = jQuery.map( $(".button"),
                       function(element) {
                         return $(element).attr('id')
                       })
        $(".button").click( function(){
             computerSequence.push( buttonList[
                                      Math.floor(Math.random()
                                        * buttonList.length)] )
             console.log(computerSequence)
             var thisId = $(this).attr('id')
             if(thisId === buttonList[0]) {
               userClicks.push(thisId)
               highlight($(this), "yellow")
             } else if ( thisId === buttonList[1]) {
               userClicks.push(thisId)
               highlight($(this), "#aa0")
             } else if ( thisId === buttonList[2]) {
               userClicks.push(thisId)
               highlight($(this), "#00a")
             } else if ( thisId === buttonList[3]) {
               userClicks.push(thisId)
               highlight($(this), "#0a0")
             } else {
               console.log("Wrong button ID detected")
             }
             //console.log(userClicks)
        })
    })
    return "<============== OK";

    return '\'Allo \'Allo!';
});

