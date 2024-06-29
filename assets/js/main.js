
$(document).ready( function() {
    
    window.onscroll = function() {myFunction()};

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
    }

    //modal

    $(document).ready(function() {
        // Funkcija za otvaranje moda sa odgovarajućim naslovom i tekstom
        function openModal(title, text) {
            document.getElementById('putModalTitle').innerHTML = title; // Postavljamo naslov modala
            document.getElementById('putModalBody').innerHTML = text;   // Postavljamo tekst modala
            $('#putModal').modal('show');            // Otvaranje moda
          }
    
        // Postavljamo klik događaje za svaki link koji vodi ka modalu
        $('[data-bs-toggle="modal"]').click(function(e) {
          e.preventDefault(); // Prevent default behavior of link click
          
          // Proveravamo koji modal treba otvoriti na osnovu data atributa
          var modalType = $(this).data('modal-type');
          if (modalType === 'upis') {
            openModal('<b>Upis</b>', '<p>Za prijavu u Auto školu VOZI, potrebno je da kandidat donese svoju ličnu kartu i poseti prostorije auto škole na Novom Beogradu, u ulici Bulevara Mihaila Pupina 165a, u zgradi Jugoagenta, na 2. spratu.</p><p>Naš tim će pružiti potpunu podršku u svakom koraku procesa, od početka do dobijanja vozačke dozvole za odgovarajuću kategoriju.</p><p>U slučaju maloletnih kandidata, potrebno je da dođu u pratnji roditelja ili staratelja kako bi potpisali neophodne dokumente.</p><hr/>');
          } else if (modalType === 'teorijska-obuka') {
            openModal('<b>Teorijska obuka</b>', '<p>Teorijska nastava se održava u prostorijama auto škole VOZI na Novom Beogradu, u ulici Bulevara Mihaila Pupina 165a, u zgradi Jugoagenta, na 2. spratu.</p><p>Termini nastave su prilagodljivi obavezama kandidata i formiraju se u dogovoru sa predavačem.</p><p>Teorijska nastava traje 40 časova, gde je trajanje jednog časa 45 minuta.</p><p>Dnevno kandidat može imati maksimalno 3 časa teorijske nastave, sa pauzama od po 10 minuta između njih.</p><p>Vreme završetaka teorijske nastave uz naše predavače je 3 nedelje.</p><p>Prisustvo časovima je obavezno.</p><p>Uslovi za započinjanje teorijske obuke su:</p><ul><li>kandidat ima ličnu kartu</li><li>kandidat ima navršenih 16 godina</li></ul><hr/>');
          } else if (modalType === 'teorijski-ispit') {
            openModal('<b>Teorijski ispit</b>', '<p>Nakon odslušane teorijske nastave, kandidat polaže teorijski ispit.</p><p>Teorijski ispit se polaže na računarima u prostorijama gde se pohađala i teorijska nastava, pred ispitnom komisijom.</p><p>Kandidat odmah nakon završenog ispita na svom računaru može videti da li je ispit položio ili ne.</p><p>Položen teorijski ispit važi godinu i po dana i u tom roku se mora završiti praktična obuka i položiti vozački ispit.</p><hr/>');
          } else if (modalType === 'prakticna-obuka') {
            openModal('<b>Praktična obuka</b>', '<p>Položen teorijski ispit i važeće <b>lekarsko uverenje</b> su neophodni uslovi za početak praktične obuke.</p><p>Praktična obuka se sastoji od 40 časova.</p><p>Vreme časova vožnje je prilagođeno svakom kandidatu.</p><p>Časovi se mogu zakazivati od 7-21h.</p><p>Maksimalno se može voziti dva časa dnevno, a trajanje jednog časa jeste 45 minuta.</p><p>Optimalno vreme za završetak obuke je 20 dana.</p><p><b>Lekarsko uverenje</b> – Auto škola Vozi je obezbedila svim našim kandidatima besplatno lekarsko uverenje, u ovlašćenoj zdravstvenoj ustanovi uz uput iz naše auto škole.</p><p>Važnost lekarskog uverenja je godinu dana od izdavanja, da bi se otpočeka obuka.</p><p>Za dobijanje vozačke dozvole lekarsko uverenje ne sme biti starije od 6 meseci.</p><p>Ukoliko kandidat u tom roku ne završi obuku i ne izvadi vozačku dozvolu iz bilo kojih razloga, obavezan je da izvadi novo lekarsko uverenje, ovog puta o svom trošku.</p><p>Lekarsko uverenje je neophodan uslov za početak praktične obuke.</p><p>Uslovi za početak praktične obuke su:</p><ul><li>kandidat ima položen teorijski ispit</li><li>kandidat ima važeće lekarsko uverenje</li><li>lična karta je obavezna na svakom času vožnje</li></ul><hr/>');
          } else if (modalType === 'prakticni-ispit') {
            openModal('<b>Praktični ispit</b>', '<p>Da bi kandidat izašao na praktičan ispit, potrebno je da ima položenu <b>prvu pomoć</b>.</p><p>Auto skola VOZI poseduje 15 ispitnih zadataka.</p><p>Slučajnim izborom kandidat bira jedan od 15 zadataka.</p><p>Ispit može da krene nakon upoznavanjem sa relacijom kojom će se voziti.</p><p>Ceo ispit se sastoji iz poligonskih radnji i vožnje u saobraćaju.</p><p>Trajanje ispita je oko 45 minuta.</p><p>Početak i kraj ispita je na poligonu auto škole VOZI.</p><p><b>Prva pomoć</b> se sastoji od obuke i polaganja ispita iz prve pomoći, i sve to u jednom danu.</p><p>Pismeni deo ispita traje 45 minuta, dok praktični deo traje oko 90 minuta.</p><p>Nakon položenog ispita dobija se potvrda koja je neophodna za prijavu praktičnog ispita i za vađenje vozačke dozvole.</p><p>Uslovi za praktični ispit vožnje:</p><ul><li>kandidat ima položenu Prvu pomoć</li><li>kandidat ima ličnu kartu</li></ul><hr/>');
          } else if (modalType === 'probna-dozvola') {
            openModal('<b>Izdavanje probne vozačke dozvole</b>', '<p>Za kandidate koji su mlađi od 19 godina, probna vozačka dozvola važi do navršene 21. godine, dok za starije kandidate, ona važi na period od 2 godine.</p><p>Tokom ovog probnog perioda, vozač je dužan da poštuje određena pravila kako bi izbegao moguće kazne ili gubitak dozvole.</p><p>Neka od pravila su: zabrana korišćenja mobilnog telefona tokom vožnje, ograničenje vožnje između 23h i 6h, obavezno ograničenje kretanja samo na teritoriji Republike Srbije.</p><p>Više o ograničenjima za B kategoriju pročitaj <a href="b-kategorija.html#ogranicenja" class="sub-color"><b>ovde</b></a>.</p><hr/>');
          }          
        });
      });
})

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});