/* Array of static friend data as an array of objects with each object including a name, photo, and
 static score value pairs. Set to a variables. Scores is an array of 10 numbers which will be summed,
 averaged, and compared to new friend data added via the app and similarly processed.
*/


var friends = [ {
    "name" : "Thanos",
    "photo" : "https://www.thewrap.com/wp-content/uploads/2018/05/avengers-infinity-war-wildest-fan-theories-thanos.jpg",
    "scores" : [1,1,4,5,2,4,1,3,2,4]
}, {
    "name" : "War Machine",
    "photo" : "https://www.mordeo.org/files/uploads/2018/04/War-Machine-In-Avengers-Infinity-War-HD-Mobile-Wallpaper-950x1689.jpg",
    "scores" : [3,4,2,3,1,5,2,4,3,2]
}, {
    "name" : "The Hulk",
    "photo" : "https://cdn.images.express.co.uk/img/dynamic/36/590x/secondary/hulk-avengers-infinity-war-1442812.jpg?r=1533126924113",
    "scores" : [5,3,4,2,5,3,4,3,1,4]
}, {
    "name" : "Black Widow",
    "photo" : "https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2018/11/black_widow_2.jpg",
    "scores" : [5,3,2,5,3,2,5,4,2,5]
}, {
    "name" : "Thor",
    "photo" : "https://imgc.allpostersimages.com/img/print/posters/avengers-infinity-war-thor-and-stormbreaker_a-G-15605542-9761631.jpg",
    "scores" : [4,1,3,4,1,4,3,2,4,2]
}, {
    "name" : "Captain America",
    "photo" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfnl2ULCXnfZpPHLNRDPXKc5oVP6to_IlyVHmq-ueAaFeZ7d3F",
    "scores" : [4,5,4,5,4,1,3,3,5,4]
}, {
    "name" : "Captain Marvel",
    "photo" : "https://i.pinimg.com/736x/27/5d/41/275d41cc7a602e7e7af1c9763d145259.jpg",
    "scores" : [3,5,4,4,2,2,3,5,4,4]
}, {
    "name" : "Iron Man",
    "photo" : "https://media1.popsugar-assets.com/files/thumbor/_YjaPHBh0SWKwlFBIiIGydPdQPw/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/04/30/868/n/1922283/400075105ae773ae4c4e24.21390769_/i/Does-Iron-Man-Die-Avengers-Infinity-War.jpg",
    "scores" : [5,5,4,4,3,3,2,3,1,1]
}, {
    "name" : "Spiderman",
    "photo" : "https://cdn.vox-cdn.com/thumbor/1qTweiB2Eqh4MF2q_5u0NXa2j94=/0x0:2048x1080/1200x800/filters:focal(694x342:1020x668)/cdn.vox-cdn.com/uploads/chorus_image/image/59580327/infinity_war_spider.0.jpg",
    "scores" : [1,5,3,2,3,4,5,2,2,4]
}, {
    "name" : "Gamora",
    "photo" : "https://www.thewrap.com/wp-content/uploads/2018/08/avengers-infinity-war-thanos-gamora-plot-hole.jpg",
    "scores" : [1,3,1,1,3,5,3,3,2,1]
}, {
    "name" : "The Collector",
    "photo" : "https://static2.srcdn.com/wordpress/wp-content/uploads/2018/04/Benicio-del-Toro-as-the-Collector-with-the-Reality-Stone-in-Thor-The-Dark-World.jpg",
    "scores" : [5,2,5,5,4,2,5,2,2,4]
}, {
    "name" : "Black Panther",
    "photo" : "https://heroichollywood.com/wp-content/uploads/2018/11/Avengers_Infinity_War_Black_Panther_Marvel_Studios_Peoples_Choice_Awards.jpg",
    "scores" : [4,5,2,4,2,1,1,3,5,3]
}, {
    "name" : "Star Lord",
    "photo" : "https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/57f5055b440243d357b3b309/1475675490790/star-lord-rumored-to-have-a-major-role-in-avengers-infinity-war1?format=2500w",
    "scores" : [2,4,3,3,4,3,2,2,1,2]
}, {
    "name" : "Brunnhilde",
    "photo" : "https://vignette.wikia.nocookie.net/disney/images/d/d0/Thor_Ragnarok_-_Valkyrie.jpg/revision/latest?cb=20171019180629",
    "scores" : [5,3,4,1,3,5,3,3,2,1]
}, {
    "name" : "Ebony Maw",
    "photo" : "https://cdn3.movieweb.com/i/article/pviOntDA5KzMR0Pekt0Px4XFHjUDWX/798:50/Infinity-War-Ebony-Maw-Concept-Art.jpg",
    "scores" : [2,4,3,4,5,2,5,2,5,2]
}];

/* create a module export method and set equal to friends object array in order to ready friends 
object for use/export in/to other files */

module.exports = friends;
