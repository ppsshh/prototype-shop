import { useNavigate, useLocation } from 'react-router-dom';

export default function Checkout() {

    const navigate = useNavigate();
    const navigateToCancel = () => {
        navigate("/");
    };

    const location = useLocation();
    const orderess = location.state.orders;
    const prototypess = location.state.prototypes;
    const totalPrice = location.state.totalPrice;

    return (
        <main>
            <div className="content">Checkout</div>
            <div className="body">
                {orderess.map(order => {
                    const { id } = order;
                    const prototype = prototypess.find(p => p.id === id);

                    return (<div className="item" key={id}>
                        <div className="img">
                            <video src={prototype.thumbnail} />
                        </div>
                        <div className="content">
                            <p className="title">
                                {prototype.title} x {order.quantity}
                            </p>
                        </div>
                        <div className="action">
                            <p className="price">$ {prototype.price * order.quantity}</p>
                        </div>
                    </div>);
                })}
            </div>
            <div className="total">
                <hr />
                <div className="item">
                    <div className="content">Total</div>
                    <div className="action">
                        <div className="price">$ {totalPrice}</div>
                    </div>
                </div>
            </div>
            <button
                className="btn btn--Payment"
                style={{ width: "30", marginTop: 30 }}
            >
                Payment
            </button>
            <button
                className="btn btn--Cancel"
                style={{ width: "30", marginTop: 30, marginLeft: 10 }}
                onClick={navigateToCancel}
            >
                Cancel
            </button>
        </main>
    );
}
