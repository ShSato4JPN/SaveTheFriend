/*** EasyEncryptionのロジック ***/
window.onload = function() {
    // 結果表示エリア
    let txa_result = document.getElementById("txa-resutl");
    // ファイルのパス
    let txt_filepath = document.getElementById("in-filepath");
    // 改行コード
    let selLineFeed = document.getElementById("cmb-linefeed");
   // 処理開始ボタン
    let btn_proc = document.getElementById("btn-proc");
    // CSV出力ボタン
    let btn_csv = document.getElementById("btn-csv");
    // アップロードファイル
    let uploadFile;

    // Event : ファイル読み込み
    let reader = new FileReader();
    reader.addEventListener("load", function() {
        txt_result.value = reader.result;
    });

    // Event : ファイル選択ボタン
    btn_dialog.addEventListener("change",  function(event) {
        uploadFile = event.target.files;
        txt_filepath.value = uploadFile[0].name;
        reader.readAsText( uploadFile[0]);
    });
}
