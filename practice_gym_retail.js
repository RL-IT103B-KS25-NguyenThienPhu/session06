let currentOrderCode = "";
let isOrderValid = false;
let totalRevenue = 0;
let totalOrders = 0;
let choice = "";
let priceShaker = 120000;
let priceGloves = 180000;
let priceStrap = 150000;

do {
    choice = prompt(`
    ========Bán lẻ Phụ kiện & Xử lý Biên lai Dòng lệnh Phòng Gym==========
    1. Nhập và chuẩn hóa mã đơn hàng
    2. Tính tiền và in hóa đơn
    3. Thoát chương trình`);
    if (choice === null) choice = "";
    choice = choice.trim();
    switch (choice) {
        case "1":
            currentOrderCode = "";
            isOrderValid = false;
            let nhapMa = prompt("Nhập mã đơn hàng:");
            if (nhapMa === null || nhapMa.trim() === "") {
                console.log("Chưa nhập mã đơn hàng");
                break;
            }
            nhapMa = nhapMa.trim().toUpperCase();
            if (nhapMa.length < 8) {
                console.log("Độ dài nhỏ hơn 8 ký tự");
            } else if (!nhapMa.startsWith("GYM-")) {
                console.log("Sai tiền tố GYM-");
            } else {
                let kyTuHopLe = true;
                for (let i = 4; i < nhapMa.length; i++) {
                    if (nhapMa[i] !== "S" && nhapMa[i] !== "G" && nhapMa[i] !== "T") {
                        kyTuHopLe = false;
                    }
                }
                if (kyTuHopLe === false) {
                    console.log("Mã chỉ được chứa ký tự S, G, T sau GYM-");
                } else {
                    currentOrderCode = nhapMa;
                    isOrderValid = true;
                    console.log("Hợp lệ! Mã đơn hàng: " + currentOrderCode);
                }
            }
            break;

        case "2":
            if (isOrderValid === false) {
                console.log("Chưa có mã hợp lệ!");
                break;
            }
            let vip = prompt("Khách có thẻ VIP:");
            if (vip === null) vip = "";
            let isVip = (vip.trim().toUpperCase() === "Y");
            let soShaker = 0;
            let soGloves = 0;
            let soStrap = 0;
            let phanMon = currentOrderCode.slice(4);
            for (let i = 0; i < phanMon.length; i++) {
                if (phanMon[i] === "S") soShaker++;
                else if (phanMon[i] === "G") soGloves++;
                else if (phanMon[i] === "T") soStrap++;
            }

            let tienShaker = soShaker * priceShaker;
            let tienGloves = soGloves * priceGloves;
            let tienStrap = soStrap * priceStrap;
            let tamTinh = tienShaker + tienGloves + tienStrap;
            let giamGia = 0;
            if (isVip) {
                giamGia = nhapMath.round(tamTinh * 0.1);
            }
            let tongTien = tamTinh - giamGia;
            totalRevenue += tongTien;
            totalOrders++;
            
            console.log("HÓA ĐƠN BÁN LẺ PHỤ KIỆN".padStart(32));
            console.log("Mã đơn: " + currentOrderCode);
            console.log("Món".padStart(10) + "SL".padStart(8) + "Thành tiền".padStart(22));
            console.log("SHAKER".padStart(10) + String(soShaker).padStart(8) + tienShaker.toLocaleString("vi-VN").padStart(22));
            console.log("GLOVES".padStart(10) + String(soGloves).padStart(8) + tienGloves.toLocaleString("vi-VN").padStart(22));
            console.log("STRAP".padStart(10) + String(soStrap).padStart(8) + tienStrap.toLocaleString("vi-VN").padStart(22));
            console.log("Tạm tính:".padStart(18) + tamTinh.toLocaleString("vi-VN").padStart(22));
            console.log("Giảm VIP 10%:".padStart(18) + ("-" + giamGia.toLocaleString("vi-VN")).padStart(22));
            console.log("THANH TOÁN:".padStart(18) + (tongTien.toLocaleString("vi-VN") + " VNĐ").padStart(22));
            currentOrderCode = "";
            isOrderValid = false;
            break;
        case "3":
            console.log("Thoát chương trình" + totalOrders + " -doanh thu: " + totalRevenue.toLocaleString("vi-VN") +" VNĐ");
            break;
        default:
            console.log("Vui lòng nhập từ (1-3)");
            break;
    }
} while (choice !== "3");
