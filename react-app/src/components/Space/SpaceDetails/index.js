import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, NavLink } from "react-router-dom/cjs/react-router-dom.min"
import { thunkGetSingleSpace } from "../../../store/space"
import { allQuestions } from "../../../store/questions"
import OpenModalButton from "../../OpenModalButton"
import UpdateQuestion from "../../UpdateQuestion"
import DeleteQuestion from "../../DeleteQuestion"


const SpaceDetails = () => {
    const { spaceId } = useParams()
    const dispatch = useDispatch()
    const space = useSelector(state => state.spaces.singleSpace)
    const questions = useSelector(state => state.questions)
    const user = useSelector(state => state.session.user.id)

    useEffect(() => {
        dispatch(thunkGetSingleSpace(spaceId))
        dispatch(allQuestions())
    }, [dispatch, spaceId])

    if (!space || !questions || !user) return null

    const questionsArray = Object.values(questions)
    const spaceQuestions = questionsArray.filter(question => question.space_id === space.id)

    return (
        <div>
            <div>
                <h2>{space.space_name}</h2>
            </div>
            <div className="allQuestions">
                {spaceQuestions.map(ele =>
                    <div className="questionNum" key={ele.id}>
                        <div className="userPart">
                            <div className="profileDiv"></div>
                            <div className="textDiv">
                                <p className="nom">{ele.User_firstName} {ele.User_lastName}</p>

                            </div>
                        </div>
                        <div className="questionPart">
                            <div>
                                <NavLink key={ele.id} exact to={`/answers/${ele.id}`}>
                                    <p className="ques">{ele.question}</p>
                                </NavLink>
                                {user && ele.owner_id === user && <OpenModalButton
                                    buttonText="Update"
                                    modalComponent={<UpdateQuestion id={ele.id} />}
                                />}
                                {user && ele.owner_id === user && <OpenModalButton
                                    buttonText="Delete"
                                    modalComponent={<DeleteQuestion id={ele.id} />}
                                />}
                            </div>
                            <p>I've never had one and I'm 99% sure that I'm not capable of maintaining one.

                                I would have to fall in love with someone who's kind and decent, however I was programmed and conditioned at a young age to fall in love with assholes, who will hurt me, just like my mother did.

                                Let's say I would go against my feelings and get with someone who's genuinely a “good" person. Right from the bat I know that I would not be attracted to this person. Even if they would be conventionally attractive.

                                Next, I would question everything nice they say and do. Why are they being nice to me? They must have a reason. They're trying to manipulate me. To get something from me. They say they love me in a selfless way, but would they die for me? Nope.

                                When I was a teenager, my ex asked me if I would die for him and I said “yes, of course". I was telling the truth. He smiled and said “I know you believe that's true, but I don't think you understand the implications of giving up your life for another person. No one would do that".</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SpaceDetails