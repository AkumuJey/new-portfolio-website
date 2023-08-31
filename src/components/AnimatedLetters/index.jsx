import './index.scss'

const AnimatedLetters = ({lettersClass, strArray, index}) => {
    return (
        <span>
            {
                strArray.map((char, i) => (
                    <span key={char + i} className={`${lettersClass} _${i + index}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
}
export default AnimatedLetters