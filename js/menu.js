var Menu=function(){
  var $bar=$('<div class="menu"></div>');

  var $bardata=$(''
      +'<ul class="nav">'
        +'<li class="file" id="file">文件(F)</li>'
        +'<li class="edit" id="edit">编辑(E)</li>'
        +'<li class="layout" id="layout">格式(O)</li>'
        +'<li class="search" id="search">查看(V)</li>'
        +'<li class="help" id="help">帮助(H)</li>'
      +'</ul>');
  $bar.append($bardata);

  var $file=$(''
      +'<ul class="file2" id="file2">'
        +'<li class="menuitem">&nbsp;&nbsp;&nbsp;新建(N)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctrl+N</li>'
        +'<li class="menuitem">&nbsp;&nbsp;&nbsp;打开(O)...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctrl+O</li>'
        +'<li class="menuitem">&nbsp;&nbsp;&nbsp;保存(S)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctrl+S</li>'
        +'<li class="menuitem">&nbsp;&nbsp;&nbsp;另存为(A)...</li>'
        +'<li class="menuitem"><hr></li>'
        +'<li class="menuitem">&nbsp;&nbsp;&nbsp;页面设置(U)...</li>'
        +'<li class="menuitem">&nbsp;&nbsp;&nbsp;打印(P)...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctrl+P</li>'
        +'<li class="menuitem"><hr></li>'
        +'<li class="menuitem">&nbsp;&nbsp;&nbsp;退出(X)</li>'
      +'</ul>');
  $bar.append($file);

  var $edit=$(''
      +'<ul class="edit2" id="edit2">'
        +'<li class="menuitem">&nbsp;&nbsp;&nbsp;撤销(U)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctrl+Z</li>'
        +'<li class="menuitem"><hr></li>'
        +'<li class="menuitem">&nbsp;&nbsp;&nbsp;剪切(T)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctrl+X</li>'
        +'<li class="menuitem">&nbsp;&nbsp;&nbsp;复制(C)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctrl+C</li>'
        +'<li class="menuitem">&nbsp;&nbsp;&nbsp;粘贴(P)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctrl+V</li>'
        +'<li class="menuitem">&nbsp;&nbsp;&nbsp;删除(L)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Del</li>'
        +'<li class="menuitem"><hr></li>'
        +'<li class="menuitem">&nbsp;&nbsp;&nbsp;使用Bing搜索...Ctrl+E</li>'
        +'<li class="menuitem">&nbsp;&nbsp;&nbsp;查找(F)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctrl+F</li>'
        +'<li class="menuitem">&nbsp;&nbsp;&nbsp;查找下一个(N)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;F3</li>'
        +'<li class="menuitem">&nbsp;&nbsp;&nbsp;替换(R)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctrl+H</li>'
        +'<li class="menuitem">&nbsp;&nbsp;&nbsp;转到(G)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctrl+G</li>'
        +'<li class="menuitem"><hr></li>'
        +'<li class="menuitem">&nbsp;&nbsp;&nbsp;全选(A)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctrl+A</li>'
        +'<li class="menuitem">&nbsp;&nbsp;&nbsp;时间/日期(D)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;F5</li>'
      +'</ul>');
  $bar.append($edit);

  var $layout=$(''
      +'<ul class="layout2" id="layout2">'
        +'<li class="menuitem2">自动换行(W)</li>'
        +'<li id="font" class="menuitem2">字体(F)...</li>'
      +'</ul>');
  $bar.append($layout);

  var $search=$(''
      +'<ul class="search2" id="search2">'
        +'<li class="menuitem2">状态栏(S)</li>'
      +'</ul>');
  $bar.append($search);

  var $help=$(''
      +'<ul class="help2" id="help2">'
        +'<li class="menuitem2">查看帮助(H)</li>'
        +'<li class="menuitem2">关于记事本(A)</li>'
      +'</ul>');
  $bar.append($help);

  $('body').append($bar);
  
  function changefile(){
    $('#file2').css('display','block');
    $('#edit2').css('display','none');
    $('#layout2').css('display','none');
    $('#search2').css('display','none');
    $('#help2').css('display','none');
  }

  function changeedit(){
    $('#edit2').css('display','block');
    $('#file2').css('display','none');
    $('#layout2').css('display','none');
    $('#search2').css('display','none');
    $('#help2').css('display','none');
  }

  function changelayout(){
    $('#layout2').css('display','block');
    $('#file2').css('display','none');
    $('#edit2').css('display','none');
    $('#search2').css('display','none');
    $('#help2').css('display','none');
  }

  function changesearch(){
    $('#search2').css('display','block');
    $('#file2').css('display','none');
    $('#edit2').css('display','none');
    $('#layout2').css('display','none');
    $('#help2').css('display','none');
  }

  function changehelp(){
    $('#help2').css('display','block');
    $('#file2').css('display','none');
    $('#edit2').css('display','none');
    $('#layout2').css('display','none');
    $('#search2').css('display','none');
  }

  $('#file').click(changefile);
  $('#edit').click(changeedit);
  $('#layout').click(changelayout);
  $('#search').click(changesearch);
  $('#help').click(changehelp);
}
