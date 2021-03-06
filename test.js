const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Sanjog Kumar-Portfolio</title>
      <link rel="stylesheet" href="portfolio_styling.css">
  </head>
  <body>
  
      <div id="navbar">
          <a href="#ABOUT ME"><button class="bt-2"><b><i>About Me!</i></b></button></a>
          <a href="#MY SKILLS"><button class="bt-2"><b><i>My Skill-sets</i></b></button></a>
          <a href="#MY EDUCATION"><button class="bt-2"><b><i>My Journey</i></b></button></a>
          <a href="#CONTACT ME"><button class="bt-2"><b><i>Contact Me!</i></b></button></a>
      </div>
     <div > 
      <img src="Screenshot 2021-10-20 025409-2.png" class="background"><p class="greetings"><b>Well Hello There !<br>
      Welcome To My Portfolio.<br>This is Sanjog , here.</b></p>
      <img src="dp.jpeg" width="200px" height="200px" class="inner-image">
     </div> 
        <div  id="header">
        <p><a id="ABOUT ME"></a>
            About Me !
        </p>    
        </div>
  
    <div class="backgroundimg">
          <div class="textbox">
              <div class="text">
                  I'm <b>Sanjog Kumar</b>. I am currently a sophormore pursuing my B.tech focussed in Information Technology at 
                  KIIT , Bhubaneshwar. I have created this portfolio to showcase my skills in Web development especially HTML & CSS. Besides 
                  my web development skill , I am also skilled in C & C++ and frequently participate on many competitive coding platforms.
                  <br>I aspire to become a good full stack developer. Besides, my web dev domain,my interests also lies in Machine Learning And 
                  Artificial Intelligence.<br>Regarding my hobbies,I like to play guitar and create sketches.<br>I am also interested in stock marketing 
                  and a beginner in the field.<br> I also love to spend time with my friends
                  and family.
  
              </div>
          </div>
      </div>
      <div  id="header">
          <p><a id="MY SKILLS"></a>
              My Skills
          </p>
        </div>
        <div class="backgroundimg">
            <div class="textbox">
              <img src="html5.png" class="skillsbadge">
              <img src="css.png" class="skillsbadge">
              <img src="c logo.png" class="skillsbadge">
              <img src="c++.png" class="skillsbadge">
            </div>
          </div>
          <div  id="header">
              <p><a id="MY EDUCATION"></a>
                  My Journey
              </p>
          </div>
          <div class="backgroundimg1">   
                  <div class="textbox1">     
                  <img src="ag church logo.png" class="school_logo">
                  <b>Class-X  (2018)<br>Assembly of God Church School, Ukhra (WB)</b><br><br>
                  I completed my standard-Xth from Assembly of God Church School, which is situated in Ukhra near
                  Asansol(West Bengal). I Scored 90.6 % in my class 10 board exams. 
                  </div>   
                  <div class="textbox1">     
                      <img src="dps ranchi logo.jfif" class="school_logo">
                      <b>Class-XII  (2018-2020)<br>Delhi Public School ,Ranchi (Jharkhand)</b><br><br>
                      I completed my schooling from DPS Ranchi in 2020. My domain of study was PCM with Computer Science.
                      I scored 95% in my class 12 Board exams.
                  </div>    
                  <div class="textbox1">     
                      <img src="kiit logo.png" class="school_logo">
                      <b>B.Tech in Information Technology(2020-present)<br>Kalinga Institute of Industrial Technology,Bhubaneshwar,Orissa</b><br><br>
                      I joined KIIT in 2020 and currently I am a sophormore in IT Department. I had a CGPA of 9.4 in my first year of college.
                  </div>              
            </div>
            <div  id="header">
              <p><a id="CONTACT ME"></a>
                  Contact Me
              </p>
            </div>
           <div class="backgroundimg2">
               <div class="textbox">
                   <p>Email ID: 2006281@kiit.ac.in</p><br><br>
                   <p>My Social Media IDs:</p><br>
                   <a href="https://www.instagram.com/_it_isnt_me_005/"><img src="insta.png" width="50px" height="50px"> </a>
                   <a href="https://www.facebook.com/sanjog.kumar.35"><img src="fb.png" width="50px" height="50px"></a>
               </div>
           </div>
           <div id="footer">
               <p>THANK YOU!!</p>
           </div>
                 --->
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});