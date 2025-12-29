// 趣味データ
const hobbiesData = {
    coffee: {
        title: 'コーヒー・カフェ巡り',
        description: '週末は新しいカフェを探索したり、自宅でハンドドリップを楽しんでいます。豆の種類や淹れ方によって変わる香りと味の探求が日々の癒しです。特に、浅煎りのフルーティーな豆を好んでおり、ドリップの抽出方法を変えることで多様な風味を引き出すことを試みています。カフェ巡りでは、店内の雰囲気やデザインにも注目し、インスピレーションを得ています。',
        images: [
            'https://via.placeholder.com/400x300/FFDDC1/FF8C00?text=Coffee+1',
            'https://via.placeholder.com/400x300/FFDDC1/FF8C00?text=Coffee+2',
            'https://via.placeholder.com/400x300/FFDDC1/FF8C00?text=Coffee+3'
        ]
    },
    manga: {
        title: '漫画を読む（少年ジャンプ・ミステリー系）',
        description: '少年ジャンプの熱いストーリー展開や、緻密な伏線が張り巡らされたミステリー漫画を読むのが好きです。特にキャラクターの成長や、予想を裏切るどんでん返しに魅力を感じます。物語の世界観に没頭することで、日々のストレスを解消し、また新しいアイデアや視点を得ることもあります。最近はWebtoonなどのデジタル漫画もよく読んでいます。',
        images: [
            'https://via.placeholder.com/400x300/FFDDC1/FF8C00?text=Manga+1',
            'https://via.placeholder.com/400x300/FFDDC1/FF8C00?text=Manga+2',
            'https://via.placeholder.com/400x300/FFDDC1/FF8C00?text=Manga+3'
        ]
    },
    training: {
        title: 'ランニングと筋トレ',
        description: '健康維持と気分転換のために、週に数回ランニングと筋力トレーニングを行っています。特に早朝のランニングは、新鮮な空気の中で集中力を高めるのに役立っています。筋力トレーニングでは、特定の部位を意識したフォーム改善や、重量の更新に挑戦することで達成感を得ています。体力の向上は、プログラミング作業の集中力維持にも繋がっています。',
        images: [
            'https://via.placeholder.com/400x300/FFDDC1/FF8C00?text=Training+1',
            'https://via.placeholder.com/400x300/FFDDC1/FF8C00?text=Training+2',
            'https://via.placeholder.com/400x300/FFDDC1/FF8C00?text=Training+3'
        ]
    }
};

// DOM要素の取得
const hobbyItems = document.querySelectorAll('.hobby-item');
const modal = document.getElementById('hobby-modal');
const closeButton = document.querySelector('.close-button');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalImages = document.getElementById('modal-images');

// モーダルを開く関数
function openModal(hobbyId) {
    const hobby = hobbiesData[hobbyId];
    if (hobby) {
        modalTitle.textContent = hobby.title;
        modalDescription.textContent = hobby.description;
        modalImages.innerHTML = ''; // Clear previous images
        hobby.images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = hobby.title;
            modalImages.appendChild(img);
        });
        modal.style.display = 'flex';
    }
}

// モーダルを閉じる関数
function closeModal() {
    modal.style.display = 'none';
}

// イベントリスナーの追加
hobbyItems.forEach(item => {
    item.addEventListener('click', () => {
        const hobbyId = item.dataset.hobbyId;
        openModal(hobbyId);
    });
});

closeButton.addEventListener('click', closeModal);

// モーダルの外側をクリックで閉じる
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

