document.addEventListener("DOMContentLoaded", function () {
    const navbarHTML = `
    <nav class="navbar">
        <div class="nav-container">
            <a href="#" class="nav-logo">
                <i class="fas fa-wallet"></i> Smart Budgeters
            </a>
            <ul class="nav-menu">
                <li><a href="#">تسجيل الدخول🔑</a></li> <!-- 🟡 login link -->
                <li><a href="#">إنشاء حساب 🆕</a></li> <!-- 🟡 signup link -->
                <li><a href="#">الملف الشخصي👤</a></li> <!-- 🟡 personal profile -->
                <li class="dropdown">
                    <a href="#">الجمعية 👥<i class="fas fa-chevron-down"></i></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">جمعياتي 🏠</a> <!-- 🟡 put path here --></li>
                        <li><a href="#">إنشاء جمعية ➕</a> <!-- 🟡 put path here --></li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#">الأسئلة والأنشطة ❓<i class="fas fa-chevron-down"></i></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">الأسئلة والأجوبة💬</a> <!-- 🟡 Q&A page link --></li>
                        <li><a href="#">الدروس📘</a> <!-- 🟡 Tutorials page link --></li>
                        <li><a href="#">الأنشطة🧩</a> <!-- 🟡 Activities page link --></li>
                    </ul>
                </li>
                <li><a href="#">ربط البنك🏦</a> <!-- 🟡 Bank connection --></li>
                <li><a href="#">تحديد الدخل 💵</a> <!-- 🟡 Set income --></li>
                <li><a href="#">تتبع المصروفات 📊</a> <!-- 🟡 Track expense --></li>
            </ul>
        </div>
    </nav>
    `;

    document.getElementById("navbar-placeholder").innerHTML = navbarHTML;
});
