document.addEventListener('DOMContentLoaded', function() {
    // 年をクリックしたときの処理
    const yearLinks = document.querySelectorAll('.year-nav a');
    const yearSections = document.querySelectorAll('.year-section');
    
    // 初期状態では最新年のセクションのみ表示
    yearSections.forEach(section => {
        if (section.id !== 'year-2024') {
            section.style.display = 'none';
        }
    });

    yearLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const year = this.getAttribute('data-year');
            
            // アクティブな年のスタイルを更新
            yearLinks.forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');

            // セクションの表示切り替えをアニメーション付きで行う
            const targetSection = document.getElementById('year-' + year);
            
            // 現在表示中のセクションをフェードアウト
            yearSections.forEach(section => {
                if (section.style.display !== 'none') {
                    section.style.opacity = '0';
                    setTimeout(() => {
                        section.style.display = 'none';
                        
                        // 目的のセクションをフェードイン
                        targetSection.style.display = 'block';
                        targetSection.style.opacity = '0';
                        setTimeout(() => {
                            targetSection.style.opacity = '1';
                        }, 50);
                    }, 300);
                }
            });

            // スムーズスクロール
            const offset = 120; // ナビゲーションバーとyear-navの高さ分
            const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });

    // CSSトランジションの追加
    yearSections.forEach(section => {
        section.style.transition = 'opacity 0.3s ease';
    });

    // URLのハッシュに基づいて初期表示を設定
    const hash = window.location.hash;
    if (hash) {
        const year = hash.replace('#year-', '');
        const yearLink = document.querySelector(`.year-nav a[data-year="${year}"]`);
        if (yearLink) {
            yearLink.click();
        }
    }
});
