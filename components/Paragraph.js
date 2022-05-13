import classNames from "classnames/bind"
import styles from "./paragraph.module.scss"

let cx = classNames.bind(styles)

const Paragraph = ({children, intro, marginBottom}) => {
    let paragraphClasses = cx({
        paragraph : true,
        intro : intro,
        [`margin-bottom-${marginBottom}`] : marginBottom
    })

    return (
        <p className={paragraphClasses}>
            {children}
        </p>
    )
}

export default Paragraph