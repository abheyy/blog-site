import Header from "../components/Header";
 
const AuthorPage = () => {
  return ( 
    <div className="authoer-container">
      <Header/>
        <div className="container">
            <div className="inner-container">
                <h1 className="page-title">About the Author:ABHAY</h1>
                <div className="image-container">
                    <img src="./img/pic1.jpg" className="hero-image" alt=""></img>
                    <img src="./img/pic2.jpg" className="hero-image" alt=""></img>
                    <img src="./img/pic3.jpg" className="hero-image" alt=""></img>
                </div>
                <p>ABHAY is always  interested in web development because it allows him to combine his passion for coding with his desire to create visually appealing and user-friendly websites. He enjoy the process of taking a design and bringing it to life using HTML, CSS, and JavaScript. Additionally, he is excited about the constant advancements and updates in web technologies, as it allows for endless possibilities and opportunities for learning and growth in his career.
</p>
            </div>
        </div>
    </div>
  );
}
 
export default AuthorPage;