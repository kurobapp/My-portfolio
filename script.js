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
