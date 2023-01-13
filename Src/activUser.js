import { Component } from "react";
import imgThree from './three_photo.png'

export class ActivUser extends Component {
    constructor(){
        super();

        this.state = {
                inputUser: '',
                list: []
        };
    }

    checkInputUser(e){
            this.setState({inputUser: e});
    }

    addlist(e){
        let inputUser = this.state.inputUser

        if(inputUser === ''){
            alert('Напишите в графу свой продукт')
        }

        else{
            let listProdyct = this.state.list;
            listProdyct.push(e)
            this.setState({list: listProdyct, inputUser: ''})
        }
    }

    zahercnyt(event){
        const li = event.target;
        li.classList.toggle('colorRed')
    }

    delaetList(){
        let massiv = this.state.list;
        massiv = []
        this.setState({list: massiv})
    }

    enterSumbit(e){
       e.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.enterSumbit}>
            <div>
                <div className="conteiner_two">
                    <input placeholder="What do you want to buy today?" 
                    onChange={(e) => {this.checkInputUser(e.target.value)}}
                    value = {this.state.inputUser}/>
                </div>

                <div className="conteiner_two">
                    <button onClick={() => this.addlist(this.state.inputUser)} className = 'btn btn-add'>ADD</button>
                </div>

                <ul>
                    {this.state.list.map((item, index) => (
                        <li onClick={this.zahercnyt} key={index}>
                            <img src={imgThree} alt = 'thoto Three' width='50px'/>
                            {item}
                        </li>
                    ))}
                </ul>

                <div className="conteiner_two">
                    <button onClick={() => this.delaetList()} className='btn btn-delete'>Delate</button>
                </div>
            </div>
        </form>
        )
    }
}
