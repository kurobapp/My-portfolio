function openModal(modalId) {
    const modal = document.getElementById(modalId);
    const clickedDot = document.querySelector('.clicked'); // 'clicked' クラスが付いた要素を取得

    if (clickedDot) {
        // 'clicked' クラスが付いている場合、モーダルを開かない
        console.log("クリックされた点があるため、モーダルは開きません");
        return;
    }

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

function handleDotClick(event) {
    // クリックされた点に 'clicked' クラスを追加または削除
    const clickedDot = event.target;

    // クリックされた点の色を切り替え
    clickedDot.classList.toggle('clicked');
    const section = clickedDot.closest('.section'); // クリックされた点が含まれるセクションを取得
    const paragraph = section.querySelector('p'); // セクション内の <p> タグを取得

    if (clickedDot.classList.contains('clicked')) {
        section.id = 'drag'; // 'clicked' があれば id="move" を追加
    } else {
        section.removeAttribute('id'); // 'clicked' がなければ id="move" を削除
    }

    if (clickedDot.classList.contains('clicked')) {
        paragraph.setAttribute('contenteditable', 'true');
    } else {
        paragraph.removeAttribute('contenteditable');
    }
    event.stopPropagation();
}


const img = document.getElementById('drag');
img.onpointerdown = function(event) {
    // ドラッグ開始時に画像の初期位置とマウスのオフセットを記録
    const offsetX = event.clientX - img.getBoundingClientRect().left;
    const offsetY = event.clientY - img.getBoundingClientRect().top;

    img.onpointermove = function(event) {
        if (event.buttons) {
            // マウス位置に基づいて画像の位置を更新
            img.style.left = (event.clientX - offsetX) + 'px';
            img.style.top = (event.clientY - offsetY) + 'px';
        }
    };

    img.onpointerup = function() {
        // ドラッグ終了後にイベントリスナーを解除
        img.onpointermove = null;
        img.onpointerup = null;
    };

    // ポインターキャプチャを開始
    img.setPointerCapture(event.pointerId);
};
