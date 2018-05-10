/**
 *
 * Random Quote Machine (A FreeCodeCamp project)
 * by Oleg Shunkov (shaman771 at gmail dot com)
 *
 */

$(function() {
   
   getQuote();
   
   $("#newQuote").on("click", function() {
     getQuote();
   });
   
   function getQuote() {
      
      var quoteAPI = "https://talaikis.com/api/quotes/random/";
      var quote = {};
      
      $.getJSON(quoteAPI, function (data) {
        
         quote.text = data.quote;
         quote.author = data.author;
         quote.category = data.cat[0].toUpperCase() + data.cat.slice(1);

         $("#quote").html(quote.text);
         $("#author").html(quote.author);
         $("#category").html(quote.category);

         setTwitterShareBtn(quote.text + " (" + quote.author + " on " + quote.category + ")");
         setTumblrShareBtn(quote.text, quote.author + " on " + quote.category);
         
      });

   }

  function setTwitterShareBtn(text, related="FreeCodeCamp", hashtags="quotes") {
    var url = "https://twitter.com/share?";
    url += "hashtags=" + encodeURIComponent(hashtags);
    url += "&related=" + encodeURIComponent(related);
    url += (text) ? "&text=" + encodeURIComponent(text) : '';
    $(".twitter-share").attr("href", url );
        
  }

  function setTumblrShareBtn(text, caption, tags="quotes,FreeCodeCamp,quotemachine") {
    var url = "https://www.tumblr.com/widgets/share/tool?";
    url += "posttype=quote";
    url += "&tags=" + encodeURIComponent(tags);
    url += (caption) ? "&caption=" + encodeURIComponent(caption) : '';
    url += (text) ? "&content=" + encodeURIComponent(text) : '';
    url += "&canonicalUrl=" + encodeURIComponent("https://www.tumblr.com/buttons&shareSource=tumblr_share_button");
    $(".tumblr-share").attr("href", url );
        
  }

});
