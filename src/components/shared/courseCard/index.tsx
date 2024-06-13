
import ModalBox from '../modalBox'
import Button from '../button'
import Heading from '../heading'
type Props = {
    nameRU: string,
    img: string,
    duration: number,
    level: number,
    time:string,
}
const CourseCard = ({ nameRU
    , img, duration, level, time

}: Props) => {
    return (

        <ModalBox>
            <img src={img} />
            <Button>
                <svg>
                    <use xlinkHref="/img/sprite.svg#icon-add" />
                </svg>
            </Button>
            <Heading text={nameRU
            } />
            <div>
                <p>
                    {duration}
                </p>
                <p>
                    {time}
                </p>
                <p>
                    {level}
                </p>
            </div>


        </ModalBox>

    )
}

export default CourseCard