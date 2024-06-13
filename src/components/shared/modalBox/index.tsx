
import s from "./index.module.css"
const ModalBox = ({children} : {children: React.ReactNode}) => {
  return (
    <div className={s.wrapper}>
        {children}
    </div>
  )
}

export default ModalBox