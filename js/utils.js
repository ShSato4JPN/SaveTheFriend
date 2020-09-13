/*** EasyEncryptionのロジック ***/
window.onload = function() {
    // 結果表示エリア
    let txa_resutl = document.getElementById("txa-resutl");
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

    // Event : ファイル選択処理
     in_file.addEventListener("change",  function(e) {
        // FileReader クラスに対応しているか
        if(!(window.FileReader)) return;
        // ファイルリストを取得
        let file_list = e.target.files;
        // ファイル読み込み処理
        var file_reader = new FileReader();
        // ファイル読み込み成功時
        file_reader.addEventListener("load", function(e) {
              txa_resutl.textContent  = file_reader.result;
              console.log(file_reader.result);
        });
        // ファイル読み込み失敗時
        file_reader.addEventListener("error",function(e) {
            alert("読み込みが失敗した");
            console.log(file_reader.error);
        });
        // ファイル読み込み開始
        file_reader.readAsText(file_list[0]);
    });

    btn_csv.addEventListener("click", function(e) {
        alert("hello");
    });
}
