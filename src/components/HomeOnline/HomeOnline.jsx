import online100Convenient100 from "@/assets/img/bg-100.png";
const HomeOnline = () => {
  return (
    <section className="online100">
        <img className="w-100" src={online100Convenient100} alt="online 100%" />
        <div className="overlay">
            <div className="container">
            <div className="row g-0">
                <div className="col-md-6">
                <h3>100% Online,<br/> 100% Convenient</h3>
                </div>
                <div className="col-md-6">
                <ul className="list-item-support">
                    <li>Chat with a provider 24/7</li>
                    <li>Fast, discreet shipping</li>
                    <li>Clinically proven ingredients and FDA-approved treatments.</li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default HomeOnline