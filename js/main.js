function checkAge(){
    var nam=document.getElementById("nam").value;
    var thang=document.getElementById("thang").value;
    var ngay=document.getElementById("ngay").value;
    if(thang<=0 || thang >12 || ngay<=0 || ngay >31){
        console.log("Nhập lại");
        document.getElementById("result").value="Nhập lại";
    }
    else{
        var date=new Date();
        var theDate= date.getDate();
        var theMonth= date.getMonth();
        var theYear= date.getFullYear();
        var age=theYear-nam;
        if(theMonth<thang-1){
            age--;
        }
        if(theMonth==thang-1 && theDate<ngay){
            age--;
        }
        //return age;
        console.log(age);
        if(age>=18){
            //document.write("Người lớn");
            console.log("Người lớn");
            document.getElementById("result").value="Người lớn";
        }
        else {
            //document.write("Vị thành niên");
            console.log("Vị thành niên");
            document.getElementById("result").value="Vị thành niên";
        }
    }

}

function checkEvenOdd(){
    var number=parseFloat(document.getElementById("number").value);
    if(isNaN(number)){
        console.log("Chưa nhập số");
        document.getElementById("result2").value = "Chưa nhập số";
    }
    else{
        if(number%2==0){
            console.log("Số chắn");
            document.getElementById("result2").value = "Số chẵn";
        }
        else {
            console.log("Số lẻ");
            document.getElementById("result2").value = "Số lẻ";
        }
    }
}

function compareNumbers(){
    var number1=parseFloat(document.getElementById("number1").value);
    var number2=parseFloat(document.getElementById("number2").value);
    if(isNaN(number1) || isNaN(number2)){
        console.log("Chưa nhập số");
        document.getElementById("result3").value = "Chưa nhập số";
    }
    else{
        if(number1>number2){
            console.log("Số thứ nhất lớn hơn");
            document.getElementById("result3").value = "Số thứ nhất lớn hơn";
        }
        else{
            console.log("Số thứ hai lớn hơn");
            document.getElementById("result3").value = "Số thứ hai lớn hơn";
        }
    }

}

function checkInterger(){
    var number_Bai4 = parseFloat(document.getElementById("number_Bai4").value);
    if(isNaN(number_Bai4)){
        console.log("Chưa nhập số");
        document.getElementById("result4").value = "Chưa nhập số";
    }
    else{
        if(number_Bai4 % 1 == 0){
            console.log("Số nguyên");
            document.getElementById("result4").value = "Số nguyên";
        }
        else {
            console.log("Không phải số nguyên");
            document.getElementById("result4").value = "Không phải số nguyên";
        }
    }

}

function convertNumberToMonth(){
    var thang=document.getElementById("number_Bai5").value;

    var months = [
        "Tháng Một", "Tháng Hai", "Tháng Ba", "Tháng Tư", "Tháng Năm", "Tháng Sáu",
        "Tháng Bảy", "Tháng Tám", "Tháng Chín", "Tháng Mười",
        "Tháng Mười Một", "Tháng Mười Hai"
    ];
        if (thang >= 1 && thang <= 12) {
            console.log(months[thang - 1]);
            document.getElementById("result5").value = months[thang-1];
        }
        else {
            console.log("Số tháng không hợp lệ. Vui lòng nhập số từ 1 đến 12.");
            document.getElementById("result5").value = "Số tháng không hợp lệ (1-12)"
        }
}

function calculateShipping(){
    var soKm = parseFloat(document.getElementById("number_Bai6").value);
    if(isNaN(soKm)|| soKm < 0){
        console.log("Nhập sai | chưa nhập > Nhập lại");
        document.getElementById("result6").value = "Nhập sai | chưa nhập > Nhập lại";
    }
    else{
        if(soKm >= 0 && soKm <= 5){
            var tien = soKm * 7000;
        }
        else if(soKm >5 ){
            var tien = (soKm - 5) * 2000 + 7000*5;
        }
        const tien_format = tien.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'});
        console.log(tien_format);
        document.getElementById("result6").value = tien_format;
    }

}

function gradeExam(){
    var diem = parseFloat(document.getElementById("number_Bai7").value);
    if(isNaN(diem)){
        console.log("Chưa nhập điểm");
        document.getElementById("result7").value = "Chưa nhập điểm";
    }
    else{
        if(diem >= 0 && diem <= 100){
            if(diem >= 90){
                console.log("Xuất sắc");
                document.getElementById("result7").value = "Xuất sắc";
            }
            else if(diem >= 80){
                console.log("Giỏi");
                document.getElementById("result7").value = "Giỏi";
            }
            else if(diem >= 70){
                console.log("Khá");
                document.getElementById("result7").value = "Khá";
            }
            else if(diem >= 60){
                console.log("Trung Bình");
                document.getElementById("result7").value = "Trung Bình";
            }
            else if(diem < 60){
                console.log("Yếu");
                document.getElementById("result7").value = "Yếu";
            }
        }
        else {
            console.log("Nhập lại: 0-100");
            document.getElementById("result7").value = "Nhập lại: 0-100";
        }
    }

}

