create database dbcrowdfunding;

use dbcrowdfunding;

-- insert users
-- password is 12345 (bcrypt encoded) 
insert into security_user (username, password, first_name, last_name, role) values 
	('admin', '$2a$04$4pqDFh9SxLAg/uSH59JCB.LwIS6QoAjM9qcE7H9e2drFuWhvTnDFi', 'Admin', 'Admin', 'ADMINISTRATOR');
-- password is abcdef (bcrypt encoded)
insert into security_user (username, password, first_name, last_name, role) values 
	('petar', '$2a$04$Yr3QD6lbcemnrRNLbUMLBez2oEK15pdacIgfkvymQ9oMhqsEE56EK', 'Petar', 'Petrovic', 'WORKER');


INSERT INTO category ( id, category.name) VALUES 
		(2 ,'Brze - bolje - lakse');
        
INSERT INTO category ( id, category.name) VALUES 
		(3,'Radim - gradim'); 
        
 INSERT INTO category ( id, category.name) VALUES 
		(1, 'Odmor i zabava');


INSERT INTO project (deadline, donation_current, donation_goal,is_successful, project.name, project.start, category_id, description, imageurl) VALUES 
		('2018-10-20', 18600, 300000,1,'Uređenje keja ','2018-09-20', 1, 
		'Novosadski kej – mesto za odmor i relaksaciju, za "videti i biti viđen", mesto susreta i razmene važnih i nevažnih informacija i 
		vesti. Uz reku Dunav, gde šetači u laganom tempu, uglavnom vedro raspoloženi, neobavezno pričaju o događajima dana ili aktualnim 
		temama. Ali isto tako, prostor za brojne rekreativne aktivnosti.
		Cilj projekta je da se obezbedi: 30 novih klupa, ulozi u moderniju rasvetu i duž šetališta obezbedi 100 ukrasnih stabala (dupli 
		drvoredi), ukrasno šibllje i pokrivači tla.', 'http://www.novisad.rs/sites/default/files/imagecache/800xXXX/images/izabrana4.jpg');
INSERT INTO project (deadline, donation_current, donation_goal,is_successful, project.name, project.start, category_id, description, imageurl) VALUES 
		('2018-09-15', 28500, 8000000,0,'Noviji gradski autobusi', '2018-08-15',2, 'Ulaganje u nabavku dodatnih 40 autobusa,
		 savremeno opremljenih po najnovijim standardima, što između ostalog podrazumeva klimatizaciju, zvučnu notifikaciju i sistem za 
		lociranje autobusa na autobuskim stanicama.','http://sremskikarlovci.info/wp-content/uploads/2015/09/gsp_2decembar.jpg');
INSERT INTO project(deadline, donation_current, donation_goal,is_successful, project.name, project.start, category_id, description, imageurl) VALUES 
		('2018-08-13', 13200, 450000,1,'Asfaltiranje puteva', '2018-07-13', 3, 'Udruženje Refresh Novi Sad želi da prikupi finansijska sredstva za rekonstrukciju i izgradnju putne infrastrukture kako u gradskom području,
        tako i u selima. Izgradnja puteva u seoskim mesnim zajednicama je jedna od mera podrške selima i pokušaj da se ublaži negativan trend odlaska ljudi iz sela u gradove.', 'http://fijisun.com.fj/wp-content/uploads/2016/01/New-Roads-680x365.jpg');
INSERT INTO project(deadline, donation_current, donation_goal,is_successful, project.name, project.start, category_id, description, imageurl) VALUES 
		('2019-08-01', 73000, 450000,0,'Dečija igrališta', '2018-07-01', 1, 'Igranje je dečija prirodna potreba, njihovo najmoćnije sredstvo izražavanja i osnovna aktivnost u njihovom svakodnevnom životu.
        Uz igru izražavaju svoja osećanja, uče, testiraju svoje veštine, zabavljaju se, istražuju svoju okolinu i korak po korak definišu i razvijaju svoju ličnost. Osim toga, slobodan, otvoreni prostor nudi i deci i odraslima najbolje mesto za druženje,
        sport, odmor i rekreaciju.', 'https://dufferincountyrealestateguide.files.wordpress.com/2011/06/img_3579.jpg');
INSERT INTO project (deadline, donation_current, donation_goal,is_successful, project.name, project.start, category_id, description, imageurl) VALUES 
		('2018-09-01', 12000, 1500000,0,'Parkovi za pse','2018-08-01', 1, 'Lepo uređene ograđene površine na kojima psi mogu nesmetano da se igraju, 
        trče i, ukratko, budu ono što jesu, potrebni su svakom gradu. Na takvim mestima psi mogu slobodno da se kreću, nema bojazni da će istrčati na ulicu, da će ih povrediti kola,
        da će se izgubiti, da će pojesti nešto štetno, da će ih neko ukrasti… U njima su psi zaštićeni od mogućih negativnih reakcija pojedinih sugrađana koji ih se iz bilo kog razloga plaše ili ih njihovo prisustvo uznemirava.
        Vlasnici svoje pse na takvim mestima mogu „držati na oku“ ali istovremeno im pružati slobodu koja im je neophodna kako bi bili zdravi, srećni i uravnoteženi.  Oni omogućavaju vlasnicima da provode kvalitetno vreme sa svojim ljubimcima,
        a psima da konačno steknu mesto koje pripada samo njima.', 'https://i1.wp.com/kanecountyconnects.com/wp-content/uploads/2016/11/Bark-Park.jpg?resize=470%2C260');
INSERT INTO project(deadline, donation_current, donation_goal,is_successful, project.name, project.start, category_id, description, imageurl) VALUES 
		('2018-08-31', 450000, 2000000,0,'Obnavljanje fasada', '2018-07-01', 3, 'Obnova fasada u Gradiću i centru izvodi se u okviru šireg projekta pripreme
        Novog Sada za Evropsku prestonicu kulture 2021. godine. 
        Dodajmo da većina ovih fasada nikad nije obnavlja', 'https://www.termoenterijer.rs/view/assets/img/stranice/fasade-novi-sad.jpg');
INSERT INTO project(deadline, donation_current, donation_goal,is_successful, project.name, project.start, category_id, description, imageurl) VALUES 
		('2018-11-30', 50000, 7000000,0,'Drvo više da planeta diše', '2018-06-30', 3, 'Šume su pluća planete. Svake godine Zemlja izgubi veliki deo svojih šuma,
        kako zbog požara, tako i zbog seče. I kao što pluća pušaća polako i nepovratno odumiru, tako i pluća planete nestaju sve brže i brže. Jedan od najboljih
        načina da sačuvamo našu plavu planetu jeste da svako od nas u toku svog života posadi bar jedno drvo. Tako ćete se zahvaliti prirodi jer vam je omogućila život,
        i tako ćete planetu sačuvati za buduće generacije.','https://thumbs.dreamstime.com/b/model-earth-oversized-trees-24094584.jpg');
INSERT INTO project(deadline, donation_current, donation_goal,is_successful, project.name, project.start, category_id, description, imageurl) VALUES 
		('2019-03-19', 60000, 5500000,0,'Biram da recikliram', '2018-08-15', 3, 'Recikliranje je izdvajanje materijala iz otpada i njegovo ponovno korišćenje.
        Uključuje sakupljanje, izdvajanje, preradu i izradu novih proizvoda iz iskorištenih stvari ili materijala. Veoma je važno najprije odvojiti otpad prema
        vrstama otpadaka. Mnoge otpadne materije se mogu ponovo iskoristiti ako su odvojeno sakupljene.  U recikliranje spada sve što može ponovo da se iskoristi,
        a da se ne baci. U Srbiji postoje retki centri Papir servisa gde možete da odnesete stari papir i u zamenu za njega da dobijete sitan novac. Takođe postoji
        mali broj centara za recikliranje stakla.  Ipak, reciklaža se može upražnjavati u svakodnevnom životu, nezavisno od toga da li postoje centri za reciklažu. 
        Npr. poklanjanje stvari koje se ne koriste je oblik reciklaže. To je mnogo bolje i korisnije nego da se sva ta odeća baci. Takođe, pravljenje komposta od organskih
        ostataka je još jedan dobar primer recikliranja. Bez uvođenja reciklaže u svakodnevni život nemoguće je zamisliti bilo kakav celovit sistem upravljanja otpadom. 
        Neke materije, poput stiropora, nisu biorazgradive i ne mogu se reciklirati ali se umesto njih mogu pronaći ekološke zamene.', 'http://www.propertymark.co.uk/media/1046482/recycling.jpg');
        

INSERT INTO donation (ammount, project_to_donate_id) VALUES 
		(700, 2);
INSERT INTO donation (ammount, project_to_donate_id) VALUES 
		(1000, 3);
INSERT INTO donation (ammount, project_to_donate_id) VALUES 
		(500, 1);

