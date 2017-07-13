/**
 * Created by orrro on 7/13/2017.
 */

var main = function () {
  console.log("hello world!");

  var url = "https://api.flickr.com/services/feeds/photos_public.gne?tags=horses&format=json&jsoncallback=?";
  $.getJSON(url, function (response) {
      response.items.forEach(function (photo) {
          console.log(photo.media.m);
          var jqImg = $("<img>").hide();
          jqImg.attr("src", photo.media.m);
          $("main .photos").append(jqImg);
          jqImg.fadeIn();
      });
  });
};

$(document).ready(main);
