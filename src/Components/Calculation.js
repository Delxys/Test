import AnswerItem from './AnswerItem.js';
import img from '../img.PNG';
import { Component } from 'react';
import axios from 'axios';

class Calculation extends Component{
  
  constructor (props){
    super(props);

    console.log("constructor");
    this.state={
      AnswerList:[],
      a:0, 
      b:100, 
      N:100,
      parameterList:[]
    }
    this.onAChange = this.onAChange.bind(this);
    this.onBChange = this.onBChange.bind(this);
    this.onNChange = this.onNChange.bind(this);
    this.deleteAllHandler=this.deleteAllHandler.bind(this);
    this.calculateHandler=this.calculateHandler.bind(this);
  }

  deleteHandler(index){
    let answerList = this.state.AnswerList;
    answerList.splice(index,1);
    this.setState({AnswerList:answerList});
  }

  deleteAllHandler()
  {
    const answerListNew=[]
    this.setState({AnswerList:answerListNew})
  }

  onAChange(e) {
    var val = e.target.value;
    this.setState({a: val });
  }

  onBChange(e) {
    var val = e.target.value;
    this.setState({b: val });
  }

  onNChange(e) {
    var val = e.target.value;
    this.setState({N: val });
  }
  
  myFunc(pos){
    let tmp = pos*pos*pos/(3.0+pos)
    return tmp;
  }
  // calculateHandler(){
  //   let currentList=this.state.AnswerList;
  //   let result = 0;
  //   let a = this.state.a;
  //   let b = this.state.b;
  //   let N = this.state.N;
  //   let h = (b - a)/N;
  //   for (let i = 1; i < N - 1; i++)
  //     result += +h * (this.myFunc(+a + (+h * +i)));
  //   result += (h * ((this.myFunc(+a) + this.myFunc(+b)) / +2));
  //   currentList.unshift({answer:result, curA: a, curB: b, curN: N});
  //   this.setState({AnswerList:currentList})
  // }
  calculateHandler(){
    let currentList=this.state.AnswerList;
    let result = 0;
    // let h = (b - a)/N;
    let integralVars = {
      a: this.state.a,
      b: this.state.b,
      n: this.state.N,
      integral: "x*x"
    };
    console.log(integralVars);
    const jsonModel = JSON.stringify(integralVars);
    console.log(jsonModel);
    const headers = {
      'Content-Type': 'application/json'
    }
    axios.post(process.env.REACT_APP_PATH, jsonModel,{
      headers: headers
    })
      .then(res => {
        console.log("then");
        console.log(res);
        console.log(res.data);
        currentList.unshift({answer:res.data.answer, curA: integralVars.a, curB: integralVars.b, curN: integralVars.n});
        this.setState({AnswerList:currentList})
      })
      console.log("afterthen");
      console.log(this.currentList);
    //  currentList.unshift({answer:result, curA: a, curB: b, curN: N});

  }
  render(){
   
    let test = this.state.AnswerList.map((ans,index)=>{
      if(index===0)
        return (<div>
          <AnswerItem answer = {ans.answer} onDelete = {this.deleteHandler.bind(this, index)}
          color="lightgreen"
          a = {ans.curA} 
          b = {ans.curB} 
          N = {ans.curN}/>
          </div>);
      return(<div>
      <AnswerItem answer = {ans.answer} onDelete = {this.deleteHandler.bind(this, index)}
      color="wheat"
      a = {ans.curA} 
      b = {ans.curB} 
      N = {ans.curN}/>
      </div>);
    });
    return ( 
      <div>
        <div className="settings">
          <h1 className="header">Расчет интеграла</h1>
          <img src={img} alt="image" />
          <p>a</p><input type = "text" onChange={this.onAChange}></input>
          <p>b</p><input type = "text" onChange={this.onBChange}></input>
          <p>N</p><input type = "text" onChange={this.onNChange}></input>
          <br/>
          <button onClick = {this.calculateHandler}> Вычислить</button>
          <button onClick ={this.deleteAllHandler}> Очистить</button>
          { test }   
        </div>
      </div>
    );
  }

}
export default Calculation;
