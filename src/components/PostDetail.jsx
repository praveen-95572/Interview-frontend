import React from 'react'
import comment from './comment';
import post from './Post';
import {useParams} from "react-router-dom";

const PostDetail = (props) => {
    const  post_id  = props.match.params.postId;
    return (
        <>
        {post.map((user) => {
                const ans = user.id == post_id;
                if(ans){
                    return(
                    <div class="box-content h-22 w-88 p-4 border-4 ...  p-2 text-center text-2xl bg-blue-200 shadow-2xl">
                       <h1 className="font-semibold tracking-wide  underline"> {user.title}</h1>
                       <p className> {user.body} </p>
                    </div>
                    );
                }
        })}
        <div className="container-fluid bg-blue-50 mx-auto p-4  ">
            {comment.map((user) => {
                const ans = user.postId == post_id;
                if(ans){
                    return(
                    
                        
                            <div class="max-w-80 py-4 px-8 bg-white shadow-lg rounded-lg mx-40 my-10 grid justify-items-stretch ... ">
                                
                                <div>
                                    <h2 class="text-gray-800 text-3xl font-semibold">{user.name}</h2>
                                    <p class="mt-2 text-gray-600">{user.body}</p>
                                </div>
                                <div class="flex justify-end mt-4">
                                    <a href="#" class="text-xl font-medium text-indigo-500">{user.email}</a>
                                </div>
                                
                            </div>
                        
                    );
                    
                }


            })}
            </div>
            
        </>
    )
}

export default PostDetail
