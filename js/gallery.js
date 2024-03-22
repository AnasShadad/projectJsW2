/*Name this external file gallery.js*/

function upDate(previewPic){
     var _element=document.querySelector("#image");    
       var _url='url'+'('+previewPic.src+')';
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" to the source file of the preview image*/
       _element.style.backgroundImage=_url;
      /*    2) Change the text  of the div with the id = "image" to the alt text of the preview image */
      _element.textContent=previewPic.alt;
      //  TextTrackList
         console.log('url'+'('+previewPic.src+')');
    }
   
       function unDo(){
         document.querySelector("#image").textContent="Hover over an image below to display here";
         document.querySelector("#image").style.backgroundImage="URL('')" ;
       }
   
   
   
   
   
   
   
   