const express = require("express");
const morgan = require("morgan");

const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

//---------------------------middleware-------------------------
app.use(morgan("dev"));
app.use(express.json());

app.use((req, res, next) => {
  console.log("Hello from the middleware");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
//-------------------------------------------

//-------------routes-------------------------------

// app.get("/api/v1/tours", getAllTours);
// app.post("/api/v1/tours", createNewTour);
// app.get("/api/v1/tours/:id", getTour);
// app.patch("/api/v1/tours/:id", updateTour);
// app.delete("/api/v1/tours/:id", deleteTour);
//--------------------------------------------------

app.use("api/v1/users", userRouter);
app.use("api/v1/tours", tourRouter);
//-----------------start server-----------------------
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
