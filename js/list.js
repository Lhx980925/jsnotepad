var List=function(){
  //数据
  var fonts = ['Agency FB', 'Algerian', 'Arial', 'Arial Rounded MT', 'Axure Handwriting', 'Bahnschrift', 'Baskerville Old Face', 'Bauhaus 93', 'Bell MT', 'Berlin Sans FB', 'Bernard MT', 'BlackAdder ITC'],
      styles = ['常规', '斜体', '粗体', '粗偏斜体'],
      sizes = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72'];
  var arr1=[],
      arr2=[],
      arr3=[];
  
  //初始框架
  var $div=$('<div class="mask font" id="mask"></div>'),
      $box=$('<div class="dialogbox dlgbox" ></div>'),
      $main=$('<div class="main notepad-dlg-main"></div>'),
      $title=$('<div class="titlebar"></div>');

  //标题
  var $p=$('<p class="title">字体</p>'),
      $span=$('<p class="close-btn" title="关闭">×</span>');
  $title.append($p);
  $title.append($span);
  $box.append($title);

  //字体
  var $list1=$('<div class="font-family"></div>'),
      $listdata1=$('<ul class="list"></ul>'),
      $span1=$('<span>字体(F):</span>'),
      $text1=$('<input type="text" class="text" value="Arial">');
  for(var i=0;i<fonts.length;i++){
    arr1.push($('<li style="font-family:'+fonts[i]+';list-style:none;" class="item">'+fonts[i]+'</li>'));
  }
  for(var i=0;i<arr1.length;i++){
    $listdata1.append(arr1[i]);
  }
  $list1.append($span1);
  $list1.append($text1);
  $list1.append($listdata1);
  $main.append($list1);

  for(var i=0;i<arr1.length;i++){
    (function(i){
      $(arr1[i]).click(function(){
        $text1.val(arr1[i][0].innerHTML);
        $("#example").css('font-family',arr1[i][0].innerHTML);
      })
    })(i)
  }

  //粗细
  var $list2=$('<div class="font-style"></div>'),
      $span2=$('<span>字形(Y):</span>'),
      $text2=$('<input type="text" class="text" value="常规">'),
      $listdata2=$(''
      +'<ul class="list">'
        +'<li style="list-style:none;" class="item">常规</li>'
        +'<li style="font-style:italic;list-style:none;" class="item">斜体</li>'
        +'<li style="font-weight:bold;list-style:none;" class="item">粗体</li>'
        +'<li style="font-style:italic;font-weight:bold;list-style:none;" class="item">粗偏斜体</li>'
      +'</ul>');
  $list2.append($span2);
  $list2.append($text2);
  $list2.append($listdata2);
  $main.append($list2);

  $($listdata2[0].children[0]).click(function(){
    $text2.val($listdata2[0].children[0].innerHTML);
    $("#example").css('font-style','normal');
    $("#example").css('font-weight','normal');
  })
  $($listdata2[0].children[1]).click(function(){
    $text2.val($listdata2[0].children[1].innerHTML);
    $("#example").css('font-style','italic');
    $("#example").css('font-weight','normal');
  })
  $($listdata2[0].children[2]).click(function(){
    $text2.val($listdata2[0].children[2].innerHTML);
    $("#example").css('font-style','normal');
    $("#example").css('font-weight','bold');
  })
  $($listdata2[0].children[3]).click(function(){
    $text2.val($listdata2[0].children[3].innerHTML);
    $("#example").css('font-style','italic');
    $("#example").css('font-weight','bold');
  })

  //大小
  var $list3=$('<div class="font-size"></div'),
      $listdata3=$('<ul class="list"></ul>'),
      $span3=$('<span>大小(S):</span>'),
      $text3=$('<input type="text" class="text" value="16">');
  for(var i=0;i<sizes.length;i++){
    arr3.push($('<li style="list-style:none;" class="item">'+sizes[i]+'</li>'))
  }
  for(var i=0;i<arr3.length;i++){
    $listdata3.append(arr3[i]);
  }
  $list3.append($span3);
  $list3.append($text3);
  $list3.append($listdata3);
  $main.append($list3);

  for(var i=0;i<arr3.length;i++){
    (function(i){
      $(arr3[i]).click(function(){
        $text3.val(arr3[i][0].innerHTML);
        $("#example").css('font-size',arr3[i][0].innerHTML+'px');
      })
    })(i)
  }
  
  //示例
  var $example=$('<fieldset class="examplebox"></fieldset>'),
      $tit=$('<legend>示例</legend>'),
      $word=$('<p class="example" id="example">AaBbYyZz</p>');
  $example.append($tit);
  $example.append($word);
  $main.append($example);
  
  //脚本
  var $script=$(''
      +'<div class="script">'
        +'<label>'
          +'脚本(R):'
          +'<br>'
          +'<select>'
            +'<option value="西欧语言">西欧语言</option>'
            +'<option value="中文 GB2312">中文 GB2312</option>'
          +'</select>'
        +'</label>'
      +'</div>');
  $main.append($script);
  
  //按钮
  var $ok=$('<input type="button" class="btn1" value="确定">'),
      $cel=$('<input type="button" class="btn2" value="取消">');
  $main.append($ok);
  $main.append($cel);
  
  $box.append($main);
  $div.append($box);
  $('body').append($div);
  $div.find('.dialogbox').draggable({handle: $title});

  $span.click(function(){
    $('#mask').css('display','none');
  })
  
  $ok.click(function(){
    $("#textVal").css('font-family',$text1.val());

    if($text2.val()=='常规'){
      $("#textVal").css('font-style','normal');
      $("#textVal").css('font-weight','normal');
    }else if($text2.val()=='斜体'){
      $("#textVal").css('font-style','italic');
      $("#textVal").css('font-weight','normal');
    }else if($text2.val()=='粗体'){
      $("#textVal").css('font-style','normal');
      $("#textVal").css('font-weight','bold');
    }else{
      $("#textVal").css('font-style',"italic");
      $("#textVal").css('font-weight',"bold");
    }

    $("#textVal").css('font-size',$text3.val()+'px');

    $("#mask").css('display','none');
  })
  $cel.click(function(){
    $("#mask").css('display','none');
    var family=$("#textVal").css('font-family');
    if(family.indexOf("\"")==0){
      $text1.val(family.match(/(?<=\")(.*)(?=\")/g));
      $("#example").css("font-family",family.match("\"[^\"]*\""));
    }else{
      $text1.val(family);
      $("#example").css('font-family',family);
    }
    
    if($("#textVal").css('font-style')=='normal'){
      if($("#textVal").css('font-weight')==400){
        $text2.val('常规');
        $("#example").css('font-style','normal');
        $("#example").css('font-weight','normal');
      }else{
        $text2.val('粗体');
        $("#example").css('font-style','normal');
        $("#example").css('font-weight','bold');
      }
    }else{
      if($("#textVal").css('font-weight')==400){
        $text2.val('斜体');
        $("#example").css('font-style','italic');
        $("#example").css('font-weight','normal');
      }else{
        $text2.val('粗偏斜体');
        $("#example").css('font-style','italic');
        $("#example").css('font-weight','bold');
      }
    }

    var size=$("#textVal").css('font-size');
    $text3.val(size.match(/\d+/g)[0]);
    $("#example").css('font-size',size);
  })
}
