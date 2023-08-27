import express from "express";
const questionsRouter = express.Router();

questionsRouter.get("/", (req, res) => {
	res.send("questions");
});

export default questionsRouter;
