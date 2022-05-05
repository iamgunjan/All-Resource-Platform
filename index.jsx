import React from "react"
import Login from "./Login"

import youngManWorkingOnLaptop from "./youngManWorkingOnLaptop.svg"
import group4 from "./group4.svg"
import girlAndBoySittingWithTablet from "./girlAndBoySittingWithTablet.svg"
import guyIsStudyingRemotelyWithATeacher from "./guyIsStudyingRemotelyWithATeacher.svg"

const App = (props) => {
  return (
    <div>
      <div className="div-2">
        <div className="div-3">
          <span className="span-1">Devportal</span>
          <div className="div-4">
            <span className="span-2">About Us</span>
            <span className="span-3">Resources</span>
            <span className="span-4">Mentorship</span>
            <span className="span-5">Contact Us</span>
          </div>
        </div>
        <div className="div-5">
          <div className="div-6">
            <span className="span-6">
              Welcome! Get all resources related to CSE at one place
            </span>
            <div className="button-login-7">
              <span className="span-7">Explore</span>
            </div>
          </div>
          <img className="img-1" src={youngManWorkingOnLaptop} />
        </div>
        <div className="div-8">
          <img className="img-2" src={group4} />
          <div className="div-9">
            <span className="span-8">
              Resources Break the barriers of Tiers, checkout the amazing
              resources that are available for all. Get most from these
              resources & be the best version of yourself. After evaluating the
              tech stacks you want to study, build your skills from the ground,
              with our structured roadmaps and resources.
            </span>
            <div className="button-login-10">
              <span className="span-7">Get Started</span>
            </div>
          </div>
        </div>
        <div className="div-11">
          <div className="div-12">
            <img className="img-3" src={girlAndBoySittingWithTablet} />
            <span className="span-10">
              Mentorship Connect with mentors from different places, get
              guidance on projects.
            </span>
          </div>
          <Login />
        </div>
        <div className="div-13">
          <img className="img-4" src={guyIsStudyingRemotelyWithATeacher} />
          <span className="span-11">
            Contact Us Email on: panerigunjan871@gmail.com Call on: +91 - 74638
            70429
          </span>
        </div>
        <div className="footer-14">
          <div className="div-15">
            <span className="span-12">Devportal</span>
            <span className="span-13">Info</span>
            <span className="span-14">Follow Us</span>
          </div>
          <div className="div-16">
            <div className="div-17">
              <div className="div-18" />
              <div className="div-18" />
            </div>
            <div className="div-20" />
          </div>
          <div className="div-21">
            <span className="span-15">Home Resources Team Formation</span>
            <span className="span-16">About Us Contact Us</span>
            <span className="span-15">LinkedIn Instagram Twitter</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App

<style>
.div-2 {
	 font-size: 64px;
	 display: flex;
	 color: #ffffff;
	 min-height: 2565px;
	 row-gap: 64px;
	 line-height: 99px;
	 padding-left: 0px;
	 width: 100%;
	 font-weight: 700;
	 background-color: #192c2a;
	 max-width: 1440px;
	 padding-right: 0px;
	 text-align: center;
	 align-items: center;
	 height: 100%;
	 justify-content: space-between;
	 padding-top: 39px;
	 flex-direction: column;
	 padding-bottom: 0px;
}.div-3 {
	 flex-direction: row;
	 margin-top: 0px;
	 margin-left: 0px;
	 align-items: center;
	 flex-basis: 33px;
	 margin-bottom: 0px;
	 display: flex;
	 justify-content: space-between;
	 margin-right: 0px;
	 column-gap: 64px;
}.span-1 {
	 font-size: 30px;
	 line-height: 45px;
	 flex-basis: 125px;
}
.div-4 {
	 line-height: 24px;
	 align-items: start;
	 flex-direction: row;
	 margin-top: 0px;
	 margin-left: 0px;
	 margin-bottom: 0px;
	 display: flex;
	 justify-content: space-between;
	 flex-basis: 557px;
	 margin-right: 0px;
	 column-gap: 64px;
	 font-size: 16px;
	 font-weight: 400;
}.span-2 {
	 flex-basis: 63px;
}
.span-3 {
	 margin-top: 2px;
	 margin-left: 0px;
	 margin-bottom: 0px;
	 margin-right: 0px;
	 flex-basis: 72px;
}
.span-4 {
	 flex-basis: 78px;
}
.span-5 {
	 flex-basis: 76px;
}
.div-5 {
	 flex-direction: row;
	 margin-top: 0px;
	 margin-left: 0px;
	 align-items: center;
	 margin-bottom: 0px;
	 display: flex;
	 justify-content: space-between;
	 margin-right: 0px;
	 column-gap: 64px;
	 flex-basis: 400px;
}.div-6 {
	 justify-content: flex-start;
	 align-items: start;
	 flex-basis: 515px;
	 margin-top: 0px;
	 margin-left: 0px;
	 margin-bottom: 0px;
	 display: flex;
	 flex-direction: column;
	 margin-right: 0px;
	 row-gap: 39px;
	 height: 70%;
}.span-6 {
	 letter-spacing: 1px;
	 flex-basis: 203px;
}
.button-login-7 {
	 padding-right: 38px;
	 max-width: 140px;
	 min-height: 42px;
	 padding-left: 38px;
	 background-color: #ffffff;
	 border-radius: 35px;
	 align-self: stretch;
	 padding-top: 10px;
	 padding-bottom: 9px;
	 flex-basis: 42px;
}.span-7 {
	 font-size: 20px;
	 line-height: 30px;
	 font-weight: 500;
	 color: #192c2a;
}
.img-1 {
	 height: 400px;
	 width: 492px;
	 flex-basis: 492px;
}
.div-8 {
	 align-items: start;
	 flex-direction: row;
	 margin-top: 0px;
	 margin-left: 0px;
	 flex-basis: 300px;
	 display: flex;
	 justify-content: space-between;
	 margin-right: 0px;
	 margin-bottom: 0px;
	 column-gap: 64px;
}.img-2 {
	 height: 300px;
	 flex-basis: 325px;
	 width: 326px;
}
.div-9 {
	 justify-content: flex-start;
	 align-items: start;
	 margin-top: 0px;
	 flex-basis: 672px;
	 margin-left: 0px;
	 height: 100%;
	 margin-bottom: 0px;
	 display: flex;
	 flex-direction: column;
	 margin-right: 0px;
	 row-gap: 48px;
}.span-8 {
	 letter-spacing: 1px;
	 flex-basis: 205px;
}
.button-login-10 {
	 max-width: 163px;
	 min-height: 42px;
	 background-color: #ffffff;
	 padding-left: 32px;
	 border-radius: 35px;
	 padding-top: 9px;
	 padding-right: 33px;
	 padding-bottom: 14px;
	 align-self: stretch;
	 flex-basis: 42px;
}
.div-11 {
	 justify-content: flex-start;
	 row-gap: -77px;
	 align-items: start;
	 margin-top: 0px;
	 margin-left: 0px;
	 flex-basis: 300px;
	 display: flex;
	 flex-direction: column;
	 margin-right: 0px;
	 margin-bottom: 0px;
}.div-12 {
	 justify-content: flex-start;
	 margin-top: 0px;
	 width: 100%;
	 row-gap: -251px;
	 margin-left: 0px;
	 height: 100%;
	 flex-basis: 300px;
	 display: flex;
	 flex-direction: column;
	 margin-right: 0px;
	 align-items: end;
	 margin-bottom: 0px;
}.img-3 {
	 flex-basis: 300px;
	 width: 528px;
	 height: 300px;
}
.span-10 {
	 margin-top: 0px;
	 letter-spacing: 1px;
	 margin-left: 0px;
	 flex-basis: 113px;
	 margin-bottom: 0px;
	 margin-right: 64px;
}
.div-13 {
	 align-items: start;
	 flex-direction: row;
	 margin-top: 0px;
	 margin-left: 0px;
	 margin-bottom: 0px;
	 display: flex;
	 justify-content: space-between;
	 margin-right: 0px;
	 column-gap: 64px;
	 flex-basis: 400px;
}.img-4 {
	 height: 400px;
	 width: 400px;
	 flex-basis: 400px;
}
.span-11 {
	 flex-basis: 279px;
	 letter-spacing: 1px;
	 margin-left: 0px;
	 margin-bottom: 0px;
	 margin-right: 0px;
	 margin-top: 40px;
}
.footer-14 {
	 padding-top: 54px;
	 width: 100%;
	 row-gap: 19px;
	 align-items: center;
	 padding-bottom: 64px;
	 min-height: 274px;
	 display: flex;
	 flex-direction: column;
	 justify-content: space-between;
	 padding-right: 64px;
	 padding-left: 64px;
	 max-width: 1440px;
	 background-color: #121f1e;
	 flex-basis: 274px;
}.div-15 {
	 line-height: 45px;
	 align-items: start;
	 flex-direction: row;
	 margin-top: 0px;
	 margin-left: 0px;
	 flex-basis: 33px;
	 margin-bottom: 0px;
	 display: flex;
	 justify-content: space-between;
	 margin-right: 0px;
	 column-gap: 64px;
	 font-size: 30px;
}.span-12 {
	 flex-basis: 125px;
}
.span-13 {
	 flex-basis: 49px;
}
.span-14 {
	 flex-basis: 126px;
}
.div-16 {
	 justify-content: flex-start;
	 margin-top: 0px;
	 margin-left: 0px;
	 margin-bottom: 0px;
	 display: flex;
	 flex-direction: column;
	 flex-basis: 3px;
	 row-gap: 1px;
	 align-items: end;
	 margin-right: 0px;
}.div-17 {
	 column-gap: 64px;
	 flex-direction: row;
	 margin-top: 0px;
	 margin-left: 0px;
	 flex-basis: 1px;
	 margin-bottom: 0px;
	 display: flex;
	 justify-content: space-between;
	 align-items: stretch;
	 margin-right: 64px;
}.div-18 {
	 border-left-color: #ffffff;
	 border-right-width: 1px;
	 border-top-color: #ffffff;
	 border-right-color: #ffffff;
	 flex-basis: 134px;
	 border-bottom-color: #ffffff;
	 border-bottom-width: 1px;
	 border-right-style: solid;
	 max-width: 134px;
	 border-left-style: solid;
	 border-top-width: 1px;
	 min-height: 1px;
	 border-bottom-style: solid;
	 border-left-width: 1px;
	 border-top-style: solid;
}
.div-20 {
	 border-left-color: #ffffff;
	 border-right-width: 1px;
	 border-top-color: #ffffff;
	 border-right-color: #ffffff;
	 border-bottom-color: #ffffff;
	 border-bottom-width: 1px;
	 flex-basis: 1px;
	 max-width: 134px;
	 border-right-style: solid;
	 border-left-style: solid;
	 border-top-width: 1px;
	 min-height: 1px;
	 border-bottom-style: solid;
	 border-left-width: 1px;
	 border-top-style: solid;
}
.div-21 {
	 line-height: 24px;
	 align-items: start;
	 flex-direction: row;
	 margin-top: 0px;
	 margin-left: 0px;
	 color: #83b8b3;
	 margin-bottom: 0px;
	 display: flex;
	 justify-content: space-between;
	 margin-right: 0px;
	 font-size: 16px;
	 column-gap: 64px;
	 flex-basis: 76px;
	 font-weight: 400;
}.span-15 {
	 flex-basis: 131px;
}
.span-16 {
	 flex-basis: 134px;
}
</style>import React from "react"
import Login from "./Login"

import youngManWorkingOnLaptop from "./youngManWorkingOnLaptop.svg"
import group4 from "./group4.svg"
import girlAndBoySittingWithTablet from "./girlAndBoySittingWithTablet.svg"
import guyIsStudyingRemotelyWithATeacher from "./guyIsStudyingRemotelyWithATeacher.svg"

const App = (props) => {
  return (
    <div>
      <div className="div-2">
        <div className="div-3">
          <span className="span-1">Devportal</span>
          <div className="div-4">
            <span className="span-2">About Us</span>
            <span className="span-3">Resources</span>
            <span className="span-4">Mentorship</span>
            <span className="span-5">Contact Us</span>
          </div>
        </div>
        <div className="div-5">
          <div className="div-6">
            <span className="span-6">
              Welcome! Get all resources related to CSE at one place
            </span>
            <div className="button-login-7">
              <span className="span-7">Explore</span>
            </div>
          </div>
          <img className="img-1" src={youngManWorkingOnLaptop} />
        </div>
        <div className="div-8">
          <img className="img-2" src={group4} />
          <div className="div-9">
            <span className="span-8">
              Resources Break the barriers of Tiers, checkout the amazing
              resources that are available for all. Get most from these
              resources & be the best version of yourself. After evaluating the
              tech stacks you want to study, build your skills from the ground,
              with our structured roadmaps and resources.
            </span>
            <div className="button-login-10">
              <span className="span-7">Get Started</span>
            </div>
          </div>
        </div>
        <div className="div-11">
          <div className="div-12">
            <img className="img-3" src={girlAndBoySittingWithTablet} />
            <span className="span-10">
              Mentorship Connect with mentors from different places, get
              guidance on projects.
            </span>
          </div>
          <Login />
        </div>
        <div className="div-13">
          <img className="img-4" src={guyIsStudyingRemotelyWithATeacher} />
          <span className="span-11">
            Contact Us Email on: panerigunjan871@gmail.com Call on: +91 - 74638
            70429
          </span>
        </div>
        <div className="footer-14">
          <div className="div-15">
            <span className="span-12">Devportal</span>
            <span className="span-13">Info</span>
            <span className="span-14">Follow Us</span>
          </div>
          <div className="div-16">
            <div className="div-17">
              <div className="div-18" />
              <div className="div-18" />
            </div>
            <div className="div-20" />
          </div>
          <div className="div-21">
            <span className="span-15">Home Resources Team Formation</span>
            <span className="span-16">About Us Contact Us</span>
            <span className="span-15">LinkedIn Instagram Twitter</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App

<style>
.div-2 {
	 font-size: 64px;
	 display: flex;
	 color: #ffffff;
	 min-height: 2565px;
	 row-gap: 64px;
	 line-height: 99px;
	 padding-left: 0px;
	 width: 100%;
	 font-weight: 700;
	 background-color: #192c2a;
	 max-width: 1440px;
	 padding-right: 0px;
	 text-align: center;
	 align-items: center;
	 height: 100%;
	 justify-content: space-between;
	 padding-top: 39px;
	 flex-direction: column;
	 padding-bottom: 0px;
}.div-3 {
	 flex-direction: row;
	 margin-top: 0px;
	 margin-left: 0px;
	 align-items: center;
	 flex-basis: 33px;
	 margin-bottom: 0px;
	 display: flex;
	 justify-content: space-between;
	 margin-right: 0px;
	 column-gap: 64px;
}.span-1 {
	 font-size: 30px;
	 line-height: 45px;
	 flex-basis: 125px;
}
.div-4 {
	 line-height: 24px;
	 align-items: start;
	 flex-direction: row;
	 margin-top: 0px;
	 margin-left: 0px;
	 margin-bottom: 0px;
	 display: flex;
	 justify-content: space-between;
	 flex-basis: 557px;
	 margin-right: 0px;
	 column-gap: 64px;
	 font-size: 16px;
	 font-weight: 400;
}.span-2 {
	 flex-basis: 63px;
}
.span-3 {
	 margin-top: 2px;
	 margin-left: 0px;
	 margin-bottom: 0px;
	 margin-right: 0px;
	 flex-basis: 72px;
}
.span-4 {
	 flex-basis: 78px;
}
.span-5 {
	 flex-basis: 76px;
}
.div-5 {
	 flex-direction: row;
	 margin-top: 0px;
	 margin-left: 0px;
	 align-items: center;
	 margin-bottom: 0px;
	 display: flex;
	 justify-content: space-between;
	 margin-right: 0px;
	 column-gap: 64px;
	 flex-basis: 400px;
}.div-6 {
	 justify-content: flex-start;
	 align-items: start;
	 flex-basis: 515px;
	 margin-top: 0px;
	 margin-left: 0px;
	 margin-bottom: 0px;
	 display: flex;
	 flex-direction: column;
	 margin-right: 0px;
	 row-gap: 39px;
	 height: 70%;
}.span-6 {
	 letter-spacing: 1px;
	 flex-basis: 203px;
}
.button-login-7 {
	 padding-right: 38px;
	 max-width: 140px;
	 min-height: 42px;
	 padding-left: 38px;
	 background-color: #ffffff;
	 border-radius: 35px;
	 align-self: stretch;
	 padding-top: 10px;
	 padding-bottom: 9px;
	 flex-basis: 42px;
}.span-7 {
	 font-size: 20px;
	 line-height: 30px;
	 font-weight: 500;
	 color: #192c2a;
}
.img-1 {
	 height: 400px;
	 width: 492px;
	 flex-basis: 492px;
}
.div-8 {
	 align-items: start;
	 flex-direction: row;
	 margin-top: 0px;
	 margin-left: 0px;
	 flex-basis: 300px;
	 display: flex;
	 justify-content: space-between;
	 margin-right: 0px;
	 margin-bottom: 0px;
	 column-gap: 64px;
}.img-2 {
	 height: 300px;
	 flex-basis: 325px;
	 width: 326px;
}
.div-9 {
	 justify-content: flex-start;
	 align-items: start;
	 margin-top: 0px;
	 flex-basis: 672px;
	 margin-left: 0px;
	 height: 100%;
	 margin-bottom: 0px;
	 display: flex;
	 flex-direction: column;
	 margin-right: 0px;
	 row-gap: 48px;
}.span-8 {
	 letter-spacing: 1px;
	 flex-basis: 205px;
}
.button-login-10 {
	 max-width: 163px;
	 min-height: 42px;
	 background-color: #ffffff;
	 padding-left: 32px;
	 border-radius: 35px;
	 padding-top: 9px;
	 padding-right: 33px;
	 padding-bottom: 14px;
	 align-self: stretch;
	 flex-basis: 42px;
}
.div-11 {
	 justify-content: flex-start;
	 row-gap: -77px;
	 align-items: start;
	 margin-top: 0px;
	 margin-left: 0px;
	 flex-basis: 300px;
	 display: flex;
	 flex-direction: column;
	 margin-right: 0px;
	 margin-bottom: 0px;
}.div-12 {
	 justify-content: flex-start;
	 margin-top: 0px;
	 width: 100%;
	 row-gap: -251px;
	 margin-left: 0px;
	 height: 100%;
	 flex-basis: 300px;
	 display: flex;
	 flex-direction: column;
	 margin-right: 0px;
	 align-items: end;
	 margin-bottom: 0px;
}.img-3 {
	 flex-basis: 300px;
	 width: 528px;
	 height: 300px;
}
.span-10 {
	 margin-top: 0px;
	 letter-spacing: 1px;
	 margin-left: 0px;
	 flex-basis: 113px;
	 margin-bottom: 0px;
	 margin-right: 64px;
}
.div-13 {
	 align-items: start;
	 flex-direction: row;
	 margin-top: 0px;
	 margin-left: 0px;
	 margin-bottom: 0px;
	 display: flex;
	 justify-content: space-between;
	 margin-right: 0px;
	 column-gap: 64px;
	 flex-basis: 400px;
}.img-4 {
	 height: 400px;
	 width: 400px;
	 flex-basis: 400px;
}
.span-11 {
	 flex-basis: 279px;
	 letter-spacing: 1px;
	 margin-left: 0px;
	 margin-bottom: 0px;
	 margin-right: 0px;
	 margin-top: 40px;
}
.footer-14 {
	 padding-top: 54px;
	 width: 100%;
	 row-gap: 19px;
	 align-items: center;
	 padding-bottom: 64px;
	 min-height: 274px;
	 display: flex;
	 flex-direction: column;
	 justify-content: space-between;
	 padding-right: 64px;
	 padding-left: 64px;
	 max-width: 1440px;
	 background-color: #121f1e;
	 flex-basis: 274px;
}.div-15 {
	 line-height: 45px;
	 align-items: start;
	 flex-direction: row;
	 margin-top: 0px;
	 margin-left: 0px;
	 flex-basis: 33px;
	 margin-bottom: 0px;
	 display: flex;
	 justify-content: space-between;
	 margin-right: 0px;
	 column-gap: 64px;
	 font-size: 30px;
}.span-12 {
	 flex-basis: 125px;
}
.span-13 {
	 flex-basis: 49px;
}
.span-14 {
	 flex-basis: 126px;
}
.div-16 {
	 justify-content: flex-start;
	 margin-top: 0px;
	 margin-left: 0px;
	 margin-bottom: 0px;
	 display: flex;
	 flex-direction: column;
	 flex-basis: 3px;
	 row-gap: 1px;
	 align-items: end;
	 margin-right: 0px;
}.div-17 {
	 column-gap: 64px;
	 flex-direction: row;
	 margin-top: 0px;
	 margin-left: 0px;
	 flex-basis: 1px;
	 margin-bottom: 0px;
	 display: flex;
	 justify-content: space-between;
	 align-items: stretch;
	 margin-right: 64px;
}.div-18 {
	 border-left-color: #ffffff;
	 border-right-width: 1px;
	 border-top-color: #ffffff;
	 border-right-color: #ffffff;
	 flex-basis: 134px;
	 border-bottom-color: #ffffff;
	 border-bottom-width: 1px;
	 border-right-style: solid;
	 max-width: 134px;
	 border-left-style: solid;
	 border-top-width: 1px;
	 min-height: 1px;
	 border-bottom-style: solid;
	 border-left-width: 1px;
	 border-top-style: solid;
}
.div-20 {
	 border-left-color: #ffffff;
	 border-right-width: 1px;
	 border-top-color: #ffffff;
	 border-right-color: #ffffff;
	 border-bottom-color: #ffffff;
	 border-bottom-width: 1px;
	 flex-basis: 1px;
	 max-width: 134px;
	 border-right-style: solid;
	 border-left-style: solid;
	 border-top-width: 1px;
	 min-height: 1px;
	 border-bottom-style: solid;
	 border-left-width: 1px;
	 border-top-style: solid;
}
.div-21 {
	 line-height: 24px;
	 align-items: start;
	 flex-direction: row;
	 margin-top: 0px;
	 margin-left: 0px;
	 color: #83b8b3;
	 margin-bottom: 0px;
	 display: flex;
	 justify-content: space-between;
	 margin-right: 0px;
	 font-size: 16px;
	 column-gap: 64px;
	 flex-basis: 76px;
	 font-weight: 400;
}.span-15 {
	 flex-basis: 131px;
}
.span-16 {
	 flex-basis: 134px;
}
</style>