function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";

        // モーダルの背景部分をクリックしたときにモーダルを閉じる
        modal.addEventListener("click", function(event) {
            // モーダル内のコンテンツがクリックされた場合は閉じない
            if (event.target === modal) {
                closeModal(modalId);
            }
        });
    } else {
        console.error(`Modal with ID '${modalId}' not found.`);
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    } else {
        console.error(`Modal with ID '${modalId}' not found.`);
    }
}

