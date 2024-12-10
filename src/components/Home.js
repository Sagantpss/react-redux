import { useNavigate } from "react-router-dom";

function Home() {
    const navigate= useNavigate();
    const navToPage=(url)=>{
        
        navigate(url);
    }
    return (
        <>
        <h1>Home Page</h1>
        {/* <button onClick={()=>navigate('/about')}>Go to About page</button><br /><br />
        <button onClick={()=>navigate('/filter')}>Go to Filter page</button> */}
        <button onClick={()=>navToPage('/about')}>Go to About page</button><br /><br />
        <button onClick={()=>navToPage('/filter')}>Go to Filter page</button>
        </>
    )
}

export default Home;