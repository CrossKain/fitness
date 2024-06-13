
import Heading from '../../components/shared/heading'
import BubbleText from '../../components/bubbleText'
import CourseCard from '../../components/shared/courseCard'

const MainPage = () => {
  return (
    <div>
        <Heading text={"Начните заниматься спортом&nbsp; и улучшите качество жизни"}/>
        <BubbleText/>
        <CourseCard nameRU="text" duration={24} time="25-50" level={5} img="/img/card_zumba.png" />
    </div>
  )
}

export default MainPage