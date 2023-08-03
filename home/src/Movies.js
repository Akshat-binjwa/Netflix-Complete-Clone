import React from "react";
import './app.css'
import './movies.css'
import { Link } from "react-router-dom";
export default function Movie(){


    return(
        <div className="main-bakk">
  <div class="wrapper">

  
    <header>
      <div class="netflixLogo">
        <Link id="logo" to='/'><img src="data:image/png;base64,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" alt="Logo Image"/></Link>
      </div>      
      <nav class="main-nav">                
        <a href="#home">Home</a>
        <a href="#tvShows">TV Shows</a>
        <a href="#movies">Movies</a>
        <a href="#originals">Originals</a>
        <a href="#">Recently Added</a>
        <a  href="#portfolio">Contact</a>        
      </nav>
      <nav class="sub-nav">
        <a href="#"><i class="fas fa-search sub-nav-logo"></i></a>
        <a href="#"><i class="fas fa-bell sub-nav-logo"></i></a>
        <a href="#">Account</a>        
      </nav>      
    </header>
   
    
      <div class="location" id="home">
         <br></br> <center><h1 id="home"> <b>Popular on Netflix</b></h1></center> <br></br>
          <div class="box">
            <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReHxxoJuOf5qi9RSJCKhyyMwNf6ml9oGl_DQ&usqp=CAU" alt=""/></a>
            <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKI_KvOECuX-CHEuRwsDAWIa8-sapIf0FEXg&usqp=CAU" alt=""/></a>
            <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSffe-14DRrEzDHmoL6-z8YbNrprcVaNGUxmg&usqp=CAU" alt=""/></a>
            <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqriJI3UMEhm8X8LuWsV8GGHsBMhGjtPw8F4onUwim65wwEyDE82FZUgUuc914FUOMeLo&usqp=CAU" alt=""/></a>
            <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLc3RKU0VhMmEWmQQHGVaOVXpMlfjwU7CfniArZXFqsUsApLS0rB_ukV4E4U7AD541ODo&usqp=CAU" alt=""/></a>
            <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvH1M5sc9LtHOD7oeuF_eMLPzEKBfazt_hfIaKIlHLASWy6CErD48h30AZI-vREfEV0uA&usqp=CAU" alt=""/></a>
    
            <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIHka3FU_HBN7ISHggHTJI02sJs8hxQdCeYfIaMqjr4Cq44QNDHmf6sRTfrdr0cV0xAuw&usqp=CAU" alt=""/></a>
            <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-IKwmD6b3vqtXGJT6bUxUr5M3MCZ-biQNAUaC1yysRMaD6QIf55Fn-cJKCO9Sxa-6tXQ&usqp=CAU" alt=""/></a>
            <a href="#"><img src="data:image/jpeg;base64,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" alt=""/></a>
            <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScuqLA4_f_17CIGkyG4mdJMhbfT7Uj8mPT2g&usqp=CAU" alt=""/></a>
            <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvH1M5sc9LtHOD7oeuF_eMLPzEKBfazt_hfIaKIlHLASWy6CErD48h30AZI-vREfEV0uA&usqp=CAU" alt=""/></a>
            <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvH1M5sc9LtHOD7oeuF_eMLPzEKBfazt_hfIaKIlHLASWy6CErD48h30AZI-vREfEV0uA&usqp=CAU" alt=""/></a>        
          </div>
      </div>
      

      <center><h1 id="myList"><b>Trending Now</b> </h1></center><br></br>
      <div class="box">
        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReHxxoJuOf5qi9RSJCKhyyMwNf6ml9oGl_DQ&usqp=CAU" alt=""/></a>
        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKI_KvOECuX-CHEuRwsDAWIa8-sapIf0FEXg&usqp=CAU" alt=""/></a>
        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReHxxoJuOf5qi9RSJCKhyyMwNf6ml9oGl_DQ&usqp=CAU" alt=""/></a>
        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKI_KvOECuX-CHEuRwsDAWIa8-sapIf0FEXg&usqp=CAU" alt=""/></a>
        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReHxxoJuOf5qi9RSJCKhyyMwNf6ml9oGl_DQ&usqp=CAU" alt=""/></a>
        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLc3RKU0VhMmEWmQQHGVaOVXpMlfjwU7CfniArZXFqsUsApLS0rB_ukV4E4U7AD541ODo&usqp=CAU" alt=""/></a>                  
      </div>
      
      <center><h1 id="tvShows"> <b>TV Shows</b></h1></center><br></br>
      <div class="box">
        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkTf0AAzi6cNs0a72H2c8YXBhUYujyjQ9jyw&usqp=CAU" alt=""/></a>
        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVmWFmSRvW5AszbVJ-td3KJgFfrr0o6YIYeg&usqp=CAU" alt=""/></a>
        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcN7L6LtGkOyqqhxza96eySzAojNcUhiJ3Q&usqp=CAU" alt=""/></a>
        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00Gl0OICGGBs1CF0DluAVt5eXySQy135z9Q&usqp=CAU" alt=""/></a>
        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcN7L6LtGkOyqqhxza96eySzAojNcUhiJ3Q&usqp=CAU" alt=""/></a>
        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkTf0AAzi6cNs0a72H2c8YXBhUYujyjQ9jyw&usqp=CAU" alt=""/></a>

        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLc3RKU0VhMmEWmQQHGVaOVXpMlfjwU7CfniArZXFqsUsApLS0rB_ukV4E4U7AD541ODo&usqp=CAU" alt=""/></a>
        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcN7L6LtGkOyqqhxza96eySzAojNcUhiJ3Q&usqp=CAU" alt=""/></a>
        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSffe-14DRrEzDHmoL6-z8YbNrprcVaNGUxmg&usqp=CAU" alt=""/></a>
        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIHka3FU_HBN7ISHggHTJI02sJs8hxQdCeYfIaMqjr4Cq44QNDHmf6sRTfrdr0cV0xAuw&usqp=CAU" alt=""/></a>
        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu0LFSm8UMcV4WICVa2zOZpJamEUSqw4AZSg&usqp=CAU" alt=""/></a>
        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKI_KvOECuX-CHEuRwsDAWIa8-sapIf0FEXg&usqp=CAU" alt=""/></a>              
      </div>
      

      <center><h1 id="movies"><b>Blockbuster Action & Adventure</b></h1></center><br></br>
      <div class="box">
        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu0LFSm8UMcV4WICVa2zOZpJamEUSqw4AZSg&usqp=CAU" alt=""/></a>
        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM0THOPyxOq0hZmHuVIxrTvO4YhTr-7MZlbg&usqp=CAU" alt=""/></a>
        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLnATcvcESPhU7TOsmtS41juirCGrUYEAcfbef3XpptFk_CnFIrA6vl3SEZUmd-bL2_aw&usqp=CAU" alt=""/></a>
        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKI_KvOECuX-CHEuRwsDAWIa8-sapIf0FEXg&usqp=CAU" alt=""/></a>
        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM0THOPyxOq0hZmHuVIxrTvO4YhTr-7MZlbg&usqp=CAU" alt=""/></a>
        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKI_KvOECuX-CHEuRwsDAWIa8-sapIf0FEXg&usqp=CAU" alt=""/></a>                
      </div>

      <center><h1 id="originals"><b>Netflix Originals</b></h1></center> <br></br>
      <div class="box">
        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM0THOPyxOq0hZmHuVIxrTvO4YhTr-7MZlbg&usqp=CAU" alt=""/></a>
        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00Gl0OICGGBs1CF0DluAVt5eXySQy135z9Q&usqp=CAU" alt=""/></a>
        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLnATcvcESPhU7TOsmtS41juirCGrUYEAcfbef3XpptFk_CnFIrA6vl3SEZUmd-bL2_aw&usqp=CAU" alt=""/></a>
        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM0THOPyxOq0hZmHuVIxrTvO4YhTr-7MZlbg&usqp=CAU" alt=""/></a>
        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvH1M5sc9LtHOD7oeuF_eMLPzEKBfazt_hfIaKIlHLASWy6CErD48h30AZI-vREfEV0uA&usqp=CAU" alt=""/></a>
        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00Gl0OICGGBs1CF0DluAVt5eXySQy135z9Q&usqp=CAU" alt=""/></a>                
      </div>
     

    <div class="link">
        <center>
        <div class="logos">
        <a href="#"><i class="fab fa-facebook-square fa-2x logo"></i></a>
        <a href="#"><i class="fab fa-instagram fa-2x logo"></i></a>
        <a href="#"><i class="fab fa-twitter fa-2x logo"></i></a>
        <a href="#"><i class="fab fa-youtube fa-2x logo"></i></a><br></br>
      </div>
        </center>
      <br></br><br></br>
      <div id="portfolio" class="sub-links">
        <ul>
          <li><a href="#portfolio">Audio and Subtitles</a></li>
          <li><a href="#portfolio">Audio Description</a></li>
          <li><a href="#portfolio">Help Center</a></li>
          <li><a href="#portfolio">Gift Cards</a></li>
          <li><a href="#portfolio">Media Center</a></li>
          <li><a href="#portfolio">Investor Relations</a></li>
          <li><a href="#portfolio">Jobs</a></li>
          <li><a href="#portfolio">Terms of Use</a></li>
          <li><a href="#portfolio">Privacy</a></li>
          <li><a href="#portfolio">Legal Notices</a></li>
          <li><a href="#portfolio">Corporate Information</a></li>
          <li><a href="#portfolio">Contact Us</a></li>
        </ul>
      </div>
    </div>
  
    <footer>
      <p>&copy 1997-2018 Netflix, Inc.</p>
      <p>Carlos Avila &copy 2018</p>
    </footer>
  </div>
</div>
    )

}




