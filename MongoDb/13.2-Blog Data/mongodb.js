const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const ObjectID = require("mongodb").ObjectId;
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "BlogPosts";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }
    console.log("Connected correctly!");
    // const db = client.getDatabase(databaseName);

    const db = client.db(databaseName);
    db.collection("users").updateOne(
      { _id: ObjectID("62b063fcd13343a3991b9b71") },
      {
        $push: {
          posts: ObjectID("62b06d29b7b1c4295652812c"),
        },
      }
    );
    db.collection("users").updateOne(
      { _id: ObjectID("62b063fcd13343a3991b9b71") },
      {
        $push: {
          comments: ObjectID("62b072f8a7691bb53943a7af"),
        },
      }
    );

    db.collection("users").updateOne(
      { _id: ObjectID("62b06d29b7b1c4295652812c") },
      {
        $push: {
          comments: ObjectID("62b072f8a7691bb53943a7af"),
        },
      }
    );
    db.collection("users").updateOne(
      { _id: ObjectID("62b06d29b7b1c4295652812c") },
      {
        $push: {
          comments: ObjectID("62b072f8a7691bb53943a7af"),
        },
      }
    );
    db.collection("posts").updateOne(
      { _id: ObjectID("62b06d29b7b1c4295652812c") },
      {
        $push: {
          comments: ObjectID("62b072f8a7691bb53943a7af"),
        },
      }
    );
    db.collection("posts").updateOne(
      { _id: ObjectID("62b06d29b7b1c4295652812a") },
      {
        $push: {
          comments: ObjectID("62b072f8a7691bb53943a7b0"),
        },
      }
    );
    db.collection("posts").updateOne(
      { _id: ObjectID("62b06d29b7b1c4295652812b") },
      {
        $push: {
          comments: ObjectID("62b072f8a7691bb53943a7ae"),
        },
      }
    );
    db.collection("users").insertMany([
      {
        name: "amir",
        email: "aaa@yyy.com",
        posts: [],
        comments: [],
      },
      {
        name: "keter",
        email: "bbb@ttt.com",
        posts: [],
        comments: [],
      },
      {
        name: "sammer",
        email: "ccc@ppp.com",
        posts: [],
        comments: [],
      },
    ]);

    db.collection("posts").insertMany([
      {
        users_id: ObjectID("62b063fcd13343a3991b9b6f"),
        title: "I love react",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus ligula, consectetur nec vehicula non.",
        comments: [],
      },
      {
        users_id: ObjectID("62b063fcd13343a3991b9b70"),
        title: "I love java script",
        content:
          " quis volutpat velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non blandit purus, ",
        comments: [],
      },
      {
        users_id: ObjectID("62b063fcd13343a3991b9b71"),
        title: "I love css",
        content:
          "a condimentum nisi,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat pulvinar ante",
        comments: [],
      },
    ]);

    db.collection("comments").insertMany([
      {
        user_id: ObjectID("62b063fcd13343a3991b9b6f"),
        post_id: ObjectID("62b06d29b7b1c4295652812b"),
        comment: "love it",
      },
      {
        user_id: ObjectID("62b063fcd13343a3991b9b70"),
        post_id: ObjectID("62b06d29b7b1c4295652812c"),
        comment: "hate it",
      },
      {
        user_id: ObjectID("62b063fcd13343a3991b9b71"),
        post_id: ObjectID("62b06d29b7b1c4295652812a"),
        comment: "like it",
      },
    ]);
  }
);
