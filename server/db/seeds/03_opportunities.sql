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

-- ["Quick (minutes)", "Short (3 hours or less)", "Medium (8 hours or less)", "Long (Full day)", "Extra Long (Muliple days)"];

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
  8, 5, 'Math tutoring', 'My son is falling behind in Math class and I do not know what to do, if you are decent at Math and are willing we would appreciate it, he is in grade 9 and the Math is beyond me.', 'Vancouver', '2021-08-02', 'Extra Long (Multiple days)', 1, 49.221528, -122.945362
), 
(
  9, 6, 'Feed Rex', 'My husband and I are going away for a couple days and need someone to quickly run in and feed/water our dog, Rex. He is such a good calm dog, you may even end up spending a few extra minutes making friends with our dear boy :)', 'Vancouver', '2019-07-18', 'Extra Long (Multiple days)', 1, 49.283888, -123.130314
), 
-- 10
(
  10, 4, 'Watering the Plants', 'We have a couple succulents and ferns that need watering while I am out of town. Please :)', 'Vancouver', '2021-08-16', 'Extra Long (Multiple Days)', 1, 49.265508, -123.251982
), 
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
  11, 3, 'Porch cleaned out', 'My back porch is full of heavy weights that my son left me before he moved across the country.', 'Cochrane', '2021-08-19', 'Short (3 hours or less)', 1, 51.079480, -114.110274
), 
(
  12, 2,'Moving across town', 'I have to move at the end of the month and I need some help.', 'Cochrane', '2021-09-16', 'Medium (8 hours or less)', 2, 51.070328, -113.993261
), 
(
  13, 1, 'Electrical Work', 'I need help with some electrical during a bathroom renovation, everything else I was able to do alone but I would not mind just some guidance to make sure I do everything correctly.', 'Cochrane', '2021-08-05', 'Long (Full day)', 1, 50.997354, -113.969955
), 
(
  14, 4,'Picking garbage', 'Just want a couple people to help me pretty up the neighborhood by cleaning up some of the garbage around the church, I will bring sandwiches and tea.', 'Cochrane', '2021-07-20', 'Medium (8 hours or less)', 4, 51.034313, -114.205924
), 
(
  15, 3, 'Take Grandma to the clinic', 'I have been working doubles at the local diner to make ends meet and I look after my Grandma, if someone could please take her to the clinic to get her prescriptions renewed I would be so apprecaitive, thank you so much in advance.', 'Cochrane', '2021-08-01', 'Quick (Minutes)', 5, 51.113326, -114.156642
), 
(
  16, 7, 'Help feed residents at Lodge', 'We are short staffed at our continuing care and the elderly folks love seeing young children around the lodge, if you or your kids have some spare time we would really appreciate the extra help!', 'Cochrane', '2021-08-25', 'Extra Long (Multiple days)', 6, 50.994909, -113.975539
),
(
  17, 1, 'My front step broke!', 'I am supposed to host a big dinner this weekend and my front step has pretty much imploded, if any strong handy people have any spare time I could really use the help, thank you very much!', 'Cochrane', '2021-07-19', 'Medium (8 hours or less)', 3, 51.172910, -114.114346
), 
(
  18, 5, 'Math tutoring', 'My son is falling behind in Math class and I do not know what to do, if you are decent at Math and are willing we would appreciate it, he is in grade 9 and the Math is beyond me.', 'Cochrane', '2021-08-02', 'Extra Long (Multiple days)', 1, 51.085254, -114.266331
), 
(
  19, 6, 'Feed Rex', 'My husband and I are going away for a couple days and need someone to quickly run in and feed/water our dog, Rex. He is such a good calm dog, you may even end up spending a few extra minutes making friends with our dear boy :)', 'Cochrane', '2021-07-18', 'Extra Long (Multiple days)', 1, 51.168019, -113.960936
), 
-- 10
(
  10, 4, 'Watering the Plants', 'We have a couple succulents and ferns that need watering while I am out of town. Please :)', 'Cochrane', '2021-08-16', 'Extra Long (Multiple Days)', 1, 51.126015, -114.247141
), 
(
  11, 7, 'Bottle Drive', 'We are getting a group together for a bottle drive for the church that burned down last fall. Thought we would ask on here to see if anyone is available. Thank you in advance.', 'Cochrane', '2021-07-20', 'Long (Full day)', 20, 50.894661, -113.935830
),
(
  12, 1, 'Fridge quit working!', 'Help, ahhh my fridge randomly quit working, I cannot afford a new one, if anyone knows how to work on appliances and would be willing to help would be my savior, thank you so much in advance!', 'Cochrane', '2021-07-19', 'Quick (Minutes)', 1, 51.072411, -114.064012
),
(
  13, 5, 'Help Studying for my GED', 'I have my GED test coming up, I am behind on my course work and do not feel prepared, if you are in any way academically inclined, I would be overjoyed if you could take a couple hours out of your day to help me, thank you!', 'Cochrane', '2021-08-16', 'Medium (8 hours or less)', 1, 51.034301, -114.181801
), 
(
  14, 4, 'Mow the Grass', 'Our grass is getting incredibly long, we have a mower but I have been sick for the past couple months and have not been able to get after it, if you have the time we would appreciate the help', 'Cochrane', '2021-08-16', 'Short (3 hours or less)', 1, 51.188369, -114.459242
), 
(
  15, 6, 'Tend to Cats', 'We are looking for someone to look after our cats while we are away, they need feed, water and the litter box changed, we will be gone for only a couple days', 'Cochrane', '2021-08-05', 'Extra Long (Multiple days)', 1, 51.192619, -114.502071
), 
(
  16, 7, 'Bake Sale!', 'If you are an aspiring baker come on down to the Lincoln High Elementary school and show off your baked goods, all the proceeds go towards new playground equipment.', 'Cochrane', '2021-11-29', 'Medium (8 hours or less)', 15, 51.207073, -114.472146
),
(
  17, 5, 'Finals coming up', 'I have a programming bootcamp final coming up and I am struggling with some of the core concepts, any advice or assistance would be greatly appreciated, thank you so much.', 'Cochrane', '2021-08-03', 'Extra Long (Multiple days)', 1, 51.199159, -114.514152
),
(
  18, 2, 'Grandma is moving out of her apartment', 'My grandma has a ton of stuff and we are moving her out of apartment and into a home, the more hands the better but I think 5 people would be perfect, if you and/or your friends are free please let me know.', 'Cochrane', '2021-07-29', 'Long (Full day)', 3, 51.186540, -114.453381
),
(
  19, 3, 'My Grandparents need some company', 'I look after my Grandparents and keep them company everyday, I want to take a trip to Costa Rica for a couple months but I am really worried they are going to get lonely, if you feel like making some new friends and getting to know them (they are great people and love to sit, have coffee and talk) please respond to this post.', 'Cochrane', '2021-07-26', 'Extra Long (Multiple Days)', 2, 51.174008, -114.472507
), 
(
  20, 4, 'Eaves troughs cleaned out', 'The eaves troughs on my house need to be cleaned out and I do not trust myself on a ladder any more.', 'Cochrane', '2021-07-25', 'Short (3 hours or less)', 2, 51.162250, -114.444547
),
(
  11, 8, 'Planning party', 'I need help planning a surprise party for my friend, I am not much of a partyer so any advice would be helpful!', 'Cochrane', '2021-07-22', 'Medium (8 hours or less)', 1, 51.187727, -114.425966
), 
(
  12, 3, 'My Mom needs a ride to the airport', 'My Mother needs a ride to the airport on Sunday, I would take her but I have to work that day.', 'Cochrane', '2021-09-23', 'Short (3 hours or less)', 1, 51.197561, -114.424077
), 
(
  13, 8, 'Putting together Ikea furniture', 'My Ikea furniture came in and I cannot figure it out, I might be missing some tools, please help.', 'Cochrane', '2021-07-25', 'Short (3 hours or less)', 2, 51.173222, -114.473012
), 
(
  14, 1, 'Leaky tap', 'I have a couple leaky taps that I have not been able to fix, if you have any plumbing experience please do not hesitate to commit to this opportunity.', 'Cochrane', '2021-07-28', 'Medium (8 hours or less)', 1, 51.22213, -114.466949
), 
(
  15, 7, 'Clothes Donation Run', 'The community is getting together and driving around asking everyone for old clothes to donate to the local homeless shelter.', 'Cochrane', '2021-08-18', 'Long (Full day)', 25, 51.184169, -114.497407
), 
(
  16, 7, 'Paint the Church', 'We are asking volunteers to come together and spend an evening with us painting the church, lunch will be provided.', 'Cochrane', '2021-09-15', 'Long (Full day)`', 10, 51.212348, -114.465217
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
(
  9, 6, 'Daisy Needs some Care', 'Our dog Daisy is in need of some assistance while we are away, only for a couple days, she is on some minor pain medication for arthritis that needs to be taken morning and night, if you are available give me a shout, thank you.', 'Vancouver', '2021-02-18', 'Extra Long (Multiple days)', 1, 49.210749, -122.979321
), 
-- 10
(
  10, 4, 'Plant Care', 'My hubby and I are heading to Vegas for the week, we have a couple plants, nothing crazy but they need to be watered every second day while we are away. Thank you!', 'Vancouver', '2021-06-16', 'Extra Long (Multiple Days)', 2, 49.228616, -122.917671
)

-- cochrane completed opportunities

-- (
--   11, 7, 'Bottle Drive', 'We are getting a group together for a bottle drive for the church that burned down last fall. Thought we would ask on here to see if anyone is available. Thank you in advance.', 'Cochrane', '2021-07-20', 'Long (Full day)', 20, 50.894661, -113.935830
-- ),
-- (
--   12, 1, 'Fridge quit working!', 'Help, ahhh my fridge randomly quit working, I cannot afford a new one, if anyone knows how to work on appliances and would be willing to help would be my savior, thank you so much in advance!', 'Cochrane', '2021-07-19', 'Quick (Minutes)', 1, 51.072411, -114.064012
-- ),
-- (
--   13, 5, 'Help Studying for my GED', 'I have my GED test coming up, I am behind on my course work and do not feel prepared, if you are in any way academically inclined, I would be overjoyed if you could take a couple hours out of your day to help me, thank you!', 'Cochrane', '2021-08-16', 'Medium (8 hours or less)', 1, 51.034301, -114.181801
-- ), 
-- (
--   14, 4, 'Mow the Grass', 'Our grass is getting incredibly long, we have a mower but I have been sick for the past couple months and have not been able to get after it, if you have the time we would appreciate the help', 'Cochrane', '2021-08-16', 'Short (3 hours or less)', 1, 51.188369, -114.459242
-- ), 
-- (
--   15, 6, 'Tend to Cats', 'We are looking for someone to look after our cats while we are away, they need feed, water and the litter box changed, we will be gone for only a couple days', 'Cochrane', '2021-08-05', 'Extra Long (Multiple days)', 1, 51.192619, -114.502071
-- ), 
-- (
--   16, 7, 'Bake Sale!', 'If you are an aspiring baker come on down to the Lincoln High Elementary school and show off your baked goods, all the proceeds go towards new playground equipment.', 'Cochrane', '2021-11-29', 'Medium (8 hours or less)', 15, 51.207073, -114.472146
-- ),
-- (
--   17, 5, 'Finals coming up', 'I have a programming bootcamp final coming up and I am struggling with some of the core concepts, any advice or assistance would be greatly appreciated, thank you so much.', 'Cochrane', '2021-08-03', 'Extra Long (Multiple days)', 1, 51.199159, -114.514152
-- ),
-- (
--   18, 2, 'Grandma is moving out of her apartment', 'My grandma has a ton of stuff and we are moving her out of apartment and into a home, the more hands the better but I think 5 people would be perfect, if you and/or your friends are free please let me know.', 'Cochrane', '2021-07-29', 'Long (Full day)', 3, 51.186540, -114.453381
-- ),
-- (
--   19, 3, 'My Grandparents need some company', 'I look after my Grandparents and keep them company everyday, I want to take a trip to Costa Rica for a couple months but I am really worried they are going to get lonely, if you feel like making some new friends and getting to know them (they are great people and love to sit, have coffee and talk) please respond to this post.', 'Cochrane', '2021-07-26', 'Extra Long (Multiple Days)', 2, 51.174008, -114.472507
-- ), 
-- (
--   20, 4, 'Eaves troughs cleaned out', 'The eaves troughs on my house need to be cleaned out and I do not trust myself on a ladder any more.', 'Cochrane', '2021-07-25', 'Short (3 hours or less)', 2, 51.162250, -114.444547
-- ),
-- (
--   11, 8, 'Planning party', 'I need help planning a surprise party for my friend, I am not much of a partyer so any advice would be helpful!', 'Cochrane', '2021-07-22', 'Medium (8 hours or less)', 1, 51.187727, -114.425966
-- ), 
-- (
--   12, 3, 'My Mom needs a ride to the airport', 'My Mother needs a ride to the airport on Sunday, I would take her but I have to work that day.', 'Cochrane', '2021-09-23', 'Short (3 hours or less)', 1, 51.197561, -114.424077
-- ), 
-- (
--   13, 8, 'Putting together Ikea furniture', 'My Ikea furniture came in and I cannot figure it out, I might be missing some tools, please help.', 'Cochrane', '2021-07-25', 'Short (3 hours or less)', 2, 51.173222, -114.473012
-- ), 
-- (
--   14, 1, 'Leaky tap', 'I have a couple leaky taps that I have not been able to fix, if you have any plumbing experience please do not hesitate to commit to this opportunity.', 'Cochrane', '2021-07-28', 'Medium (8 hours or less)', 1, 51.22213, -114.466949
-- ), 
-- (
--   15, 7, 'Clothes Donation Run', 'The community is getting together and driving around asking everyone for old clothes to donate to the local homeless shelter.', 'Cochrane', '2021-08-18', 'Long (Full day)', 25, 51.184169, -114.497407
-- ), 
-- (
--   16, 7, 'Paint the Church', 'We are asking volunteers to come together and spend an evening with us painting the church, lunch will be provided.', 'Cochrane', '2021-09-15', 'Long (Full day)`', 10, 51.212348, -114.465217
-- )