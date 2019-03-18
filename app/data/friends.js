/* Array of static friend data as an array of objects with each object including a name, photo, and
 static score value pairs. Set to a variables. Scores is an array of 10 numbers which will be summed,
 averaged, and compared to new friend data added via the app and similarly processed.
*/


var friends = [ {
    "name" : "Thanos",
    "photo" : "http://www.mens-hairstylists.com/wp-content/uploads/2015/10/stylish-haircuts-for-men.jpg",
    "scores" : [1,1,4,5,2,4,1,3,2,4]
}, {
    "name" : "War Machine",
    "photo" : "http://science-all.com/images/wallpapers/girl-pictures/girl-pictures-23.jpg",
    "scores" : [3,4,2,3,1,5,2,4,3,2]
}, {
    "name" : "The Hulk",
    "photo" : "http://images.zap2it.com/assets/p9257057_n160758_cc_v4_aa/guys-with-kids.jpg",
    "scores" : [5,3,4,2,5,3,4,3,1,4]
}, {
    "name" : "Black Widow",
    "photo" : "http://www.tenerewilliams.com/wp-content/uploads/2013/02/Naomi-Grossman-headshot.jpg",
    "scores" : [5,3,2,5,3,2,5,4,2,5]
}, {
    "name" : "Thor",
    "photo" : "https://s-media-cache-ak0.pinimg.com/236x/e6/58/db/e658dbeb3518edeab6a19516b8146137.jpg",
    "scores" : [4,1,3,4,1,4,3,2,4,2]
}, {
    "name" : "Captain America",
    "photo" : "http://cdn3.thr.com/sites/default/files/2013/02/emma_roberts.jpg",
    "scores" : [4,5,4,5,4,1,3,3,5,4]
}, {
    "name" : "Captain Marvel",
    "photo" : "https://s-media-cache-ak0.pinimg.com/564x/02/72/d2/0272d2536de31958c6dcb3bb1b447586.jpg",
    "scores" : [3,5,4,4,2,2,3,5,4,4]
}, {
    "name" : "Iron Man",
    "photo" : "http://kelseyedwardsphoto.com/images/gallery/Sports/74_088_FAVS_MAY_0511.jpg",
    "scores" : [5,5,4,4,3,3,2,3,1,1]
}, {
    "name" : "Spiderman",
    "photo" : "http://1.bp.blogspot.com/-6uw9bbJmPs4/VpISNZB5wOI/AAAAAAAAAag/PAQeixYQ4g8/s1600/Varun%2BDhawan%2BLatest%2BPic.jpg",
    "scores" : [1,5,3,2,3,4,5,2,2,4]
}, {
    "name" : "Gamora",
    "photo" : "http://1.bp.blogspot.com/-FMhfNM7lFG4/Ud8XSJsqgLI/AAAAAAAAAIs/uyMyWoJUEk0/s1600/women-medium-wavy-hairstyles.jpg",
    "scores" : [1,3,1,1,3,5,3,3,2,1]
}, {
    "name" : "The Collector",
    "photo" : "http://d236bkdxj385sg.cloudfront.net/wp-content/uploads/2012/02/brian-white.jpg",
    "scores" : [5,2,5,5,4,2,5,2,2,4]
}, {
    "name" : "Black Panther",
    "photo" : "http://benhairstyle.com/wp-content/uploads/2014/10/beautiful_hairstyles_for_young_women.jpg",
    "scores" : [4,5,2,4,2,1,1,3,5,3]
}, {
    "name" : "Star Lord",
    "photo" : "https://s-media-cache-ak0.pinimg.com/736x/09/0f/e7/090fe7f53967e0a0da51f12fa147e01d.jpg",
    "scores" : [2,4,3,3,4,3,2,2,1,2]
}, {
    "name" : "Ebony Maw",
    "photo" : "http://harvardsol.com/wp-content/uploads/2016/07/impressive-new-haircuts-for-young-men-all-inspirational-article.jpg",
    "scores" : [2,4,3,4,5,2,5,2,5,2]
}];

/* create a module export method and set equal to friends object array in order to ready friends 
object for use/export in/to other files */

module.exports = friends;
