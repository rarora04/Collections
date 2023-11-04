import './App.css';
import Servery from "./components/Servery"
function App() {

  const serveries = [
    {
      "name": "North Servery",
      "review": "9/10",
      "image": "https://kwtexas.com/wp-content/uploads/2015/01/Rice-Brown-College.jpg",
      "menu":"https://dining.rice.edu/north-servery",
      "text": ["The Wok has the best food","However, the food repeats for lunch and dinner"]
    },
    {
      "name": "South Servery", 
      "review": "8/10", 
      "image": "https://wiess.rice.edu/images/new-students/commons.jpg",
      "menu": "https://dining.rice.edu/south-servery",
      "text": ["Best desserts","Wok station", "Attatched to the best college", "Nice workers"]
    }, 
    {
      "name": "West Servery", 
      "review": "6/10", 
      "image": "https://housing.rice.edu/sites/g/files/bxs3096/files/inline-images/HEWV_Rice_DuncanCommons_11.jpg",
      "menu": "https://dining.rice.edu/west-servery",
      "text": ["Stirfry Station", "Poke bowls", "Has good dinner"]
    }, 
    {
      "name": "Seibel Servery", 
      "review": "4/10", 
      "image": "https://cdnassets.hw.net/dims4/GG/bfb60fa/2147483647/thumbnail/300x200%3E/quality/90/?url=https%3A%2F%2Fcdnassets.hw.net%2F50%2Fcf%2F06be80534e81b7aaf42214b26293%2F08017-00-n3.jpg",
      "menu": "https://dining.rice.edu/seibel-servery",
      "text": ["Stirfy station", "Bad", "'Do not go' - professional chef", "Seibel food poisoning"]
    }, 
    
    {
      "name": "Baker Kitchen", 
      "review": "5/10", 
      "image": "https://i.ytimg.com/vi/gMO7iG6L7kE/maxresdefault.jpg",
      "menu": "https://dining.rice.edu/baker-college-kitchen",
      "text": ["Hit or miss", "No one goes there", "Smells"]
    }]
    
  return (
    <div className="App">
      <div className="banner">
        <h1 className="header">Servery Rankings</h1>
      </div>
      <div className="body">
        {serveries.map(serveries => 
          <Servery  name={serveries.name} image={serveries.image} review={serveries.review} menu={serveries.menu} text={serveries.text}/>
        )}
      </div>
      <img className="chef_owl" src="https://www.kroger.com/product/images/large/front/0068687862238"/>
    </div>
  );
}

export default App;
