import React, {useEffect, useState} from 'react';
import './App.css';


function App() {
    let options = ["rock", "paper", "scissors"]
    const [selectedOption, setOption] = useState("");
    const [selectedRobot, setOptionRobot] = useState("");

    useEffect(() => {
        if (selectedOption !== "") {
            let random = Math.floor(Math.random() * 3);
            setOptionRobot(options[random])
            setWinner()
        }
    }, [selectedOption])

    function setWinner () {
        switch (selectedOption) {
            case "rock": {
                switch (selectedRobot) {
                    case "rock": {
                        alert("Egalitate");
                        break;
                    }

                    case "paper": {
                        alert("Ai castigat!")
                        break;
                    }

                    case "scissors": {
                        alert("Ai pierdut!")
                        break;
                    }

                }
                break;
            }

            case "paper":{
                switch (selectedRobot) {
                    case "rock": {
                        alert("Ai castigat!")
                        break;
                    }

                    case "paper": {
                        alert("Egalitate");
                        break;
                    }

                    case "scissors": {
                        alert("Ai pierdut!")
                        break;
                    }
                }
                break
            }

            case "scissors":{
                switch (selectedRobot) {
                    case "rock": {
                        alert("Ai castigat!")
                        break;
                    }

                    case "paper": {
                        alert("Ai pierdut!")
                        break;
                    }

                    case "scissors": {
                        alert("Egalitate");
                        break;
                    }
                }
                break
            }
        }
    }

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            {selectedOption} vs {selectedRobot}

            <div>
                {options.map((item) => {
                    return <button onClick={() => setOption(item)}>{item}</button>
                })}
            </div>
        </div>
    );
}

export default App;
