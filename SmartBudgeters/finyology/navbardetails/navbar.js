document.addEventListener("DOMContentLoaded", function () {
    const navbarHTML = `
    <nav class="navbar">
        <div class="nav-container">
            <a href="dashboard.html" class="nav-logo">
                <i class="fas fa-wallet"></i> Smart Budgeters
            </a>
            <ul class="nav-menu">
                <li><a href="dashboard.html">Your Dashboard</a></li>
              
                <li><a href="personal_info.html">Profile👤</a></li>
                <li class="dropdown">
                    <a href="#">Group 👥<i class="fas fa-chevron-down"></i></a>
                    <ul class="dropdown-menu">
                        <li><a href="My-Own-Gameaya.html">My Gameayas 🏠</a></li>
                        <li><a href="CreateGameaya.html">Create Gameaya ➕</a></li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#">Q&A & Activities ❓<i class="fas fa-chevron-down"></i></a>
                    <ul class="dropdown-menu">
                        <li><a href="QApage.html">Q&A💬</a></li>
                        <li><a href="tutorialPage.html">Lessons📘</a></li>
                        <li><a href="activity.html">Activities🧩</a></li>
                    </ul>
                </li>
                <li><a href="budget.html">Set Income 💵</a></li>
        
                <li><a href="budget.html">Set Budget 💵</a></li>
                <li><a href="budget.html">Track Expenses 📊</a></li>
                <li><a href="index.html">More🏦</a></li>
            </ul>
        </div>
    </nav>
    `;

    document.getElementById("navbar-placeholder").innerHTML = navbarHTML;
});