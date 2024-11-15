function togglePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup.style.display === "block") {
        popup.style.display = "none"; // すでに表示されていたら非表示に
    } else {
        // すべてのポップアップを非表示にする
        const popups = document.querySelectorAll('.popup');
        popups.forEach(p => p.style.display = "none");
        popup.style.display = "block"; // 選択されたポップアップを表示
    }
}
function showPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}


// モーダルを表示する関数
function openModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";  // モーダルを表示
}

// モーダルを閉じる関数
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";  // モーダルを非表示
}

// ボタンなどでモーダルを開く例
document.getElementById("showModalBtn").onclick = openModal;
