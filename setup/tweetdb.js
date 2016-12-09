db = db.getSiblingDB("tweetapp")

db.users.insert({
    "username": "prajakta",
    "password": "prajakta"
})
db.users.insert({
    "username": "rksv",
    "password": "rksv"
})
db.tweets.insert({
    "heading": "Desert",
    description: "A desert is a barren area of land where little precipitation occurs and consequently living conditions are hostile for plant and animal life. The lack of vegetation exposes the unprotected surface of the ground to the processes of denudation. About one third of the land surface of the world is arid or semi-arid. This includes much of the polar regions where little precipitation occurs and which are sometimes called polar deserts or 'cold deserts'. Deserts can be classified by the amount of precipitation that falls, by the temperature that prevails, by the causes of desertification or by their geographical location.",
    "createdBy": "prajakta",
    "createdAt": new Date(),
    "image": "Desert.jpg"
})
db.tweets.insert({
    "heading": "Jellyfish",
    description: "Jellyfish, or jellies, are the major non-polyp form of individuals of the phylum Cnidaria. They are typified as free-swimming marine animals consisting of a gelatinous umbrella-shaped bell and trailing tentacles. The bell can pulsate for locomotion, while stinging tentacles can be used to capture prey. Jellyfish are found in every ocean, from the surface to the deep sea. Scyphozoans are exclusively marine, but some hydrozoans live in freshwater. Large, often colorful, jellyfish are common in coastal zones worldwide. Jellyfish have roamed the seas for at least 500 million years, and possibly 700 million years or more, making them the oldest multi-organ animal.",
    "createdBy": "rksv",
    "createdAt": new Date()
})
