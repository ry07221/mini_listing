$(document).on('turbolinks:load', function() {

  // 画像用のinputを生成する関数
  const buildFileField = (index)=> {
    const html = `<div data-index="${index}" class="js-file_group">
                    <input class="js-file" type="file"
                    name="product[images_attributes][${index}][src]"
                    id="product_images_attributes_${index}_src"><br>
                    <div class="js-remove">削除</div>
                  </div>`;
    return html;
  }

  let fileIndex = [1,2,3,4,5,6,7,8,9,10];
  // file_fieldのnameに動的なindexをつける為の配列
  lastIndex = $('.js-file_group:last').data('index');
  fileIndex.splice(0, lastIndex);  //splice() : 配列から要素を削除する
                                   //→ 編集画面ではすでに画像のinput要素に対して添え字が割り当てられているため、
                                   //  編集画面で新しく画像を追加する際に数字の辻褄が合うようにする
  $('.hidden-destroy').hide();

  $('#image-box').on('change', '.js-file', function(e) {  //「changeメソッド」: 値が変更された際にイベントを発生させるメソッド

    $('#image-box').append(buildFileField(fileIndex[0]));
    fileIndex.shift();
    // fileIndexの先頭の数字を使ってinputを作る

    fileIndex.push(fileIndex[fileIndex.length - 1] + 1)
    // 末尾の数に1足した数を追加する
  });

  $('#image-box').on('click', '.js-remove', function() {
    $(this).parent().remove();
    // 画像入力欄が0個にならないようにしておく
    if ($('.js-file').length == 0) $('#image-box').append(buildFileField(fileIndex[0]));
  });
  });

  