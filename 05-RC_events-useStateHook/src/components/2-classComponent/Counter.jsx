//* ============================ CLASS COMPONENTS AND STATE ============================
//* React'da Class-Component'ler ES6 class yapisina dayanmaktadir.
//* Cok fazla boilerplate kod icermektedir.
//* Ancak Class-Component'ler React'da state'leri barindiran ilk component yapisidir.
//* State, aslinda bir component hakkinda bilgi tutan bir React nesnesidir.
//* Bir componentin state'i zaman icerisinde degisebilir.
//* State her degistiginde React bu componenti yeninden render eder.
//* Bir state'e baslangıc degeri constructor metodu icersinde this.state ile atanabilir
//* constructor'in disinda state, setState() metodu ile degistilebilir.
//* ====================================================================================


import React, { Component } from 'react';

export class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:props.count || 0,
      };
      this.handleInc=this.handleInc.bind(this);
    }
    handleInc() {
   this.setState({
    count:this.state.count + 1,
})
    }
    handleDec = () => {
        this.setState ({
            count:this.state.count -1,
        })
    }

  render() {
    return (
      <div className="container text-center mt-4">

        <h1 className="display-4 text-danger m-4">COUNT:{this.state.count}</h1>
        <button onClick={this.handleInc} className="btn btn-success ">INC</button>
        <button  className="btn btn-warning ms-3">CLR</button>
        <button onClick={this.handleDec} className="btn btn-dark ms-3">DEC</button>
      </div>
    );
  }
}

export default Counter;
