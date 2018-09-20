# Crowd-Funding
Aplikacija je urađena po ideji `https://www.kickstarter.com/`, s tim sto je Crowd-Funding app namenjena samo projektima koji se odnose na grad Novi Sad. Pokretanje crowdfunding kampanje dostupno je svakome sa internet vezom i dobrom idejom. Crowdfunding funkcioniše tako što pokretač kampanje objavi kolika svota mu je potrebna i detaljno obrazloži za koju svrhu, a potom mu korisnici doniraju sredstva bez očekivanja da će nešto dobiti zauzvrat.

Ima sledeće opcije:
-prijava korisnika
-dodavanje projekata 
-mogućnost izmene i brisanja projekata ima samo administrator
-doniranje određene sume novca za projekte
-projekti su podeljeni u tri kategorije:
    - Brze bolje lakše
    - Radim gradim
    - Odmor i zabava
-korisnici koji nisu ulogovani ne mogu da doniraju novac

## Korišćene tehnologije

### Backend
-Java Spring boot
-MySql
-Hibernate
-Rest API

### Frontend
- Angular 6
- Bootstrap 3
- Node.JS
- CSS
- jQuery

## Pokretanje aplikacije 

### Klonirati repositorijum

`git clone https://github.com/TanjaCucurovic/Crowd-Funding.git`

### Instalirati npm pakete

Instalirati npm pakovanja opisana u package.json:

`cd CrowdFundingClient`
`npm install`
 
### npm skripta

Pokrenuti
-`ng build -w` za dev server. Otvoriti u Google Chrome `http://localhost:8095/`. Aplikacija će se automatski osvežiti kada se promeni kod.

### kreiranje baze
Inicijalna baza projekta se nalazi u fajlu `db-init`, koji se nalazi u folderu CrowdFundingServer/sql. Pre prvog pokretanja aplikacije, potrebno je:
    1. Kreirati bazu na MySQL serveru sa nazivom `dbcrowdfunding`
    2. *Neophodno je povezati serverski deo sa MySQL serverom preko application.properties fajla koji se nalazi u src/main/resources. U njemu je potrebno uneti adresu servera za baze podataka, kao i uneti validno korisničko ime i šifru!
    
Prilikom prvog pokretanja aplikacije, Spring generiše potrebne tabele, kao i veze između njih. Pokretanje aplikacije vrši se putem App.java fajla koji se nalazi u paketu vp.jpa.crowdfunding.

Nakon što je pokrenuta aplikacija, potrebno je uneti inicijalne podatke, koji se nalaze u spomenutom `db-init` fajlu.

Aplikacija je napravljena u razvojnom okrženju Eclipse.