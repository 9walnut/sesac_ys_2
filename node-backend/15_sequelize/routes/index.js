const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor");
const controller2 = require("../controller/main_se");

router.get("/visitor/test/:id", controller.getTest);

// ~~~~~:8000 -> index.ejs render
router.get("/", controller.home);

// ~~~~~:8000/visitor -> visitor.ejs render
router.get("/visitors", controller.visitor);

// 방명록 등록
router.post("/visitor", controller.postVisitor);

// 방명록 수정
router.patch("/visitor", controller.patchVisitor);

// 방명록 하나 조회
router.get("/visitor/:id", controller.getVisitorById);
// 방명록 삭제
router.delete("/visitor/:id", controller.deleteVisitor);

// 회원가입
router.get("/user/signup", controller2.signup);
router.post("/user/signup", controller2.post_signup);

// 로그인
router.get("/user/login", controller2.login);
router.post("/user/login", controller2.post_login);

// 프로필
router.post("/user/profile", controller2.post_profile);
// 로그인 유지시킬 수 있는 기술을 모르기 때문에 임시로 post 전송
router.patch("/user/profile/edit/:id", controller2.profile_edit);
router.delete("/user/profile/delete/:id", controller2.profile_delete);

module.exports = router;
