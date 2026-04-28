if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

/* Movie Dropdown */ {
    const moviebtn = document.getElementById("moviebtn");
    const moviedropdown = document.getElementById("moviedropdown");

    moviebtn.addEventListener("click", () => {
        moviedropdown.classList.toggle("show");
        moviebtn.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
        if (!moviebtn.contains(e.target) && !moviedropdown.contains(e.target)) {
            moviedropdown.classList.remove("show");
            moviebtn.classList.remove("active");
        }
    });

    const nsbtn = document.getElementById("nsbtn");
    const csbtn = document.getElementById("csbtn");

    nsbtn.onclick = function() {
        location.href = "#nowshowing";
    }
    csbtn.onclick = function() {
        location.href = "#comingsoon";
    }
}

/* Menu header button */ {
    let mbtn = document.getElementById("mbtn")

    mbtn.onclick = function() {
        location.href = "#menuheader";
    }
}

/* Location Dropdown */ {
    const locationbtn = document.getElementById("locationbtn");
    const locationdropdown = document.getElementById("locationdropdown");

    locationbtn.addEventListener("click", () => {
        locationdropdown.classList.toggle("show");
        locationbtn.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
        if (!locationbtn.contains(e.target) && !locationdropdown.contains(e.target)) {
            locationdropdown.classList.remove("show");
            locationbtn.classList.remove("active");
        }
    });

    const exrate = 91.94;
    const india = document.getElementById("india");
    const usa = document.getElementById("usa");
    let currency;

    india.onclick = function() {
        locationbtn.textContent = `INDIA ▾`
        locationdropdown.classList.remove("show");
        locationbtn.classList.remove("active");
    
        // usd to inr
        let price = document.getElementsByClassName("price");
        let len = price.length;

        let i;
        for(i=0; i<len; i++) {
            let value = price[i].dataset.price;
            let convertedvalue = (value);
            price[i].textContent = `₹${convertedvalue}`;
        }
    }
    usa.onclick = function() {
        locationbtn.textContent = `USA ▾`
        locationdropdown.classList.remove("show");
        locationbtn.classList.remove("active");

        // inr to usd
        let price = document.getElementsByClassName("price");
        let len = price.length;

        let i;
        for(i=0; i<len; i++) {
            let value =  price[i].dataset.price;
            value = parseFloat(value);
            let convertedvalue = (value/exrate).toFixed(2);
            price[i].textContent = `$${convertedvalue}`;
            console.log(value);
        }
    }
}

/* Sign in modal (popup) */ {
    
    let signinbtn = document.getElementById("signin");
    const signinmodal = document.getElementById("signinmodal");
    const signinmodalcontainer = document.getElementById("signinmodalcontainer");
    let signinmodalclosebtn = document.getElementById("signinmodalclosebtn");

    signinbtn.onclick = function() {
        signinmodalcontainer.classList.toggle("show");
        document.body.classList.toggle("noscroll");
     }

    document.addEventListener("click", (e) => {
        if (!signinmodal.contains(e.target) && !signinbtn.contains(e.target)) {
            signinmodalcontainer.classList.remove("show");
            document.body.classList.remove("noscroll");
        }
    });

    signinmodalclosebtn.onclick = function() {
        signinmodalcontainer.classList.remove("show");
        document.body.classList.remove("noscroll");
    }
}

/* Sign-in or join option */ {

    let sibutton = document.getElementById("sibutton");
    let joinbutton = document.getElementById("joinbutton");
    let joinform = document.getElementById("joinform");
    let signinform = document.getElementById("signinform");
    let signinmodal = document.getElementById("signinmodal");

    joinbutton.onclick = function() {
        joinform.classList.add("show");
        signinform.classList.add("remove");
        sibutton.classList.add("notactive");
        joinbutton.classList.add("active");
        signinmodal.classList.add("join");
    }

    sibutton.onclick = function() {
        joinform.classList.remove("show");
        signinform.classList.remove("remove");
        sibutton.classList.remove("notactive");
        joinbutton.classList.remove("active");
        signinmodal.classList.remove("join");
    }
}

/* Search modal */ {

    let searchicon = document.getElementById("searchicon");
    let searchmodalcontainer = document.getElementById("searchmodalcontainer");
    
    searchicon.onclick = function() {

        searchmodalcontainer.classList.add("show");

    }

    document.addEventListener("click", (e) => {

        if(!searchmodal.contains(e.target) && !searchicon.contains(e.target)) {

            searchmodalcontainer.classList.remove("show");

        }

    });

}

/* Product div */ {

function closeAllModals() {
    document.querySelectorAll('.productmodal').forEach(modal => {
        modal.classList.remove('show');
    });
    document.querySelectorAll('.productdiv').forEach(div => {
        div.style.zIndex = "1";
    });
}

document.querySelectorAll('.productdiv').forEach(div => {
    const modal = div.querySelector('.productmodal');

    div.addEventListener('click', (e) => {
        const isOpen = modal.classList.contains('show');
        
        closeAllModals();

        if (!isOpen) {
            modal.classList.add('show');
            div.style.zIndex = "900"; 
        }
    });

    modal.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});

document.querySelectorAll('.productbtn').forEach(btn => {
    btn.addEventListener('click', () => {

        const baseId = btn.id.replace('btn', '');
        const targetDiv = document.getElementById(baseId + 'div');
        const targetModal = document.getElementById(baseId + 'modal');

        if (targetDiv && targetModal) {
            const elementPosition = targetDiv.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - 70;

            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });

            closeAllModals();
            targetModal.classList.add("show");
            targetDiv.style.zIndex = "900";
        }
    });
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.productdiv') && !e.target.closest('.productbtn')) {
        closeAllModals();
    }
});
}

/* Gift cards */ {
    let gcb = document.getElementById("gcb");
    let gc = document.getElementById("gc");

    gcb.addEventListener("click", () => {
        gc.classList.toggle("show");
        document.body.classList.add("noscroll");
    });

    document.addEventListener("click", (e) => {
        if(!gcb.contains(e.target) && !gc.contains(e.target)) {
            gc.classList.remove("show");
            document.body.classList.remove("noscroll");
        }
    });
}

/* Menu nav (DOM + Arrays + Functions)*/ {

    meb.classList.add("active");
    menudiv.classList.add("show");

    const tabs = [
        { btn: "meb", content: "menudiv" },
        { btn: "feb", content: "featdiv" },
        { btn: "prb", content: "prevdiv" },
        { btn: "sab", content: "savdiv" }
    ];

    function switchTab(activeIndex) {
        tabs.forEach((tab, i) => {
        document.getElementById(tab.content).classList.remove("show");
        document.getElementById(tab.btn).classList.remove("active");
    });

    document.getElementById(tabs[activeIndex].content).classList.add("show");
    document.getElementById(tabs[activeIndex].btn).classList.add("active");
    }

    tabs.forEach((tab, i) => {
      document.getElementById(tab.btn).onclick = () => switchTab(i);
    });
}

/* Cart */ {
    let cf = document.getElementById("cartfooter");
    let c = document.getElementById("cart");
    let incart = 0;

    document.querySelectorAll(".atc").forEach(btn => {
        btn.onclick = () => {
            btn.classList.add("added");
            btn.textContent = "ADDED";
            incart++

            if(incart>0){
                cf.classList.add("show");
            }
            if (incart === 0) {
                cf.classList.remove("show");
            }
        };
    });

    cf.onclick = function() {
        c.classList.add("show");
    }

    let cc = document.getElementById("cartcl");

    cc.onclick = function() {
        c.classList.remove("show");
    }
}

/* */{

    let pd = document.getElementsByClassName("productdiv");


}