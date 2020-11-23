
// Get the numerical order of the current image
function imagechoice(direction){
    var img =document.querySelector("#DisplayedImg").src;
    var shortimg =img.slice(-5,);

// Load and display next image as required
// Built with four images by default
// Can change "4" to the amount of images or link it to the amount of hidden divs    
    if (direction =="Next"){
        if (shortimg[0] <4){
            var newimgshort =String(Number(shortimg[0])+1);
            var newimg =img.slice(0,-5) + newimgshort + img.slice(-4,);
            document.querySelector("#DisplayedImg").setAttribute ("src", newimg);
            document.querySelector("#FullScreenImg").setAttribute ("src", newimg);
            console.log(document.querySelector("#ImageTitle").innerHTML);
            var newtitle =document.querySelector("#HiddenNames"+newimgshort).innerHTML;
            document.querySelector("#ImageTitle").innerHTML=newtitle;
        }
        else{
            // Allows wrap-around to first image once final one has been loaded
            var newimgshort =1;
            var newimg =img.slice(0,-5) + newimgshort + img.slice(-4,);
            document.querySelector("#DisplayedImg").setAttribute ("src", newimg);
            document.querySelector("#FullScreenImg").setAttribute ("src", newimg);
            var newtitle =document.querySelector("#HiddenNames1").innerHTML;
            document.querySelector("#ImageTitle").innerHTML=newtitle;
        }
    }
    // Opposite logic to above so that previous images can be displayed
    else if (direction=="Previous"){

        if (shortimg[0] >1){
            var newimgshort =String(Number(shortimg[0])-1);
            var newimg =img.slice(0,-5) + newimgshort + img.slice(-4,);
            document.querySelector("#DisplayedImg").setAttribute ("src", newimg);
            document.querySelector("#FullScreenImg").setAttribute ("src", newimg);
            var newtitle =document.querySelector("#HiddenNames"+newimgshort).innerHTML;
            document.querySelector("#ImageTitle").innerHTML=newtitle;
        }
        else{
            var newimgshort =4;
            var newimg =img.slice(0,-5) + newimgshort + img.slice(-4,);
            document.querySelector("#DisplayedImg").setAttribute ("src", newimg);
            document.querySelector("#FullScreenImg").setAttribute ("src", newimg);
            var newtitle =document.querySelector("#HiddenNames4").innerHTML;
            document.querySelector("#ImageTitle").innerHTML=newtitle;
        }
    }
}
// "1.25" is arbitrary based on visual testing and original size (see CSS)
// Loads a hidden version of the image at the larger size
// Maintains aspect ratio
// Will assume screen is in landscapr orientation
function fullscreen(direction){   
    var resizing_val =1.25;
    var img =document.querySelector("#DisplayedImg");
    var fimg = document.querySelector("#FullScreenImg");
    var og_width =img.clientWidth;
    var og_height =img.clientHeight;
    
    // Display of larger image linked to onmouseover property
    if (direction =='In'){ 
        document.querySelector("#FullScreenBg").setAttribute("style","display:block");

        if(og_width>og_height){      
            var max_width = Math.round(og_width*resizing_val);
            // Increase height to same proportion as width
            var newh = (((max_width-og_width)/og_width)+1)*og_height;
            document.querySelector("#FullScreenImg").setAttribute("style",`display:block; width:${max_width}px;height:${newh}px;`);
        }

        else if (og_width<og_height){
            var max_height = Math.round(og_height*resizing_val);
            document.querySelector("#FullScreenImg").setAttribute("style",`display:block; height:${max_height}px;`);
        }
            
    }
    // Hide the larger image and re-show the background/buttons once mouse leaves it
    else if (direction !='In'){
            fimg.setAttribute("style","display:none;");
            document.querySelector("#FullScreenBg").setAttribute("style","display:none");
    }        
}