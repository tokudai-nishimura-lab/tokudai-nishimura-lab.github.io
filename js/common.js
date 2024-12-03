document.addEventListener('DOMContentLoaded', function() {
    // ナビゲーションを挿入する要素
    const navContainer = document.getElementById('nav-container');
    if (navContainer) {
        navContainer.innerHTML = `
            <nav class="navbar">
                <div class="nav-brand">
                    <a href="index.html">
                        <img src="./img/logo_a3.png" alt="研究室ロゴ" class="nav-logo">
                    </a>
                </div>
                <ul class="nav-links">
                    <li><a href="index.html" id="nav-home"><i class="fas fa-home"></i> ホーム</a></li>
                    <li><a href="research.html" id="nav-research"><i class="fas fa-flask"></i> 研究内容</a></li>
                    <li><a href="members.html" id="nav-members"><i class="fas fa-users"></i> メンバー</a></li>
                    <li><a href="publications.html" id="nav-publications"><i class="fas fa-book"></i> 研究業績</a></li>
                    <li><a href="equipment.html" id="nav-equipment"><i class="fas fa-tools"></i> 研究設備</a></li>
                    <li><a href="news.html" id="nav-news"><i class="fas fa-newspaper"></i> ニュース</a></li>
                </ul>
            </nav>
        `;

        // 現在のページのナビゲーションリンクをアクティブにする
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navId = 'nav-' + (currentPage.replace('.html', '') || 'home');
        const activeLink = document.getElementById(navId);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
});
