import "./App.scss";
import React, { useState, useEffect } from "react";
import { DotLoader } from "react-spinners";
import axios from "axios";
import Card from "./components/Card";
/* eslint-disable */
import Sweetpagination from "sweetpagination";
import { Roll } from "react-awesome-reveal";
/* eslint-enable */
function App() {
  const [uniData, setUniData] = useState([]);
  const [dataArr, setDataArr] = useState([]);
  const [currentPageData, setCurrentPageData] = useState([]);

  const baseUrl =
    "http://universities.hipolabs.com/search?country=United+States";

  async function fetchData() {
    let response = await axios(baseUrl);
    let { data } = response;
    setUniData(data);
    setDataArr(uniData);
  }

  useEffect(() => {
    fetchData();
    /* eslint-disable */
  }, [uniData]);
  /* eslint-enable */

  return (
    <div className="App">
      {!dataArr.length ? (
        <DotLoader color="#2F3C7E" />
      ) : (
        <>
          <div className="flex">
            <h1>List of Universities :</h1>
            <Roll duration={`800`}>
              {currentPageData.map((el) => (
                <Card
                  title={el.name}
                  country={el.alpha_two_code}
                  website={el.web_pages[0]}
                  key={el.name}
                />
              ))}
            </Roll>
            <Sweetpagination
              currentPageData={setCurrentPageData}
              dataPerPage={10}
              getData={dataArr}
              navigation={true}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
