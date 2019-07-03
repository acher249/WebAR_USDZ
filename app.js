$( document ).ready(function() {
    // console.log( "ready!" );

    //  check which browser the user is on.. Then curate the page.
    var browserString = navigator.sayswho;
    // console.log(browserString);

    // if iOS
    if(browserString.includes("Safari")){

        console.log("Adam - you are in the Safari browser.. so you should be on an iOS phone ")
        $('#ios_quickLook').removeClass('hide');
        $('#ios_quickLook').addClass('show');
    
        $('#android_quickLook').removeClass('show');
        $('#android_quickLook').addClass('hide');

    }
    else if(browserString.includes("Chrome")){

        console.log("Adam - you are in the Chrome browser.. so you should be on an android phone ")
        $('#ios_quickLook').removeClass('show');
        $('#ios_quickLook').addClass('hide');
    
        $('#android_quickLook').removeClass('hide');
        $('#android_quickLook').addClass('show');

    }
    else if(!browserString.includes("Chrome") && !browserString.includes("Safari")){

        alert(" YOU NEED TO BE ON EITHER SAFARI ON iOS or CHROME ON ANDROID ");
    }

});

// find what browser the user is using
navigator.sayswho= (function(){
    var N= navigator.appName, ua= navigator.userAgent, tem,
    M= ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*([\d\.]+)/i);
    if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
    M= M? [M[1], M[2]]:[N, navigator.appVersion, '-?'];
    return M.join(' ');
})();