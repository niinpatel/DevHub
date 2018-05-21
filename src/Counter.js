import React, {Component} from 'react';

class Counter extends Component{

    constructor(props){
        super(props);

        this.state = {
            count : 0,
            showCounter:true,
            autoClicked:false
        };

        // this.handleIncrement = this.handleIncrement.bind(this);
        // this.handleDecrement = this.handleDecrement.bind(this);
    }
    // handleIncrement() {
    //     //console.log('handleIncrement');
    //     this.setState((currentState) => {
    //         return {count: currentState.count + 1}
    //     });
    //
    //     console.log('handleIncrement', this.state.count);
    //
    // }
    //
    // handleDecrement(){
    //     this.setState((currentState) => {
    //         return {count : currentState.count-1}
    //     });
    //
    //     console.log('handleDecrement', this.state.count);
    // }
    //
    handleAutoIncrement = (event) => {

        if(!this.state.autoClicked){
        console.log('handleAutoIncrement', event);

        setInterval(() => {
            this.setState((currentState) => {
                return {count: currentState.count+1, autoClicked: true}
            })
        }, 1000);}

        console.log(this.state.autoClicked);
    };

    handleSelfDestroy = () => {
        this.props.handleShowCounter();
    };
    render(){
        return (

            <div>
                <strong> {this.state.count}</strong>
                {/*<button onClick={this.handleIncrement}> Increment</button>*/}
                {/*<button onClick={this.handleDecrement}>Decrement</button>*/}
                <button onClick={this.handleAutoIncrement}>Auto</button>
                <button onClick={this.handleSelfDestroy}> Destroy </button>
            </div>
        )
    };
}

export default Counter