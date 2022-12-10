import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Video from "./pages/Video";

const testObj = {
  id: 5,
  title: "SASS Tutorial in English - Overview of SASS",
  tags: ["sass", "css", "ui"],
  isLoading: true,
  unlikes: {
    id: 37456786,
    title: "Tutorial in English",
  },
};
const highPriority = [];
const lowPriority = [];
var result = Object.keys(testObj).map((key) => {
    if (typeof testObj[key] === "string") {
    highPriority.push({
      id: key,
      value: testObj[key]
    });
} else if (typeof testObj[key] === "number") {
    highPriority.push({
      id: key,
      value: testObj[key]
    });
} else if (typeof testObj[key] === "boolean") {
    highPriority.push({
      id: key,
      value: testObj[key]
    });
} else {
     lowPriority.push({
       id: key,
       value: testObj[key],
     });
}

});

const finalResult = [...highPriority,...lowPriority];

const dataTypeTestWithSorting = (testObj) => {
  const objPropertyArray = [];
  const objValueArray = [];
  const highPriority = [];
  const lowPriority = [];
  const pairArray = [];

  for (const property in testObj) {
    objPropertyArray.push(property);
    objValueArray.push(testObj[property]);
    //  console.log(typeof testObj[property]);
    if (typeof testObj[property] === "string") {
      console.log("good");
    } else if (typeof testObj[property] === "number") {
      console.log("good");
    } else if (typeof testObj[property] === "boolean") {
      console.log("good");
    } else {
      console.log("bad");
    }
  }

  //    console.log("propertyArray:", objPropertyArray);
  //    console.log("value:", objValueArray);
};
// dataTypeTestWithSorting(testObj);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:videoId" element={<Video />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
