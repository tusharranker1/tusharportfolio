import React, {useEffect, useState} from "react";
import "../css/Experience.css";
import Aos from "aos";
import "aos/dist/aos.css";
import fb from '../Images/fuelcab.png'
import ni from '../Images/nextInnovation.jpeg'
import oi from '../Images/oasisInfobyte.jpeg'


  
  export const Experience = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  let ExpContent = [
    {
      id: 0,
      img: ni,
      ExpPosition: "Web Developer",
      company: "Next-Innovation",
      date: "5/07/2023 - 15/09/2023",
    },
    {
      id: 1,
      img: fb,
      ExpPosition: "React Frontend Developer",
      company: "FuelCab-India",
      date: "26/02/2023 - 26/05/2023",
    },
    {
      id: 2,
      img: oi,
      ExpPosition: "Project Intern",
      company: "Oasis Infobyte",
      date: "02/02/2023 - 02/03/2023",
    },
  ];
  const [expClass1,setExpClass1] = useState(false);
  const [expClass2,setExpClass2] = useState(false);
  const [expClass3,setExpClass3] = useState(false);

  function eventHappen(id){
    if(id===0){
      setExpClass1(true);
    }
    if(id===1){
      setExpClass2(true);
      
    }
    if(id===2){
      setExpClass3(true);
    }
  }
  function eventHappen2(id){
    if(id===0){
      console.log(id+' out');
      setExpClass1(false);
    }
    if(id===1){
      
      setExpClass2(false);
    }
    if(id===2){
      setExpClass3(false);
      
    }
  }
function setClass(id){
  if(id===0){
    return expClass1 ? 'company-wrapper-active' : 'company-wrapper-unactive';
  }
  if(id===1){
    return expClass2 ? 'company-wrapper-active' : 'company-wrapper-unactive';
  }
  if(id===2){
    return expClass3 ? 'company-wrapper-active' : 'company-wrapper-unactive';
  }
}
  return (
    <div className="experience-wrapper">
      <h1>Experience</h1>
      {ExpContent.map((user) => {
        return (
          <div className="exp-content" data-aos='zoom-out' onMouseOver={()=>eventHappen(user.id)} onMouseOut={()=>eventHappen2(user.id)}>
            <img className="company-img" src={user.img} alt="" />
            <div className={setClass(user.id)}>
              <div className="post-name">{user.ExpPosition}</div>
              <div className="tenure">{user.date}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
