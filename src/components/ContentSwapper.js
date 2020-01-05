import React from 'react'
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import TransitionGroup from 'react-addons-css-transition-group';


class ContentSwapper extends React.Component {


    constructor(props){
        super();
        this.state = {
            swapped:false,
            picIndex:0,
        }
    }

    componentDidMount(){

        const nextIndex = (this.state.picIndex < this.props.children.length - 1) ? this.state.picIndex + 1 : 0;
        this.timer = setTimeout(() => this.setState({
            picIndex: nextIndex,
        }), Math.random() * 2000);

    }

    componentDidUpdate(){

        clearTimeout(this.timer);
        const nextIndex = (this.state.picIndex < this.props.children.length - 1) ? this.state.picIndex + 1 : 0;
        this.timer = setTimeout(() => this.setState({
            picIndex: nextIndex,
        }), 3000);

    }

    componentWillUnmount(){
        clearTimeout(this.timer);

    }

    render() {

        console.log("render content swapper");
        const content = React.Children.toArray(this.props.children);
        const {style = {}} = this.props;


        return (
            <TransitionGroup {...this.props} style={style}>
                {content[this.state.picIndex]}
            </TransitionGroup>
        )
    }
}

export default ContentSwapper