document.addEventListener("DOMContentLoaded", function(){
    const navbarHTML = `<header>
        <nav> 
            <div class="hamburger">&#9776;</div> 
            <ul class="nav-links">
                <li class="logo-nav"><img src="https://logodownload.org/wp-content/uploads/2014/04/bmw-logo-3.png" alt="bmw logo"></li>
                <li class="nav-link"><a href="../html/Karte_ar_hover_efektiem.html">Sākums</a></li>
                <li class="nav-link">
                    <a href="#">Serviss</a>
                    <ul class="dropdown">
                        <li><a href="../html/serviss_riga.html">Rīga</a></li>
                        <li><a href="../html/serviss_kurzeme.html">Kurzeme</a></li>
                        <li><a href="../html/serviss_zemgale.html">Zemgale</a></li>
                        <li><a href="../html/serviss_latgale.html">Latgale</a></li>
                    </ul>
                </li>
                <li class="nav-link"><a href="#">Finansēšana</a></li>
                <li class="nav-link"><a href="#">Īpašniekiem</a></li>
                <li class="nav-link"><a href="#">Jaunumi</a></li>
                <li class="nav-link"><a href="#">Saņemt piedāvājumu</a></li>
                <input type="text" placeholder="Meklēt...">
            </ul>
        </nav>    
    </header>`;
   
    document.body.insertAdjacentHTML("afterbegin", navbarHTML);
});
