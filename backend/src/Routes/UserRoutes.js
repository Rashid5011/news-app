import express from "express";
import {
  DeleteUser,
  LoginUser,
  NewPassword,
  RegisterdUser,
  changeRole,
  forgotPassword,
  getUser,
  otpResend,
  otpVerify,
} from "../Controllers/UserController.js";
import {
  ArticleContent,
  ArticleContentDelete,
  ArticleContentGet,
  DeleteArticle,
  GetReportArticle,
  PostArticle,
  ReportArticle,
  adminGetArticle,
  answerReportArticle,
  approvedArticle,
  createSubCategory,
  getArticle,
  getSubCategory,
  imageUpload,
} from "../Controllers/ArticleController.js";
import { upload } from "../middleware/index.js";
import { Ads, GetAds } from "../Controllers/AdsController.js";
import { GetLiveStream, LiveStream } from "../Controllers/LiveController.js";
import { GetComment, OnComment } from "../Controllers/CommentController.js";
import { GetPoll, OnPoll } from "../Controllers/PollController.js";

const route = express.Router();

route.route("/registerd").post(RegisterdUser);
route.route("/login").post(LoginUser);
route.route("/verfiy").post(otpVerify).post(otpResend);
route.route("/role").put(changeRole);
route.route("/user").get(getUser).delete(DeleteUser);
route.route("/article").get(getArticle).delete(DeleteArticle);
route.route("/article/:id").put(approvedArticle).post(PostArticle);
route.route("/publish/:id").get(adminGetArticle);
route.route("/image").post(upload.single("file"), imageUpload);
route.route("/forgot").post(forgotPassword).put(NewPassword);
route
  .route("/report")
  .post(ReportArticle)
  .get(GetReportArticle)
  .put(answerReportArticle);
route
  .route("/content")
  .post(ArticleContent)
  .get(ArticleContentGet)
  .delete(ArticleContentDelete);
route.route("/ads").get(GetAds).post(Ads);
route.route("/live").get(GetLiveStream).post(LiveStream);
route.route("/comment").get(GetComment).post(OnComment);
route.route("/poll").get(GetPoll).post(OnPoll);
route.route("/subcategory").get(getSubCategory).post(createSubCategory);
export default route;
