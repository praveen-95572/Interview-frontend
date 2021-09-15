import React, { Component } from 'react'
import post from './Post';
import { Link } from "react-router-dom";
import { Router, Route ,withRouter } from 'react-router-dom';
import PostDetail from "./PostDetail";

export class Home extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (value) => {
        console.log(value);
        this.props.history.push({
            pathname: '/post/'+value,
        });
    };

    render() {
        return (
            <>
                <div className="container-fluid bg-blue-50 mx-auto p-10  ">
        
            {
                post.map((user) => {
                    return(
                        
                        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl  my-12 cursor-pointer" onMouseDown={() => this.handleClick(user.id)}>
                            
                                <div class="md:flex  transition duration-500 ease-in-out" id="post ">
                                    
                            
                                        <div class="p-12">
                                            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{user.title} </div>
                                            <p class="mt-2 text-gray-500">{user.body}</p>
                                        </div>
                                        
                                </div>
                        </div>
                        
                    );
                })
            }
        
            
        </div>
        
       
        </>
        )
    }
}

export default withRouter(Home)




