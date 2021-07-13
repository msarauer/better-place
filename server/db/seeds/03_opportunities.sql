-- CREATE TABLE opportunities (
--   id SERIAL PRIMARY KEY NOT NULL,
--   host_id INTEGER NOT NULL references users(id) ON DELETE CASCADE,
--   name VARCHAR(255) NOT NULL, 
--   number_of_volunteers_needed INTEGER,
--   number_of_volunteers_added INTEGER,
--   description VARCHAR(255),
--   location VARCHAR(255) NOT NULL,
--   date DATE NOT NULL,
--   time_commitment VARCHAR(255) NOT NULL,
--   category_id INTEGER NOT NULL references categories(id) ON DELETE CASCADE
-- );

-- ['Quick (minutes)', 'Short (3 hours or less)', 'Medium (8 hours or less)', 'Long (Full day)', 'Extra Long (Muliple days)'];

INSERT INTO opportunities (host_id, category_id, name, description, location, date, time_commitment, number_of_volunteers_needed, lat, lng) VALUES 
(
  1, 3, 'Shed cleaned out', 'My husband passed away and his shed is full of rusty old tools.', 'Vancouver', '2019-07-19', 'Quick (Minutes)', 1, 49.2396913, -123.0466543
), 
(
  2, 2,'Moving', 'I broke my foot a couple days ago, I have to move at the end of the month and I need some help.', 'Vancouver', '2019-09-16', 'Medium (8 hours or less)', 2, 49.228365, -123.131529
), 
(
  3, 1, 'Electrical Work', 'I need help with some electrical during a bathroom renovation, everything else I was able to do alone but I would not mind just some guidance to make sure I do everything correctly.', 'Vancouver', '2021-08-05', 'Long (Full day)', 1, 49.221170, -123.000289
), 
(
  4, 4,'Picking garbage', 'Just want a couple people to help me pretty up the neighborhood by cleaning up some of the garbage around the church, I will bring sandwiches and tea.', 'Vancouver', '2021-07-20', 'Medium (8 hours or less)', 4, 49.322334, -123.087797
), 
(
  5, 3, 'Take Grandma to the clinic', 'I have been working doubles at the local diner to make ends meet and I look after my Grandma, if someone could please take her to the clinic to get her prescriptions renewed I would be so apprecaitive, thank you so much in advance.', 'Vancouver', '2021-08-01', 'Quick (Minutes)', 5, 49.260583, -122.860811
), 
(
  6, 7, 'Help feed residents at Lodge', 'We are short staffed at our continuing care and the elderly folks love seeing young children around the lodge, if you or your kids have some spare time we would really appreciate the extra help!', 'Vancouver', '2021-08-25', 'Extra Long (Multiple days)', 6, 49.151079, -123.134397
),
(
  7, 1, 'My front step broke!', 'I am supposed to host a big dinner this weekend and my front step has pretty much imploded, if any strong handy people have any spare time I could really use the help, thank you very much!', 'Vancouver', '2021-07-19', 'Medium (8 hours or less)', 3, 49.292942, -122.813896
), 
(
  11, 5, 'PyCar!', 'Help! I am having problems with my final project, it is having troubles connecting to the internet and my presentation is tomorrow!', 'Vancouver', '2021-07-16', 'Short (3 hours or less)', 1, 49.221528, -122.945362
), 
(
  9, 6, 'Feed Rex', 'My husband and I are going away for a couple days and need someone to quickly run in and feed/water our dog, Rex. He is such a good calm dog, you may even end up spending a few extra minutes making friends with our dear boy :)', 'Vancouver', '2019-07-18', 'Extra Long (Multiple days)', 1, 49.283888, -123.130314
), 
(
  10, 4, 'Watering the Plants', 'We have a couple succulents and ferns that need watering while I am out of town. Please :)', 'Vancouver', '2021-08-16', 'Extra Long (Multiple Days)', 1, 49.265508, -123.251982
), 
-- 10
(
  1, 7, 'Bottle Drive', 'We are getting a group together for a bottle drive for the church that burned down last fall. Thought we would ask on here to see if anyone is available. Thank you in advance.', 'Vancouver', '2021-07-20', 'Long (Full day)', 20, 49.180178, -122.866156
),
(
  2, 1, 'Fridge quit working!', 'Help, ahhh my fridge randomly quit working, I cannot afford a new one, if anyone knows how to work on appliances and would be willing to help would be my savior, thank you so much in advance!', 'Vancouver', '2021-07-19', 'Quick (Minutes)', 1, 49.251652, -122.867381
),
(
  3, 5, 'Help Studying for my GED', 'I have my GED test coming up, I am behind on my course work and do not feel prepared, if you are in any way academically inclined, I would be overjoyed if you could take a couple hours out of your day to help me, thank you!', 'Vancouver', '2021-08-16', 'Medium (8 hours or less)', 1, 49.817966, -123.111125
), 
(
  4, 4, 'Mow the Grass', 'Our grass is getting incredibly long, we have a mower but I have been sick for the past couple months and have not been able to get after it, if you have the time we would appreciate the help', 'Vancouver', '2021-08-16', 'Short (3 hours or less)', 1, 49.223892, -122.966906
), 
(
  5, 6, 'Tend to Cats', 'We are looking for someone to look after our cats while we are away, they need feed, water and the litter box changed, we will be gone for only a couple days', 'Vancouver', '2021-08-05', 'Extra Long (Multiple days)', 1, 49.270801, -123.204492
), 
(
  6, 7, 'Bake Sale!', 'If you are an aspiring baker come on down to the Lincoln High Elementary school and show off your baked goods, all the proceeds go towards new playground equipment.', 'Vancouver', '2021-11-29', 'Medium (8 hours or less)', 15, 49.309910, -122.954443
),
(
  7, 5, 'Finals coming up', 'I have a programming bootcamp final coming up and I am struggling with some of the core concepts, any advice or assistance would be greatly appreciated, thank you so much.', 'Vancouver', '2021-08-03', 'Extra Long (Multiple days)', 1, 49.227401, -123.085142
),
(
  8, 2, 'Grandma is moving out of her apartment', 'My grandma has a ton of stuff and we are moving her out of apartment and into a home, the more hands the better but I think 5 people would be perfect, if you and/or your friends are free please let me know.', 'Vancouver', '2021-07-29', 'Long (Full day)', 3, 49.097679, -123.072688
),
(
  9, 3, 'My Grandparents need some company', 'I look after my Grandparents and keep them company everyday, I want to take a trip to Costa Rica for a couple months but I am really worried they are going to get lonely, if you feel like making some new friends and getting to know them (they are great people and love to sit, have coffee and talk) please respond to this post.', 'Vancouver', '2021-07-26', 'Extra Long (Multiple Days)', 2, 49.338708, -123.178273
), 
(
  10, 4, 'Eaves troughs cleaned out', 'The eaves troughs on my house need to be cleaned out and I do not trust myself on a ladder any more.', 'Vancouver', '2021-07-25', 'Short (3 hours or less)', 2, 49.152835, -123.140479
),
-- 20
(
  1, 8, 'Planning party', 'I need help planning a surprise party for my friend, I am not much of a partyer so any advice would be helpful!', 'Vancouver', '2021-07-22', 'Medium (8 hours or less)', 1, 49.212080, -122.913543
), 
(
  2, 3, 'My Mom needs a ride to the airport', 'My Mother needs a ride to the airport on Sunday, I would take her but I have to work that day.', 'Vancouver', '2021-09-23', 'Short (3 hours or less)', 1, 49.172591, -122.876464
), 
(
  3, 8, 'Putting together Ikea furniture', 'My Ikea furniture came in and I cannot figure it out, I might be missing some tools, please help.', 'Vancouver', '2021-07-25', 'Short (3 hours or less)', 2, 49.248848, -123.035422
), 
(
  4, 1, 'Leaky tap', 'I have a couple leaky taps that I have not been able to fix, if you have any plumbing experience please do not hesitate to commit to this opportunity.', 'Vancouver', '2021-07-28', 'Medium (8 hours or less)', 1, 49.261621, -122.909766
), 
(
  5, 7, 'Clothes Donation Run', 'The community is getting together and driving around asking everyone for old clothes to donate to the local homeless shelter.', 'Vancouver', '2021-08-18', 'Long (Full day)', 25, 49.172815, -123.116447
), 
(
  6, 7, 'Paint the Church', 'We are asking volunteers to come together and spend an evening with us painting the church, lunch will be provided.', 'Vancouver', '2021-09-15', 'Long (Full day)`', 10, 49.260052, -123.148032
),




-- For Cochrane!

(
  11, 3, 'Porch cleaned out', 'My back porch is full of heavy weights that my son left me before he moved across the country.', 'Vancouver', '2021-08-19', 'Short (3 hours or less)', 1, 49.232771, -123.052892
), 
(
  12, 2,'Moving across town', 'I have to move at the end of the month and I need some help.', 'Vancouver', '2021-09-16', 'Medium (8 hours or less)', 2, 49.219381, -122.981782
), 
(
  13, 1, 'Garage Cleanup', 'I am getting up there in age and I need some strong hands to come and clear my garage. If you find any goodies you may be able to keep them.', 'Vancouver', '2021-08-05', 'Long (Full day)', 1, 49.259953, -123.075681
), 
(
  14, 4,'Clean Up the Park', 'Just want a couple people to help me clean up the park in our little community. Will bring snacks to eat.', 'Vancouver', '2021-07-20', 'Medium (8 hours or less)', 4, 49.242249, -123.151727
), 
-- 30
(
  15, 3, 'Take ol Granpa to Church', 'I have been working doubles at the local diner to make ends meet and I look after my Grandma, if someone could please take him to the church on Sunday that would be great.', 'Vancouver', '2021-08-01', 'Quick (Minutes)', 5, 49.242697, -122.874322
), 
(
  16, 7, 'Help feed the homeless', 'We are short staffed at our homeless shelter and the homeless folks love seeing young children around the place, if you or your kids have some spare time we would really appreciate the extra help!', 'Vancouver', '2021-08-25', 'Extra Long (Multiple days)', 6, 49.172042, -122.873120
),
(
  17, 1, 'Window was mahed by Hooligans!', 'Recently woke up to a smahed window. Need help to fix, have the  materials and beer ready to go.', 'Vancouver', '2021-07-19', 'Medium (8 hours or less)', 4, 49.186518, -123.095937 
), 
(
  18, 5, 'Geometry Test', 'My daughter needs a little bit extra help  with her upcoming geometry test. It is grade 8 geometry so if you know your shapes come holla.', 'Vancouver', '2021-08-02', 'Extra Long (Multiple days)', 1, 49.240232, -122.783341
), 
(
  19, 6, 'Feed LadyBird', 'Have an emergency business trip out of town, and my poor kitty needs someone to feed her while Im gone. Ive made it super easy for you just a quick food/water dish fillup', 'Vancouver', '2021-07-18', 'Extra Long (Multiple days)', 1, 49.257307, -123.184057
), 
(
  10, 4, 'My succulents will Die if you Dont Help', 'The life of my poor succulents are in your hands. If you dont help me thy will die :)', 'Vancouver', '2021-08-16', 'Extra Long (Multiple Days)', 1, 49.193202, -122.931157
), 
(
  11, 7, 'Let me have your bottles', 'Me and my friends need beer money for the weekend. Give us your bottles so we can have a good time, Thanks.', 'Vancouver', '2021-07-20', 'Long (Full day)', 20, 49.315307, -123.056163
),
(
 3, 1, 'Need help transporting Precious item!', 'I have been gifted an old ring from my Uncle. Looking for 9 brave fellows to help me bring it to Mordor to cast it into the fire!', 'Vancouver', '2021-07-19', 'Quick (Minutes)', 9, 49.335817, -123.170777
),
(
  13, 5, 'Study buddy for Finals', 'I have my sword combat test coming up, I am behind on my course work and do not feel prepared, if you are in any way academically inclined, I would be overjoyed if you could take a couple hours out of your day to help me, thank you!', 'Vancouver', '2021-08-16', 'Medium (8 hours or less)', 1, 49.185843, -122.794314
), 
(
  14, 4, 'Gardening Help', 'The garden I tend is getting pretty unwieldy so I  need some help pruning some daisies', 'Vancouver', '2021-08-16', 'Short (3 hours or less)', 1, 49.309284, -122.954830
), 
-- 40
(
  15, 6, 'Cat Help', 'This is a call to all cat lovers, please we need your help to look after our babies when we go out of town', 'Vancouver', '2021-08-05', 'Extra Long (Multiple days)', 1, 49.241665, -123.034800
), 
(
  16, 7, 'Spagetti Sale!', 'We are having a spagetti off to raise money for the children. Think of the children and help us make some spagett', 'Vancouver', '2021-11-29', 'Medium (8 hours or less)', 15, 49.228470, -123.095715
),
(
  19, 3, 'Looking for Grandparents Sitter', 'I look after my Grandparents and keep them company everyday, Its really boring and im sick of it so hoping somone else can come and do it for a bit.', 'Vancouver', '2021-07-26', 'Extra Long (Multiple Days)', 2, 49.285751, -123.139886
), 
(
  20, 4, 'Yard Clean', 'My yard is filthy and my Wife said she will leave me if I dont clean it up pronto. Theres some heavy stuff so need a helping hand.', 'Vancouver', '2021-07-25', 'Short (3 hours or less)', 2, 49.244304, -123.076372
),
(
  11, 8, 'Looking to Spook Friend', 'My friend spooked me real good so I need help to get him back 10x better then him!', 'Vancouver', '2021-07-22', 'Medium (8 hours or less)', 1, 49.248073, -123.108129
), 
(
  12, 3, 'My Dad needs an Airport Pickup', 'My Father needs to be picked up at the airport on Thursday, I would but I am working when his plane lands.', 'Vancouver', '2021-09-23', 'Short (3 hours or less)', 1, 49.193579, -122.983700
), 
(
  13, 8, 'Building a bench', 'I am building a bench with fresh lumber. Came to a point and realized I dont know what I am doing.', 'Vancouver', '2021-07-25', 'Short (3 hours or less)', 2, 49.209613, -122.921052
), 
(
  14, 1, 'Garden Hose Sprung a Leak', 'When to go water my plants and my hose started sparying everywhere and wont completely stop. Need help so my water bill isnt crazy this month.', 'Vancouver', '2021-07-28', 'Medium (8 hours or less)', 1, 49.230921, -122.95367
), 
-- 50
(
  15, 7, 'Donatioon of Supplies', 'I want to gather as much supplies as I can to donate to the local shelter', 'Vancouver', '2021-08-18', 'Long (Full day)', 25, 49.270495, -123.055875
), 
(
  16, 7, 'Paint the Local Skatepark', 'We have been given permission to paint the park with local artists art. So come on down and put your mark down', 'Vancouver', '2021-09-15', 'Long (Full day)`', 10, 49.228470, -122.920764
),


-- completed opportunities
(
  1, 1, 'Painting', 'I would not mind some help painting our newborn babies nursery, we have been so busy with the baby coming.', 'Vancouver', '2021-03-19', 'Medium (8 hours or less)', 1, 49.222750, -123.044238
), 
(
  2, 2,'Moving to Victoria', 'I am moving to Victoria at the end of the month and need some help loading up the uhaul.', 'Vancouver', '2021-06-16', 'Short (3 hours or less)', 2, 49.214749, -123.097315
), 
(
  3, 1, 'HVAC', 'Our hot water tank went the other day, I just wanted someone to take a quick look at it before I bought a new one. Your help would be very appreciated.', 'Cochrane', '2021-03-05', 'Quick (Minutes)', 1, 49.179266, -122.880109
), 
(
  4, 7,'Clean Ditches', 'I would like to gather some people to help me clean out the ditches on the highway leading into town, lets work together to beautify our community :)', 'Vancouver', '2021-04-20', 'Medium (8 hours or less)', 10, 49.141884, -123.102622
), 
(
  5, 3, 'Just a Ride!', 'My grandparents are having their 50th anniversary, they just want to go out to a restaurant but their family is busy, is there any chance someone could give them a ride, they are really nice!', 'Vancouver', '2021-05-01', 'Short (3 hours or less)', 1, 49.110360, -122.696382
), 
(
  6, 7, 'Help feed the homeless', 'We are short a couple volunteers to help serve food at the shelter on 45th, if you have the time, we would appreciate it.', 'Vancouver', '2021-02-25', 'Extra Long (Multiple days)', 2, 49.222483, -123.094865
),
(
  7, 6, 'SnakeCare!', 'Our lovely snake Peter needs some attention while I am away on business, he eats live mice and drinks lots of water.', 'Vancouver', '2021-01-19', 'Extra Long (Multiple days)', 1, 49.253139, -123.181829
), 
(
  8, 5, 'Math 31 Final', 'I have a Math 31 exam coming up and I am sorry to admit that I do not feel prepared for it what so ever, if you could lend me some time, it might save me from failing, thank you!', 'Vancouver', '2021-03-02', 'Long (Full day)', 1, 49.273389, -122.960540
), 
-- 60
(
  9, 6, 'Daisy Needs some Care', 'Our dog Daisy is in need of some assistance while we are away, only for a couple days, she is on some minor pain medication for arthritis that needs to be taken morning and night, if you are available give me a shout, thank you.', 'Vancouver', '2021-02-18', 'Extra Long (Multiple days)', 1, 49.210749, -122.979321
), 
(
  10, 4, 'Plant Care', 'My hubby and I are heading to Vegas for the week, we have a couple plants, nothing crazy but they need to be watered every second day while we are away. Thank you!', 'Vancouver', '2021-06-16', 'Extra Long (Multiple Days)', 2, 49.228616, -122.917671
),
(
  20, 5, 'Struggling Fifth Grader', 'My son is in the fifth grade and is really struggling with his math classes. I am looking for someone, who is good at math, to help him out for a few hours a month.', 'Vancouver', '2021-06-22', 'Extra Long (Multiple days)', 1, 49.26389, -123.13309
),

-- END of past events

(
  5, 8, 'Soccer Coach', 'Looking for someone to fill in for coaching 10 year olds outdoor soccer for this week. All the regulars arent availble.', 'Vancouver', '2021-07-22','Short (3 hours or less)', 1, 49.25900, -123.17541
),
(
  7,7, 'Bottle Drive with Kids', 'Our church group is doing a bottle drive and we are looking for drivers to take the kids around.', 'Vancouver', '2021-08-01', 'Long (Full day)', 5, 49.273389, -122.960540
),
(
  9,7, 'Burnaby Ditch Picking', 'We are organizing a group to clean that filthy ditch in Capitol Hill... You know the one... We will meet outdoors at the Mcdonalds', 'Vancouver', '2021-07-22','Short (3 hours or less)', 10 , 49.28153, -122.99429
),
(
  15,6, 'Please take my sons dog', 'My son got a dog recently, but he is not in the position to take care of it anymore. We are looking for someone to take the dog off our hands. Posting here because my Facebook ad didnt work... The dog lives outside and is fairly laid back.', 'Vancouver', '2021-07-17', 'Extra Long (Multiple days)', 1, 49.31215, -122.98989
)
-- (host_id, category_id, name, description, location, date, time_commitment, number_of_volunteers_needed, lat, lng)