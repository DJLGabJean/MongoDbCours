//Question 1

//db.publis.aggregate([ {$match : {authors : "Toru Ishida"}} , {$sort : {booktitle : 1, "pages.start" : 1}} ]);
//ou
//db.publis.aggregate([ {$match : {authors : $in : ["Toru Ishida"]}}} ]);

//Question 2

//db.publis.aggregate([ {$match : {authors : "Toru Ishida"}} , {$sort : {booktitle : 1, "pages.start" : 1}} , {$project : {_id : 0, title : 1, pages : 1}} ]);

//Question 3

//db.publis.aggregate([ {$match : {authors : "Toru Ishida"}} , {$group : {_id : null, count : { $sum : 1}}} ]);

//Question 4

//db.publis.aggregate([ {$match : {year : {$gte : 2011}}} , {$group : {_id : "$type", count : { $sum : 1}}} ]);

//Question 5

//db.publis.aggregate([ {$unwind : "$authors"} , {$group : {_id : "$authors", nombre : {$sum : 1}}}, {$sort : {nombre : -1}}, {$project : {nombre : {$convert : {input : "$nombre", to : "int"}}}} ]);

//Question 6

//db.publis.aggregate([ {$match: {type: "Book"}}, {$project: {_id: 0, title: 1, total: {$size: "$authors"}}}, {$sort: {total: -1}}]);

// Question 7

//db.publis.aggregate([ {$match: {type: "Book"}}, {$project: {_id: 0, title: 1, authors: 1, total: {$size: "$authors"}}}, {$match: {total: {$gt: 1}}} , {$sort: {total: -1}} ]);

// Question 8

//db.publis.aggregate([ {$match: {type: "Book"}}, {$project: {_id: 0, total: { $size: "$authors" }}}, {$match: {total: { $gt: 1 }}}, {$count: "nombre"} ]);








