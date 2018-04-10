import React,{Component} from 'react';
var _this;
Test.fet()
class Test extends Component {
    constructor(props){
        super(props)
        this.state={
            heihgt:"sdfsdf"
        }
    }
    componentWillReceiveProps(){

    }
    componentWillMount(){
        var that = this
    }
    
    componentDidMount(){
        
    }
    //避免不必要的渲染
    shouldComponentUpdate(){
        return true
    }
    fet(){
       
    }
    _click(){
        console.log("wo xiangzhidaothisl")
        console.log(this)
        // this.setState({heihgt:123});
    }
    render(){
        _this = this
        console.log(this.props)
        return (    
            <div onClick={()=>this.props.onPress("xuewenjieeee")}>
            <p onClick={this._click}>
                sadfasdfsdfsadf
            </p>
                {this.props.name}
               { this.props.children("sdfsdff")}
            </div>
        )
    }
  
}
export default  class Test2 extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"bingbing"
        }
    }
    onPress(title){
        console.log(title)
    }
    render(){
        
        return (
            <Test name="xuewenjie" onPress={(title)=>this.onPress(title)}>
            
            {
                test=>
                
                <p>{test}</p>
            }
           
            </Test>
        )
    }
}       