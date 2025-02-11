// Hàm nạp dữ liệu ngày, tháng, năm vào các dropdown (combobox)
function loadDateDropdowns() {
    const daySelect = document.getElementById("day");
    for (let i = 1; i <= 31; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.text = i;
        daySelect.appendChild(option);
    }

    const monthSelect = document.getElementById("month");
    for (let i = 1; i <= 12; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.text = i;
        monthSelect.appendChild(option);
    }

    const yearSelect = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    for (let i = 1900; i <= currentYear; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.text = i;
        yearSelect.appendChild(option);
    }
}

// Hàm kiểm tra và xử lý khi nhấn Đăng ký
function handleRegister() {
    const name = document.getElementById('ten').value.trim();
    const email = document.getElementById('email').value.trim();
    const gender = document.querySelector('input[name="gioitinh"]:checked').value;
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const hobbies = Array.from(document.querySelectorAll('input[name="sothich"]:checked')).map(h => h.nextElementSibling.textContent).join(', ');
    const favoriteColor = document.querySelector('input[name="mauyeuthich"]:checked')?.nextElementSibling.textContent;

    // Kiểm tra tên và email
    if (!name) {
        alert('Tên không được bỏ trống!');
        return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Email không hợp lệ!');
        return;
    }

    // Thêm thông tin vào bảng
    const table = document.getElementById('dangkythanhvien');
    const row = table.insertRow();
    row.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${gender}</td>
        <td>${year}-${month}-${day}</td>
        <td>${hobbies}</td>
        <td>${favoriteColor}</td>
    `;
}

// Hàm xử lý nút Tiếp
function handleReset() {
    document.getElementById('formdangky').reset();
    document.getElementById('ten').focus();
}

// Nạp dropdowns khi tải trang
window.onload = function () {
    loadDateDropdowns();

    // Gán sự kiện cho nút Đăng ký và Tiếp
    document.querySelector('input[type="button"]').addEventListener('click', handleRegister);
    document.querySelector('input[type="reset"]').addEventListener('click', handleReset);
};
