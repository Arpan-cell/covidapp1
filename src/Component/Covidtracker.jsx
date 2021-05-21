import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Covidtracker() {
  const [userD, setuserD] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.covid19india.org/data.json")
      .then((res) => {
        //Console.log(res)
        setuserD(res.data.statewise);
        console.log(res.data.statewise);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="full">
        <div class="caption">
          <span>
            <h5>Live Covid Tracker</h5>
          </span>
        </div>
        <div class="table">
          <div class="th">
            <div class="td">State</div>
            <div class="td">Active</div>
            <div class="td">Confirmed</div>
            <div class="td">Deaths</div>
            <div class="td">Recovered</div>
            <div class="td">Last Update</div>
          </div>
          {userD.map((e) => {
            return (
              <>
                <div class="tbody">
                  <div class="tr">
                    <div class="td">{e.state}</div>
                    <div class="td">{e.active}</div>
                    <div class="td">{e.confirmed}</div>
                    <div class="td">{e.deaths}</div>
                    <div class="td">{e.recovered}</div>
                    <div class="td">{e.lastupdatedtime}</div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
