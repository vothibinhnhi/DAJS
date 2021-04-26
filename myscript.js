    var arr = [];
    var t;
    var m= 3;
    var s = 0;
    arr.push([
        'Trong Javascript sự kiện OnUnload thực hiện khi nào?',
        'Khi bắt đầu chương trình chạy',
        'Khi click chuột',
        'Khi kết thúc một chương trình',
        'Khi di chuyển chuột qua',
        3
    ]);
    arr.push([
        'Trong Javascript sự kiện Onblur thực hiện khi nào?',
        'Khi một đối tượng trong form mất focus',
        'Khi một đối tượng trong form có focus',
        'Khi di chuyển con chuột qua form',
        'Khi click chuột vào nút lệnh',
        1
    ]);
    arr.push([
        'Hàm prompt(…) trong JavaScript dùng để làm gì?',
        'Hiển thị thông báo nhập thông tin',
        'Hiển thị một thông báo Yes, No',
        'Không phương án nào đúng',
        'Cả hai dạng trên',
        1
    ]);
    arr.push([
        'Trong JavaScript hàm parseInt() dùng để làm gì?',
        'Chuyển một chuỗi thành số',
        'Chuyển một chuỗi thành số thực',
        'Chuyển một chuỗi thành số nguyên',
        'Chuyển một số nguyên thành một chuỗi',
        3
    ]);
    arr.push([
        'Thẻ text dùng để làm gì ? ',
        'Tạo một ô text để nhập dữ liệu 1 dòng',
        'Tạo một ô password',
        'Tạo một  textbox cho phép nhập liệu nhiều dòng',
        ' Tất cả các ý trên',
        1
    ]);
    arr.push([
        'Cách viết câu lệnh IF nào sau đây là đúng?',
        'if (i == 5)',
        'if i == 5 then',
        'if i = 5 then',
        'if i = 5',
        1
    ]);
    arr.push([
        'Trong Javascript sự kiện Onclick xảy ra khi nào?',
        'Khi một đối tượng trong form mất focus',
        'Khi một đối tượng trong form có focus',
        'Khi click chuột vào một đối tượng trong form',
        'Khi click chuột vào nút lệnh',
        4
    ]);
    arr.push([
        'Trong Javascript sự kiện OnMouseOver thực hiện khi nào?',
        'Khi một đối tượng trong form mất focus',
        'Khi một đối tượng trong form có focus',
        'Khi di chuyển con chuột qua một đối tượng trong form',
        'Khi click chuột vào nút lệnh',
        3
    ]);
    arr.push([
        'Trong Javascript sự kiện Onchange thực hiện khi nào?',
        'Khi một đối tượng trong form mất focus',
        'Khi một đối tượng trong form có focus',
        'Xảy ra khi giá trị của một trường trong form được người dùng thay đổi',
        'Khi click chuột vào nút lệnh',
        3
    ]);
    arr.push([
        'Thẻ textarea   dùng để làm gì?',
        'Tạo một ô text để nhập dữ liệu 1 dòng',
        'Tạo một  textbox cho phép nhập liệu nhiều dòng',
        'Tạo một ô password ',
        'Tất cả các ý trên',
        2
    ]);
    // ham them phan tu vao mang va tra ve do dai cua mang


    function initRow(i) { //hàm khởi tạo câu hỏi và câu trả lời 
        var s = '<tr><td style="red"; letter-spacing: 1px " colspan="4"><b>' + 'Câu ' + (i + 1) + ': ' + arr[i][0] + '</b></td></tr><tr>'
        for (j = 1; j <= 4; j++) {
            s += '<td id ="code' + i + j + '"><input type="radio" id="r' + i + j + '" name="arr' + i + '" value="' + arr[i][j] + '" ><label for="r' + i + j + '"><span></span></label> ' + arr[i][j] + '</td>'
            s += "</tr>";
        }
        return s;
    }

    // hàm tạo table
    function initQuestion() {
        var s = '<table width="100%">';
        for (i = 0; i < arr.length; i++) s += initRow(i);
        s += '</table>';
        document.getElementById('question').innerHTML = s;
    }
    initQuestion();

    function fin() {
        var tongCauHoi = arr.length;
        var cauDung = 0;
        var cauSai = 0;
        var cauChuaLam = tongCauHoi;
        var diem;
        // chạy từ câu 1 tới câu cuối
        for (i = 0; i < arr.length; i++) {
            //  chạy câu trả lời ( A B C D)
            for (k = 0; k < 4; k++) {
                // câu được chọn
                if (document.getElementsByName('arr' + i)[k].checked) {
                    cauChuaLam--;
                    // nếu câu được chon bang vi tri cua cau dung
                    //vì k bắt đầu từ 0 j bắt đầu từ 1 nên k phải + 1 trùng vị trí câu đúng
                    if ((k + 1) == arr[i][5])
                        cauDung++;
                    //  nếu chọn sai
                    else
                    // bắt tr
                    // (K+1) là câu mình chọn
                        for (j = 1; j <= 4; j++) {
                            // lấy tr được chọn
                            if (j == (k + 1)) {
                                document.getElementById('code' + i + j).style.backgroundColor = 'red';
                                cauSai++;
                            }
                        }
                        // k chọn 
                } else {
                    for (j = 1; j <= 4; j++) {
                        // láy hết cột có vị trí trùng với kết quả đúng
                        if (j == arr[i][5]) {
                            document.getElementById('code' + i + j).style.backgroundColor = 'green';
                        }
                    }

                    diem = cauDung / tongCauHoi * 10;
                    document.getElementById('kq').innerHTML = `
                Số câu đúng: ${cauDung} <br/> 
                Số câu sai: ${cauSai} <br/> 
                Số câu chưa làm: ${cauChuaLam} <br/> 
                Tổng điểm: ${diem}`;
                }
            }
        }
        document.getElementById('myBtn').disabled = true;
          clearTimeout(t);
    }
    
    function start() {
        t = setTimeout(start, 100);
        s--;
        if (s == -1) {
            s = 59;
            m--;
        }
        if (m == -1) {
            s = 0;
            m = 0;
            fin();
            document.getElementById('myBtn').disabled = true;
            clearTimeout(t);
        }
        document.getElementById('result').innerHTML = m + ":" + s;
    }
    function stop() {
        //  check_answer_correct();
          check_point();
          document.getElementById('btn_finish').disabled = true;
          clearTimeout(t);
      
      }
    start();