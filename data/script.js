$(function(){

    // metaBoxがDOMに存在しない場合
    if(!$("#metaBox")[0]){
          $("<div></div>", {
            id:"metaBox"
          }).html(function(){
            var inText = "<ul>";
            inText += "<li><span>lang: </span> " + $("html").attr("lang") + "</li>";
            inText += "<li><span>meta: </span> " + $("meta").attr("charset") + "</li>";
            inText += "<li><span>title: </span> " + $("title").text() + "</li>";
            inText += "<li><span>keywords: </span> " + $("meta[name='keywords']").attr("content") + "</li>";
            inText += "<li><span>description: </span> " + $("meta[name='description']").attr("content") + "</li>";
            inText += "<li><span>og:site_name: </span> " + $("meta[property='og:site_name']").attr("content") + "</li>";
            inText += "<li><span>og:title: </span> " + $("meta[property='og:title']").attr("content") + "</li>";
            inText += "<li><span>og:description: </span> " + $("meta[property='og:description']").attr("content") + "</li>";
            inText += "<li><span>og:url: </span> " + $("meta[property='og:url']").attr("content") + "</li>";
            inText += "<li><span>og:image: </span> " + $("meta[property='og:image']").attr("content") + "</li>";
            inText += "<li><span>og:type: </span> " + $("meta[property='og:type']").attr("content") + "</li>";
            inText += "<li><span>shortcut: </span> " + $("link[rel*='shortcut']").attr("href") + "</li>";
            inText += "<li><span>icon: </span> " + $("link[rel*='icon']").attr("href") + "</li>";
            inText += "<li><span>apple-touch-icon: </span> " + $("link[rel*='apple-touch-icon']").attr("href") + "</li>";
            inText += "</ul>";
            inText += "<div id='closeBtn'>×</div>";
            return inText
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