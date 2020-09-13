/*** EasyEncryptionのロジック ***/
window.onload = function() {
    // ファイルデータ表示
    let txa_target = document.getElementById("txa-target");
    // 結果表示エリア
    let txa_result = document.getElementById("txa-result");
    // ファイル読み込みボタン
    let in_file = document.getElementById("in-file");
    // 置換文字列
    let in_replace = document.getElementById("in-replace");
    // 処理開始ボタン
    let btn_proc = document.getElementById("btn-proc");
    // csv出力ボタン
    let btn_csv = document.getElementById("btn-csv");

    // Event : ファイル選択処理
     in_file.addEventListener("change",  function(e) {
        // FileReader クラスに対応しているか
        if(!(window.FileReader)) return;
        // ファイルリストを取得
        let file_list = e.target.files;
        // ファイル読み込み処理
        let file_reader = new FileReader();
        // ファイル読み込み成功時
        file_reader.addEventListener("load", function(e) {
              txa_target.value  = file_reader.result;
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

    // データ変換処理
    btn_proc.addEventListener("click", function(e) {
        // 取込データ
        let dt = txa_target.value;
        // 変換データ
        let bufdt = "";
        // 置換文字
        let chgstr = in_replace.value;
        // 対象文字
        let chr = "";
        // ダブルクォーテーション数
        let count = 0

       if (chgstr == "" ||  chgstr == undefined) {
           alert("改行コードを空文字で置き換えます。");
           chgstr = "";
        }

        if (txa_target.value == "" ||  txa_target.value == undefined) {
            alert("変換するデータを入力してください。");
            return;
         }

        for(i = 0; i < dt.length - 1; i++) {
          chr = dt.charAt(i);
          // ダブルクォーテーションカウント
          if(chr == "\"" && (dt.charAt(i + 1) != "," || dt.charAt(i - 1) != ",")){ count++; }
          if(count < 2){
              // 改行コードを変換する
              if(chr == "\n" && count != 0){  chr = chgstr; }
          } else {
              count = 0; // カウント初期化
          }
           bufdt = bufdt + chr;
      }
      console.log(bufdt);
        txa_result.value = bufdt + "\"";
        return;
    });

    // CSVファイル出力処理
    /*
    btn_csv.addEventListener("click", function(e) {
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display:none";

        const blob = new Blob([content], { type: "text/csv"});
        const url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url); // release the used object.
        a.parentNode.removeChild(a); // delete the temporary "a" element
    });
    */
}
