function json_callback(data){
    alert(data);
 }
 
 function w3includeHTML(level='') {
      // var z, i, elmnt, file, xhttp;
      // /* Loop through a collection of all HTML elements: */
      // z = document.getElementsByTagName("*");
      // for (i = 0; i < z.length; i++) {
      //   elmnt = z[i];
      //   /*search for elements with a certain atrribute:*/
      //   file = elmnt.getAttribute("w3-include-html");
      //   if (file) {
      //     /* Make an HTTP request using the attribute value as the file name: */
      //     xhttp = new XMLHttpRequest();
      //     xhttp.onreadystatechange = function() {
      //       if (this.readyState == 4) {
      //         if (this.status == 200) {elmnt.innerHTML = this.responseText;}
      //         if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
      //         /* Remove the attribute, and call this function once more: */
      //         elmnt.removeAttribute("w3-include-html");

              

      //         w3includeHTML();
      //       }
      //     }
      //     xhttp.open("GET", file, true);
      //     xhttp.send();
      //     /* Exit the function: */
      //     return;
      //   }
      // }

    if(level==''){
        if($('.w3-include-html').length>0){
            var el = $('.w3-include-html').first();
            var url =  $('.w3-include-html').first().attr('url');
            url = url +'?'+$.now();

            $(el).load(url,function(data){
                $('.w3-include-html').first().removeClass('w3-include-html');
                w3includeHTML(level);
            })    
        }else{

            setTimeout(function(){
                w3includeHTML(2);
            },5000)
            
        }
        
    }else{

        var el = $('.w3-include-html-'+level).first();
        var url =  $('.w3-include-html-'+level).first().attr('url');
        url = url +'?'+$.now();

        

        alert($('.w3-include-html-2').length);


        $(el).load(url,function(data){
            $('.w3-include-html-'+level).first().removeClass('w3-include-html-'+level);
            w3includeHTML(level);
        })
    }
        
}