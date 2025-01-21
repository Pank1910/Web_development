document.addEventListener("DOMContentLoaded", function () {
    const table = document.querySelector("table");
    const headers = table.querySelectorAll("th");
    const tbody = table.querySelector("#tbodysinhvien");

    // Sắp xếp dữ liệu theo cột
    headers.forEach((header, index) => {
        header.addEventListener("click", function () {
            const rows = Array.from(tbody.querySelectorAll("tr"));
            const isAscending = header.classList.contains("asc");
            header.classList.toggle("asc", !isAscending);
            header.classList.toggle("desc", isAscending);

            rows.sort((rowA, rowB) => {
                const cellA = rowA.children[index].innerText;
                const cellB = rowB.children[index].innerText;

                if (!isNaN(cellA) && !isNaN(cellB)) {
                    // Sắp xếp số
                    return isAscending ? cellB - cellA : cellA - cellB;
                } else {
                    // Sắp xếp chữ
                    return isAscending
                        ? cellB.localeCompare(cellA)
                        : cellA.localeCompare(cellB);
                }
            });

            rows.forEach(row => tbody.appendChild(row));
        });
    });

    // Sự kiện click vào dòng
    tbody.addEventListener("click", function (e) {
        const row = e.target.closest("tr");
        if (row) {
            const mssv = row.children[0].innerText; // Lấy mã sinh viên
            const hoTen = row.children[1].innerText; // Lấy họ tên
            const ngaySinh = row.children[2].innerText; // Lấy ngày sinh
            const gioiTinh = row.children[3].innerText; // Lấy giới tính

            // Chuyển hướng tới trang detail.html với query string
            const detailUrl = `detail.html?id=${encodeURIComponent(mssv)}&name=${encodeURIComponent(hoTen)}&birthday=${encodeURIComponent(ngaySinh)}&gender=${encodeURIComponent(gioiTinh)}`;
            window.location.href = detailUrl;
        }
    });

});
