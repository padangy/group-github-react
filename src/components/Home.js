import githubmark from '../images/GitHub-Mark-64.png'

function Home() {

  return(
    <div id="home">
      <br></br><br></br>
      <h1>Welcome to My&#123;Dev&#125;Page!</h1>
      <h2>Navigate to the Developer's page per the NavBar to learn more about our team.</h2>
      <iframe src="https://c.tenor.com/tkkoPxh0brAAAAAC/typing-anime.gif" width="480" height="360" frameBorder="0"></iframe>
      <br></br><br></br>
      <h2>Take a peek at our GitHub profiles:</h2>
      <br></br>   
      <div className="github-links" id="github-links">
        <a href="https://github.com/darlacodes19" target="_blank"><img src={githubmark} alt='DM GitHub Mark' id='DM-github-mark'/>
        <p>DM</p>
        </a>
        <a href="https://github.com/padangy" target="_blank">            
        <img src={githubmark} alt='PD GitHub Mark' id='PD-github-mark'/> 
        <p>PD</p>
        </a>
        <a href="https://github.com/vincentM46" target="_blank">      
        <img src={githubmark} alt='VM GitHub Mark' id='VM-github-mark'/>
        <p>VM</p>
        </a>    
      </div>  
      <br></br><br></br>
    </div>
  )
}

export default Home;