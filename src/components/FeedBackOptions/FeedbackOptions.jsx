import PropTypes from 'prop-types'
import css from 'components/FeedBackOptions/feedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return <ul>
        {options.map(option => {
            return <li key={option} className={css.option}>
                <button type="button" className={css.btn} onClick={onLeaveFeedback} name={option}> {option}</button>
            </li>
        })}
    </ul>
}

FeedbackOptions.propTypes = {
	options: PropTypes.array.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired
};