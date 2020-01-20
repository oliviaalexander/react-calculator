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
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event){
        const {value, name} = event.target;
        this.setState({
            [name] : value
        })
    }

   
    handleSubmit(e){
        e.preventDefault();

        const firstInputAsInteger = Number(this.state.firstNumber), 
        secondInputAsInteger = Number(this.state.secondNumber)      
        
        switch(this.state.mathOperator){
            case '+':
                this.setState({
                    result: firstInputAsInteger +  secondInputAsInteger
                })
                break;
            case '-': 
                this.setState({
                    result: firstInputAsInteger -  secondInputAsInteger
                })
                break;
            case '/':
                this.setState({
                    result: firstInputAsInteger /  secondInputAsInteger
                })
                break;
            case '*':
                this.setState({
                    result: firstInputAsInteger *  secondInputAsInteger
                })
                break;
            default: 
                this.setState({
                    error: 'Oops! Looks like something bad happened.'
                })
        }
        
    }
    
    render(){
        
            return(
                <div>
                <form id="calculatorForm"className="inputContainer" onSubmit={this.handleSubmit}>
                    <input 
                        className="userInput"
                        id="formInput"
                        type="number" 
                        name="firstNumber" 
                        value={this.state.firstNumber} 
                        placeholder="Enter a number" 
                        onChange={this.handleChange}
                        />

                    <input
                        className="userInput"
                        id="formInput"
                        type="text"
                        name="mathOperator"
                        value={this.state.mathOperator}
                        placeholder="+ - / *"
                        onChange={this.handleChange}
                        />

                    <input
                        className="userInput"
                        id="formInput"
                        type="number"
                        name="secondNumber"
                        value={this.state.secondNumber}
                        placeholder="Enter a second number"
                        onChange={this.handleChange}
                        />
                    
                    <button>Calculate</button>
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