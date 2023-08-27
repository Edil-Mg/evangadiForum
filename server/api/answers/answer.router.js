import express from "express";
const answersRouter = express.Router();

answersRouter.get("/", (req, res) => {
	res.send("answers");
});

export default answersRouter;
