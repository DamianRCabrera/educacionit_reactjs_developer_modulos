import "./style.css";
import Stripe from "../Stripe";

function PersonalCard(props) {
  return (
    <div className="personalCard">
      <Stripe></Stripe>

      <h2 style={{ color: "#fafafa", fontSize: 40 , fontWeight: 700}}>Damián Cabrera</h2>

      <h3 style={{ color: "#fafafa", fontSize: 32, fontWeight: 500}}>Desarrollador Web</h3>

      <Stripe></Stripe>
    </div>
  );
}

export default PersonalCard;
