import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import { Card, ListGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Profile.css'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { BsFileEarmarkPost } from "react-icons/bs";

function Profile() {

    let {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const [editIndex, setEditIndex] = useState(null);
    const [editingComment, setEditingComment] = useState('');
    const [user, setUser] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const commentsL = localStorage.getItem('comments');
        const newComments = JSON.parse(commentsL);
        if (newComments == null) {
            setComments([]);
            return;
        }
        setComments([...newComments])
    }, [])

    const navigate = useNavigate();

    useEffect(() => {
        const userobj = localStorage.getItem("user");
        if (!userobj) {
            navigate('/login');
            return;
        }
        const user = JSON.parse(userobj)
        setUser(user)
    }, [])

    function handlePostComment(commentObj) {
        const date = new Date()
        const formattedDate = date.toLocaleString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: '2-digit',
            hour12: true
        });
        const newCommentObj = { ...commentObj, time: formattedDate }
        localStorage.setItem('comments', JSON.stringify([newCommentObj, ...comments]));
        setComments([newCommentObj, ...comments]);
        reset();
    };

    function handleDeleteComment(index) {
        let commentsCopy = [...comments]
        commentsCopy.splice(index, 1)
        localStorage.setItem('comments', JSON.stringify(commentsCopy));
        setComments(commentsCopy)
    };

    // Function to handle editing a comment
    const handleEditComment = (index, comment) => {
        setEditIndex(index);
        setEditingComment(comment);
    };

    // Function to update the comment after editing
    const handleUpdateComment = (editedComment) => {
        const updatedComments = comments.map((comment, index) =>
            index === editIndex ? { ...comment, comment: editedComment } : comment
        );

        localStorage.setItem('comments', JSON.stringify(updatedComments));
        setComments(updatedComments);
        setEditIndex(null);
        setEditingComment('');
    };

    return (
        <div className="container mt-4">
    <div className="row">
        <div className='col-sm-12 col-lg-4 col-md-4'>
            <h2 className='text-center'>Profile Dashboard</h2>
            <div className='card'>
                <div className='card-body'>
                    <h5 style={{ textAlign: 'center', marginBottom: '1rem' }}>{`Welcome, ${user.firstName} ${user.lastName}`}</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item" style={{ fontSize: '1.2rem' }}>
                            <strong>Email:</strong> {user.email}
                        </li>
                        <li className="list-group-item" style={{ fontSize: '1.2rem' }}>
                            <strong>Phone Number:</strong> {user.phno}
                        </li>
                        <li className="list-group-item" style={{ fontSize: '1.2rem' }}>
                            <strong>Date of Birth:</strong> {user.dob}
                        </li>
                        <li className="list-group-item" style={{ fontSize: '1.2rem' }}>
                            <strong>Gender:</strong> {user.gender}
                        </li>
                        <li className="list-group-item" style={{ fontSize: '1.2rem' }}>
                            <strong>State:</strong> {user.state}
                        </li>
                    </ul>
                        </div>
                    </div>
                </div>

                <div className='col-sm-12 col-lg-8 col-md-8 mt-4'>
                    <div>
                        <h4>Post a Comment</h4>
                        <div className="mb-3 col-3 d-block mx-auto">
                    <select id="state" className="form-select shadow-sm" {...register('state', { required: true })} defaultValue="">
                        <option value="" disabled>Choose a Place</option>
                        <option value="Andhra pradesh">Taj Mahal</option>
                        <option value="Karnataka">Jaipur</option>
                        <option value="Kerala">Varanasi</option>
                        <option value="Tamil nadu">Shimla</option>
                        <option value="Telangana">Amritsar</option>
                    </select>
                    {/* validation error message for state */}
                    {errors.state?.type === "required" && (
                        <p className="text-danger">Please select a state</p>
                    )}
                </div>
                        <form action="" onSubmit={handleSubmit(handlePostComment)}>
                            <input type="text" className="text form-control p-3"
                                {...register("comment", { required: true })}
                                placeholder="Write your comment here..."
                            />
                            {errors.newComment?.type === 'required' &&
                                <p className='text-danger'>Comment is required</p>
                            }
                            <button
                                type="submit"
                                className="btn btn-primary mt-2 text-white "
                            >
                                Post Comment
                            </button>
                        </form>
                    </div>
                    <div className="mt-3">
                        <h4>Comments</h4>
                        {comments.length === 0 ? (
                            <div className='text-center'>
                                <img src="https://t4.ftcdn.net/jpg/04/22/28/33/360_F_422283347_0cTaZzojJmjUunSVZO671buY3nO2PR5G.jpg" alt="" className='d-block mx-auto' style={{width:'10vw'}}/>
                                <h1>Share Comments</h1>
                                <p>When you share Comments, they will appear on your profile.</p>
                            </div>
                        ) : (
                            <>
                                <div>
                                    {comments.map((commentObj, index) => (
                                        <div key={index} className='d-flex w-100' style={{ fontSize: "0.9rem" }}>
                                            <img src="https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg?size=626&ext=jpg" alt="" width={30} height={30} className='rounded-circle me-2 mt-2' />
                                            <div className='border rounded p-2 mb-3'>
                                                <div className='d-flex me-3 mb-2'>
                                                    <div className='me-3'>{user.firstName} {user.lastName}</div>
                                                    <div className='me-3'> @{user.username}</div>
                                                    <div className='text-secondary me-3'>{commentObj.time}</div>

                                                    <FaRegEdit
                                                        className='mt-1 me-3 edit-logo'
                                                        onClick={() => handleEditComment(index, commentObj.comment)}
                                                    />
                                                    <RiDeleteBin6Line className='mt-1 delete-logo' onClick={() => handleDeleteComment(index)} />
                                                </div>

                                                <div className='mb-1'>
                                                    {editIndex === index ? (
                                                        <div>
                                                            <input
                                                                type="text"
                                                                className="text form-control p-2"
                                                                value={editingComment}
                                                                onChange={(e) => setEditingComment(e.target.value)}
                                                            />
                                                            <button
                                                                type="button"
                                                                className="btn btn-primary btn-sm mt-2 text-white"
                                                                onClick={() => handleUpdateComment(editingComment)}
                                                            >
                                                                Save
                                                            </button>
                                                        </div>
                                                    ) : (
                                                        <>
                                                            <div style={{ fontSize: "1.2rem" }}>{commentObj.comment}</div>
                                                            <AiOutlineLike className='ms-1 me-2 like-logo' /><AiOutlineDislike className='dislike-logo' />
                                                        </>
                                                    )}
                                                </div>

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Profile