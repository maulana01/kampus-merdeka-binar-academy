-- Membuat Database Baru
CREATE DATABASE "challenge-3"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;

-- Membuat Table User Game
create table user_game (
	id_user bigint primary key not null,
	username text not null,
	email text not null,
	password text not null
);

-- Membuat Table User Game Biodata
create table user_game_biodata(
	id_biodata_user bigint primary key not null,
	nama text not null,
	tanggal_lahir date not null,
	tempat_lahir text not null,
	alamat text not null,
	no_hp text not null,
	id_user bigint not null references user_game (id_user)
);

-- Membuat Table User Game History
create table user_game_history (
	id_history_user bigint primary key not null,
	skor bigint not null,
	tanggal_bermain date not null,
	id_user bigint not null references user_game (id_user)
);

-- Melakukan Input data pada table user_game
insert into user_game (id_user, username, email, password)
values
(1, 'maul.mam', 'imammaul2@gmail.com', 'maul1234'),
(2, 'dn_muku', 'mukudania221@gmail.com', 'catlovers26'),
(3, 'radit_adit', 'muhammadraditya71@gmail.com', 'gamers223'),
(4, 'fatur_hakim', 'muhammadfaturhakim@gmail.com', 'razor141'),
(5, 'rini_andini', 'andini06@gmail.com', 'dinidini71');

-- Melakukan Pengambilan keseluruhan data dari user_game
select * from user_game;

-- Melakukan Pengambilan keseluruhan data dari user_game
select * from user_game where username='dn_muku';

-- Melakukan penghapusan dan penambahan kembali foreign key user_game_biodata dengan cascade pada delete dan update
alter table public.user_game_biodata
drop constraint user_game_biodata_id_user_fkey,
add constraint user_game_biodata_id_user_fkey
   foreign key (id_user)
   references user_game(id_user)
   on delete cascade
   on update cascade;

-- Melakukan penghapusan dan penambahan kembali foreign key user_game_history_id_user_fkey dengan cascade pada delete dan update
alter table public.user_game_history
drop constraint user_game_history_id_user_fkey,
add constraint user_game_history_id_user_fkey
   foreign key (id_user)
   references user_game(id_user)
   on delete cascade
   on update cascade;

-- Melakukan perubahan tipe data no_hp pada table user_game_biodata
alter table user_game_biodata alter column no_hp type bigint using no_hp::bigint;

-- Melakukan Insert data pada table user_game_biodata
insert into user_game_biodata (id_biodata_user, nama, tanggal_lahir, tempat_lahir, alamat, no_hp, id_user)
values
(1, 'Maulana Imam', '2001-08-18', 'Serang', 'Komp. Sankyu No 11', 6285928573350, 1),
(2, 'Muku Dania', '2002-03-12', 'Cilegon', 'Jalan Ahmad Yani No 14', 628138514302, 2),
(3, 'Muhammad Raditya', '1999-04-08', 'Jakarta', 'Jalan Kelinci No 08', 6281383024735, 3),
(4, 'Muhammad Fatur Hakim', '1999-09-20', 'Bandung', 'Jalan Soreang No 09', 6281947524784, 4),
(5, 'Rini Andini', '2001-04-09', 'Bandung', 'Jalan Surapati No 21', 6287702489357, 5);

-- Melakukan Insert pada user_game_history
insert into user_game_history (id_history_user, skor, tanggal_bermain, id_user)
values
(1, 80, '2021-12-14', 1),
(2, 90, '2021-12-16', 1),
(3, 83, '2022-01-04', 2),
(4, 88, '2022-01-07', 4),
(5, 81, '2022-02-12', 5);

-- Melakukan perubahan data tempat lahir andini pada table user_game_biodata
update user_game_biodata
set tempat_lahir = 'Karawang'
where nama = 'Rini Andini';

-- Mengambil nama user beserta username dan email nya
select "user_game_biodata"."nama", "user_game"."email", "user_game"."email"
from "user_game_biodata"
inner join "user_game"
on "user_game_biodata"."id_user" = "user_game"."id_user"

-- Melakukan Perubahan Username radit_adit pada table user_game
update user_game
set username = 'dit_ditt'
where username = 'radit_adit';

-- Melakukan Perubahan Alamat Maulana Imam pada table user_game_biodata
update user_game_biodata
set alamat = 'Jalan Bojong Soang No 04'
where nama = 'Maulana Imam';

-- Mengambil nama user, username beserta skor nya
select "user_game_biodata"."nama", "user_game"."username", "user_game_history"."skor"
from "user_game"
inner join "user_game_biodata"
on "user_game_biodata"."id_user" = "user_game"."id_user"
inner join "user_game_history"
on "user_game_history"."id_user" = "user_game"."id_user";

-- Mengambil data nama, tanggal lahir, dan alamat beserta username Maulana Imam
select "user_game_biodata"."nama", "user_game_biodata"."tanggal_lahir", "user_game_biodata"."alamat", "user_game"."username"
from "user_game"
inner join "user_game_biodata"
on "user_game_biodata"."id_user" = "user_game"."id_user"
where "user_game_biodata"."nama" = 'Maulana Imam';

-- Melakukan Penghapusan data username maul.mam beserta biodata dan history nya
delete from "user_game"
where "username" = 'maul.mam';

-- Melakukan Penghapusan data username dit_ditt beserta biodata dan history nya
delete from "user_game"
where "username" = 'dit_ditt';

-- Melakukan Penghapusan data username dn_muku beserta biodata dan history nya
delete from "user_game"
where "username" = 'dn_muku';

-- Melakukan Penghapusan table user_game_biodata
drop table user_game_biodata;

-- Melakukan Penghapusan table user_game_history
drop table user_game_history;

-- Melakukan Penghapusan table user_game
drop table user_game;

-- Melakukan Penghapusan database challenge-3
drop database "challenge-3";