import React, {Component} from 'react'

class CalculatorComponent extends Component{
    constructor(){
        super()
        this.state={
            firstNumber: '',
            secondNumber: '',
            mathOperator: '',
            result: '', 
            error : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.checkInputForValidOperator = this.checkInputForValidOperator.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event){
        const {value, name} = event.target;
        this.setState({
            [name] : value
        })
    }

    checkInputForValidOperator(event){
        const {value} = event.target, 
                RegEx = new RegExp(/^[+-/*]*$/)

        if (RegEx.test(value)){
            this.setState({
                mathOperator : value
            })
        }else{
            this.setState({
                error: 'Please enter a valid math operator!'
            })
        }
    }

  
    handleSubmit(e){
        e.preventDefault();

        const firstInputAsInteger = Number(this.state.firstNumber), 
        secondInputAsInteger = Number(this.state.secondNumber),        
        equation = eval(firstInputAsInteger + this.state.mathOperator + secondInputAsInteger)
        
        this.setState({
            result: equation
        })
        
    }
    
    render(){

            return(
                <div>
                <form id="calculatorForm" className="formContainer" onSubmit={this.handleSubmit}>
                    <div> 
                        <span className="inputContainer">
                            <input 
                                className="userInput"
                                id="formInput"
                                type="number" 
                                name="firstNumber" 
                                value={this.state.firstNumber} 
                                placeholder="Enter a number" 
                                onChange={this.handleChange}
                                />
                        </span>

                        <span className="inputContainer">
                            <input
                                className="userInputMathOperator"
                                id="formInput"
                                maxLength="1"
                                type="text"
                                name="mathOperator"
                                value={this.state.mathOperator}
                                placeholder="+ - / *"
                                onChange={this.checkInputForValidOperator}
                                />
                        </span>

                        <span className="inputContainer">
                            <input
                                className="userInput"
                                id="formInput"
                                type="number"
                                name="secondNumber"
                                value={this.state.secondNumber}
                                placeholder="Enter a second number"
                                onChange={this.handleChange}
                                />
                        </span>
                    </div>
                    <div className="calculateButtonContainer">
                        <button className="calculateButton">Calculate</button>
                    </div>
                </form>

                <div>
                    <p className='displayUserInput'>{this.state.firstNumber} {this.state.mathOperator} {this.state.secondNumber}</p>
                    <p className='result'>{this.state.result}</p>
                    <p className='errorMessaging'>{this.state.error}</p>
                </div>

            </div>
        )
    }
    
}

export default CalculatorComponent