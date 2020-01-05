import React from 'react';
import ContentSwapper from './ContentSwapper';


export class WorkImageBlock extends React.Component{

    constructor(props){
        super();
        this.state = {
            hasMounted:false,
            picIndex:0,
        }
    }


    componentDidMount(){

        //this.fetchData();


    }
    render(){
        const key = new Date();
        const img = <div key={key}>
            <img src={`/img/${this.props.images[this.props.index]}`} />
        </div>
        return(
            <ContentSwapper transitionName="cross-fade" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
                {this.props.images.map((item,index) => (
                    <img src={`/img/${item}`} key={item} />
                ))}
            </ContentSwapper>

        )


    }
}



export default WorkImageBlock;