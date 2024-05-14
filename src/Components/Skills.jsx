import React from 'react'
import { skills } from './SkillsList'


const Skills = () => {

  const hrStyle = {
    backgroundColor: 'black', 
    height: '1px', 
    border: 'none',
    
    
  };
  return (
    <div>

      <div style={{ backgroundColor: "#c3eefa" }}>

        <section className='px-10 mx-5 py-20'>
          <h1 className='text-2xl font-semibold mb-5'>⪼⪼⪼ Skills and Tools:</h1>

          <div className='grid lg:grid-cols-6 grid-cols-3 justify-center items-center gap-5 mx-2 lg:ms-5'>
           {
            skills.map((item, index)=>(
              <div key={index} className={` ${item.bg}  py-4 grid justify-center item-center rounded`}  >

                <div className={`${item.color} text-3xl mx-6 `}>{item.icon}</div>
                <div className={`${item.color} ${item.mx}`}>{item.title}</div>

              </div>
            ))
           }
          </div>

          
        </section>

      </div>

      <hr style={hrStyle} />
      

    </div>


  )
}

export default Skills