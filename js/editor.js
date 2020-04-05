var Editor=function(){
  var $DOM = $(''
      + '<div class="notepad-editor">'
        +'<textarea id="textVal" spellcheck="false" auto-size="none"></textarea>'
      + '</div>');
  $('body').append($DOM);

  $DOM.click(function(){
    $('#file2').css('display','none');
    $('#edit2').css('display','none');
    $('#layout2').css('display','none');
    $('#search2').css('display','none');
    $('#help2').css('display','none');
  })
}
