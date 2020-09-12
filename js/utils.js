/*** EasyEncryptionのロジック ***/
window.onload = function() {
    // 結果表示エリア
    let txa_result = document.getElementById("txa-result");
    // 選択された改行コード
    let selLinefeed = document.getElementById("cmb-linefeed");
    // 処理開始ボタン
    let btn_proc = document.getElementById("btn-proc");
    // ファイル名表示用
    let in_fileName = document.getElementById("in-fileName");
    // ファイル読み込みボタン
    let in_file = document.getElementById("in-file");
    // csv出力ボタン
    let btn_csv = document.getElementById("btn-csv");
    // アップロードファイル
    let uploadFile;

    // Event : ファイル読み込み
    let reader = new FileReader();
    reader.addEventListener("load", function() {
        txa_result.value = reader.result;
    });

    // Event : ファイル選択ボタン
      in_file.addEventListener("change",  function(event) {
          uploadFile = event.target.files;
          in_fileName.value = uploadFile[0].name;
          reader.readAsText( uploadFile[0]);
      });
}
