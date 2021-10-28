use inout_db;
insert into user_(username,email,pass_word)
values
	("clintEast","loneranger@yahoo.ca","cowboy7"),
    ("willSmith","freshprince@gmail.com","freshprince");
insert into category(category_id)
values
	-- staying at home
	(110),
    -- going out 
    (101);
insert into indoor_activity(activity_in_Name)
values
	("Video Games"),
    ("Yoga"),
    ("Receipt"),
    ("Paint By Number"),
    ("Watch Movies"),
    ("TV shows");
insert into outdoor_activity(activity_out_name)
values
	("Hiking"),
    ("Running"),
    ("Shopping"),
    ("Resteraunts"),
    ("Wine Tasting");
insert into comment_(comment)
values
	("great thing to go"),
    ("I miss being inside"),
    ("I miss outside"),
    ("Where is my blanket");
