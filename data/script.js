$(function(){

    function getUrl(url) {
        if(url){
            return url.match(/^(.*?:\/\/)(.*?)([a-z0-9][a-z0-9\-]{1,63}\.[a-z\.]{2,6})[\:[0-9]*]?([\/].*?)?$/i);
        }else{
            return false;
        }
    }
        var url1 = $("meta[property='og:image']").attr("content");
        var url2 = getUrl(url1);
        var url3 = getUrl(location.href);

    if(url2){
        var url4 = url3[1] + url3[2] +  url3[3] + url2[4];
    }else{
        var url4 = undefined;
    }

    // metaBoxがDOMに存在しない場合
    if(!$("#metaBox")[0]){
          $("<div></div>", {
            id:"metaBox"
          }).html(function(){
            var inText = "<ul>";
            inText += "<li><span>lang: </span> " + $("html").attr("lang") + "</li>";
            inText += "<li><span>charset: </span> " + $("meta").attr("charset") + "</li>";
            inText += "<li><span>title: </span> " + $("title").text() + "</li>";
            inText += "<li><span>keywords: </span> " + $("meta[name='keywords']").attr("content") + "</li>";
            inText += "<li><span>description: </span> " + $("meta[name='description']").attr("content") + "</li>";
            inText += "<li><span>og:site_name: </span> " + $("meta[property='og:site_name']").attr("content") + "</li>";
            inText += "<li><span>og:title: </span> " + $("meta[property='og:title']").attr("content") + "</li>";
            inText += "<li><span>og:description: </span> " + $("meta[property='og:description']").attr("content") + "</li>";
            inText += "<li><span>og:url: </span> " + $("meta[property='og:url']").attr("content") + "</li>";
            inText += "<li><span>og:type: </span> " + $("meta[property='og:type']").attr("content") + "</li>";
            inText += "<li><span>shortcut: </span> " + $("link[rel*='shortcut']").attr("href") + "</li>";
            inText += "<li><span>icon: </span> " + $("link[rel*='icon']").attr("href") + "</li>";
            inText += "<li><span>apple-touch-icon: </span> " + $("link[rel*='apple-touch-icon']").attr("href") + "</li>";
            inText += "<li><span>og:image: </span> " + url1 + "</li>";
            if(url1){inText += "<li><img src ='" + url1 + "' height='45'></li>"};
            inText += "<li><span>og:image TestServer: </span> " + url4 + "</li>";
            if(url4){inText += "<li><img src ='" + url4 + "' height='45'></li>"};
            inText += "</ul>";
            inText += "<div id='closeBtn'>×</div>";
            return inText;
          }).appendTo($("body"))
            .find("#closeBtn")
            .on("click",(function(){
                $(this).parent().fadeOut(1);
            })
          )
    }else{
    // metaBoxがDOMに存在する場合
        if($("#metaBox").css("display") !== "block"){
            $("#metaBox").fadeIn(1);
        }else{
            $("#metaBox").fadeOut(1);
        }
    }

});