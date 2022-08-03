import darla from '../images/darlene.png'

function DM() {

  return(
   
    <div id="DM">
      <div className='container'> 
        <div className="main-div"> 
          <h1 id="dm-name">Darlene Matos</h1>
          <h3 className='title'> Front-End Developer </h3> 
        </div>
        <div className='image'> 
          <img src= {darla} alt="Darlene Matos" id= 'my-image'/>
        </div>
      </div>
      <section className='about-section'> 
        <h1> About Me </h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis odio vitae est mollis viverra. Suspendisse ac bibendum erat. Mauris laoreet lectus dui, id varius ipsum semper nec. Nullam lorem ante, porttitor lacinia accumsan quis, elementum ut urna. Donec nulla libero, ultricies sed pretium eu, tempus eu mauris. Nullam id augue nec massa sodales rhoncus at a elit. Sed et ullamcorper augue, quis ultrices urna. Donec laoreet odio id ipsum porta interdum. Donec blandit felis sit amet rhoncus ultricies. In et euismod mi. Morbi ornare gravida vestibulum. Nullam efficitur erat urna, vel sagittis leo dapibus sed. Nunc nisi massa, feugiat nec dapibus vitae, vestibulum nec odio. Praesent nisl arcu, mollis eu luctus a, pulvinar quis metus.</p> 
      </section> 
      <section className='skills'>
        <h1> My Skills</h1> 
      </section>
    </div>
  
  )
}

export default DM;