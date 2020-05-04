const express = require("express");
const router = express.Router();
const { signIn, signUp } = require("../controllers/auth");
const { authenticated } = require("../middlewares/auth");
const {
  index: getConsultations,
  show: getConsultation,
  create: createConsultation,
  update: updateConsultation,
} = require("../controllers/consultation");
const {
  index: getArticles,
  show: getArticle,
  create: createArticle,
} = require("../controllers/article");

const {
  show: getProfile,
  update: changePassword,
} = require("../controllers/user");

router.post("/signin", signIn);

router.post("/signup", signUp);

router.patch("/profile", authenticated, changePassword);
router.get("/profile", authenticated, getProfile);

//article
router.get("/articles", getArticles); //public
router.get("/article/:id", getArticle); //public
router.post("/articles", authenticated, createArticle); //doctor

//Consultation
router.get("/consultations", authenticated, getConsultations); //doctor
router.get("/consultation/:id", authenticated, getConsultation); // doctor & Patient
router.post("/consultations", authenticated, createConsultation); //patient
router.post("/consultation/:id/reply", authenticated, updateConsultation); //doctor

module.exports = router;
