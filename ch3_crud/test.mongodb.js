db.by_road_type.find({'기타단일로.death_toll':0}, {city_or_province:1, county:1})



db.by_road_type.find({county:'강릉시'},{'교차로내.accident_count':1})
db.by_road_type.find({'기타단일로.death_toll':0}, {city_or_province:1, county:1})

db.inventory.insertMany([
    { item: "journal", qty: 25, tags: ["blank", "red"] },
    { item: "notebook", qty: 50, tags: ["red", "blank"] },
    { item: "paper", qty: 100, tags: ["yellow", "pink"] },
    { item: "planner", qty: 75, tags: ["blank", "red"] },
    { item: "postcard", qty: 45, tags: ["blue"] },
  ]);

  // 쿼리 예제 , 한문장 씩 확인 해보기. (projection, 모든 컬럼 보여줘.)
  db.inventory.find({ item: { $eq: "journal" } });

  db.inventory.find({ item: "journal" });

  db.inventory.find({ tags: { $in: ["red"] } });

  db.inventory.find({ tags: { $nin: ["blank", "blue"] } });

  db.inventory.find({ tags: { $in: [/^[a-z]*d/] } });

  db.inventory.find({ tags: { $in: [/^b/] } });

  db.inventory.find({ qty: { $not: { $gt: 50 } } });

  db.inventory.find({ qty: { $lte: 50 } });

  db.inventory.find({ $or: [{ qty: { $gt: 90 } }, { qty: { $lt: 50 } }] });

  db.inventory.find({ $and: [{ qty: { $gt: 50 } }, { qty: { $lt: 90 } }] });

  db.inventory.find({ qty: { $gt: 50, $lt: 90 } });