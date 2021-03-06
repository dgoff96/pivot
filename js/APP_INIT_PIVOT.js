//The MIT License (MIT)
//
//Copyright (c) 2015 Thornton Tomasetti, Inc.
//
//Permission is hereby granted, free of charge, to any person obtaining a copy
//of this software and associated documentation files (the "Software"), to deal
//in the Software without restriction, including without limitation the rights
//to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//copies of the Software, and to permit persons to whom the Software is
//furnished to do so, subject to the following conditions:
//
//The above copyright notice and this permission notice shall be included in
//all copies or substantial portions of the Software.
//
//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
//THE SOFTWARE.



//contains the jquery document.ready callback, which starts the application

//a global variable to store our running Spectacles App
//a global variable to store our running Pivot App

var mySpectacles;
var myPivot;
var layerCount = 0;
var attCount = 0;

//setup Attribute Menu to be correct size
$(document).on('shown.bs.modal','#attModal', function () {
    if(attCount === 0){
        var wide = $("#attContent").width();
        var h1 = Number($("#attBody").css("height").replace("px",""));
        var h2 = Number($("#attHeader").css("height").replace("px",""));
        var h3 = Number($("#attFooter").css("height").replace("px",""));
        var height = h1+h2+h3;
        var rect1 = document.getElementById("attModal").getBoundingClientRect();
        var rect2 = document.getElementById("attContent").getBoundingClientRect();
        var topDiff = rect1.top - rect2.top;
        $("#attDialog").css("top",topDiff.toString()+"px");
        $("#attModal").css("width",wide.toString()+"px");
        $("#attModal").css("height",height.toString()+"px");
        attCount++;
    }
});

$(document).on('shown.bs.modal','#layerModal', function () {
    if(layerCount === 0){
        var wide = $("#layerContent").width();
        var h1 = Number($("#layerBody").css("height").replace("px",""));
        var h2 = Number($("#layerHeader").css("height").replace("px",""));
        var h3 = Number($("#layerFooter").css("height").replace("px",""));
        var height = h1+h2+h3;
        var rect1 = document.getElementById("layerModal").getBoundingClientRect();
        var rect2 = document.getElementById("layerContent").getBoundingClientRect();
        var topDiff = rect1.top - rect2.top;
        $("#layerDialog").css("top",topDiff.toString()+"px");
        $("#layerModal").css("width",wide.toString()+"px");
        $("#layerModal").css("height",height.toString()+"px");
        layerCount ++;
    }
});

//fires when everything has loaded
$(document).ready(function(){
    $("#BLACKOUT").css("visibility","visible");
    //load our sample JSON file from disk
    $.getJSON("./sampleModels/RenderedPanels.json", function( data ){

        //once loaded, initialize a Spectacles viewer by passing in the div to bind to, the json data, and a callback function
        //where we can enable application functionality in nice clean chunks
//        mySpectacles = new SPECTACLES($("#Spectacles_output"), data, function(app){
//
//            //call the UI / functionality modules
//            app.userInterface();
////            app.openLocalFiles();
////            app.sceneUI();
//            //app.lightingUI();
//            //app.viewAndSelectionUI();
////            app.viewsUI();
//            app.layersUI();
////            app.colorCodingUI();
//            //app.searchUI();
////            app.timelineUI();
////            app.downloadUI();
//        });
        myPivot = new PIVOT($("#PIVOT_output"), data, function(app){
            app.layersUI();
            app.initiateAttributes();
            //app.viewAndSelectionUI();
            //app.layerList();                  
        })
        $("#BLACKOUT").css("visibility","hidden");
    });
});

                  
                  

             
