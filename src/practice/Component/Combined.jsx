
import { useState } from "react";

function Combined({ creature }) {
    const [like, setLike] = useState(0);
    const [power , setPower] = useState(false)

    return (
        <>
            <style>{`
                * {
                    box-sizing: border-box;
                }

                body {
                    margin: 0;
                    background: #f4f1ff;
                    font-family: Arial, sans-serif;
                }

                .collection {
                    padding: 35px 6%;
                    min-height: 100vh;
                }

                .collection h2 {
                    text-align: center;
                    color: #45247a;
                    font-size: 30px;
                    margin-bottom: 30px;
                }

                .header {
                    display: flex;
                    justify-content: center;
                    gap: 25px;
                    margin-bottom: 35px;
                }

                .total, .favorite {
                    background: white;
                    width: 180px;
                    padding: 15px;
                    text-align: center;
                    border-radius: 14px;
                    box-shadow: 0 4px 15px #00000012;
                    color: #5b348e;
                }

                .total h5, .favorite h5 {
                    font-size: 16px;
                    line-height: 1.8;
                    margin: 0;
                }

                .main-container {
                    display: grid;
                    grid-template-columns:
                        repeat(auto-fit, minmax(230px, 1fr));
                    gap: 25px;
                }

                .card {
                    background: white;
                    border-radius: 18px;
                    padding: 25px;
                    text-align: center;
                    box-shadow: 0 5px 18px #00000012;
                    transition: 0.3s ease;
                }

                .card:hover {
                    transform: translateY(-7px);
                    box-shadow: 0 10px 25px #8b5cf633;
                }

                .emoji {
                    font-size: 55px;
                    margin-bottom: 10px;
                }

                .card h3 {
                    color: #542b85;
                    font-size: 21px;
                    margin: 10px 0;
                }

                .card p {
                    color: #666;
                    line-height: 1.8;
                    font-size: 14px;
                }

                .card button {
                    width: 100%;
                    padding: 11px;
                    margin-top: 10px;
                    border: none;
                    border-radius: 9px;
                    background: #8054c7;
                    color: white;
                    font-size: 14px;
                    font-weight: bold;
                    cursor: pointer;
                    transition: 0.2s;
                }
                .card .like-btn{
                    width: 100%;
                    padding: 11px;
                    margin-top: 10px;
                    border: none;
                    border-radius: 9px;
                    background: #c75499;
                    color: white;
                    font-size: 14px;
                    font-weight: bold;
                    cursor: pointer;
                    transition: 0.2s;
                }
                .card button:hover {
                    background: #6036a3;
                }

                @media (max-width: 600px) {
                    .collection {
                        padding: 25px 15px;
                    }

                    .header {
                        gap: 10px;
                    }

                    .total, .favorite {
                        width: 50%;
                    }
                }
            `}</style>

            <div className="collection">
                <h2>👾 Fantasy Creature Collection</h2>

                <div className="header">
                    <div className="total">
                        <h5>
                            👾 Total Creatures
                            <br />
                            {creature.length}
                        </h5>
                    </div>

                    <div className="favorite">
                        <h5>
                            💜 Favorites
                            <br />
                            {like}
                        </h5>
                    </div>
                </div>

                <div className="main-container">
                    {creature.map((item) => (
                        <div className="card" key={item.id}>

                            <div className="emoji">
                                {item.emoji}
                            </div>

                            <h3>{item.name}</h3>

                            <p>
                                Type: {item.type} <br />
                               
                               {
                                power && (
                                    <>Power : {item.power}</>
                                )
                               }
                            </p>

                            <button onClick={()=> setPower(!power)}>{power ? "Hide Power" : "Show Power"}</button>

                            <button className = "like-btn"onClick={() => setLike(like + 1)}>
                                💜 Make Favorite
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Combined;
