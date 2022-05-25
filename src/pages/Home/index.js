import { useEffect } from "react";

function Home() {
  useEffect(() => {
    console.log("Home");
    }, []);
    
    
  return (
    <div>
      <h1>Home</h1>
      pelo amor de Deus
    </div>
  );
}

export default Home;