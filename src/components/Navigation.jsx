import "../App.css";
const Navigation = () => {
    return (
        <div>
            <nav className="container"> 
                <div className="logo">
                    <img src="/image/brand_logo.png" alt="logo" />
                </div>
                <ul>
                    <li href="">Menu</li>
                    <li href="">Location</li>
                    <li href="">About us</li>
                    <li href="">Contact</li>
                </ul>
                <button>login</button>
            </nav>
        </div>
    );

};
export default Navigation;