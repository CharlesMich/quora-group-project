import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';
import { fetchAllAnswersOfUser } from '../../../store/answerReducer';
import { Link } from 'react-router-dom';
import DeleteAnswerModal from '../DeleteAnswerModal';
import OpenModalButton from "../../OpenModalButton";
import './manageAnswers.css'

function ManageAnswers() {


    const dispatch = useDispatch();
    const history = useHistory();

    //if not logged in, redirect to home
    const sessionUser = useSelector((state) => state.session.user);
    if (!sessionUser || !sessionUser.id) history.push(`/`);


    const answers = useSelector((state) => state.answers.newState);

    let userId;

    if(sessionUser){
        userId = sessionUser.id
    }

    // const userId = sessionUser.id


    useEffect(() => {
        dispatch(fetchAllAnswersOfUser(userId))
    }, [dispatch, userId])

    if (!answers) return null
    if (!userId) return null
    if(!sessionUser.id) return null
    // console.log(answers)
    const answersArr = Object.values(answers)
    // console.log('answersArr', answersArr)
    if (!answersArr.length) {
        return (
            <>
                <h1 className="manageh1">Manage Your Answers</h1>
                <div>You have not Answered to any Questions</div>
            </>
        )
    }
    return (
        <div  className="outer">
            <div >
                <h1 className="manageh1">Manage Your Answers</h1>
                {/* <Link to="/spots/new" className="createNew" style={{ textDecoration: 'none', color: 'rgb(6 45 70)' }}>Create a new Spot</Link> */}
            </div>

            {answersArr.map(ele => (
                <div className="outerDiv">
                    <div className="map">

                        <div className="ansBody">
                          
                            <div><h2 className="manageh2">{ele.Question_question}</h2></div>
                            <div className="manageBody" key={ele.id}>{ele.body}</div>

                        </div>
                        <div className="upanddelbutton">

                            <span className="updateBtn" style={{backgroundColor:'rgba(237,236,237,1)'}}><Link to={`/answers/update/${ele.id}`} key={ele.id} style={{ textDecoration: 'none', color: 'black', backgroundColor:'none'}}>Update</Link></span>
                            {/* <Link to="" style={{ textDecoration: 'none', color: 'white' }}>Delete</Link> */}
                            <OpenModalButton className="updateBtn" buttonText="Delete" modalComponent={<DeleteAnswerModal answer={ele.id} />} />

                        </div>

                    </div>
                </div>

            )

            )}

            
        </div>

    )
}

export default ManageAnswers;