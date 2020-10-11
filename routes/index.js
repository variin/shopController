var express = require('express');
const db = require('../model/db');

var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


// menuFucntion
router.get("/", async (req, res) => {
  const storeId = req.params.storeId;
  const categoryId = req.params.categoryId;

  const menuDetails = await db.collection("store")
        .doc("KkTmqhsEwfwoCB4qw8Pq")
        .get()
        .then((querySnapshot) => querySnapshot.data());

  const shopName = menuDetails.storeName;
  let menuList = menuDetails.menu;
  const categoriesList = menuDetails.categories;
  let categoriesFilter = [];
  if (categoryId) {
        categoriesFilter = menuDetails.categories.filter((item) => item.category == categoryId)
        menuList = menuList.filter((item) => item.category == categoryId);
  }
  console.log(storeId);
  console.log(shopName);
  console.log(menuList);
  console.log(categoriesList);
  console.log(categoriesFilter);

  res.render("index", { storeId, shopName, menuList, categoriesList, categoriesFilter });

}
);

router.get("/:categoryId", async (req, res) => {
  const storeId = req.params.storeId;
  const categoryId = req.params.categoryId;

  const menuDetails = await db.collection("store")
        .doc("KkTmqhsEwfwoCB4qw8Pq")
        .get()
        .then((querySnapshot) => querySnapshot.data());

  const shopName = menuDetails.storeName;
  let menuList = menuDetails.menu;
  const categoriesList = menuDetails.categories;
  let categoriesFilter = [];
  if (categoryId) {
        categoriesFilter = menuDetails.categories.filter((item) => item.category == categoryId)
        menuList = menuList.filter((item) => item.category == categoryId);
  }
  console.log(storeId);
  console.log(shopName);
  console.log(menuList);
  console.log(categoriesList);
  console.log(categoriesFilter);


  res.render("index", { storeId, shopName, menuList, categoriesList, categoriesFilter, });
}
);
module.exports = router;