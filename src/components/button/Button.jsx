import scss from './Button.module.scss'
import addCard from '../../assets/add-card.svg'
import addCardDisable from '../../assets/add-card-disable.svg'

function Button(props) {
    const {type, disabled, onClick} = props;
    return (
        <button 
            className={`
                ${scss.button} 
                ${type === 'submit' ? scss.submit : scss.add} 
                ${disabled ? scss.disabled : scss.active}`}
                onClick={disabled ? () => {} : onClick}>
                
                {type === 'submit' ? 'Submit' : 
                <>
                    <img src={disabled ? addCardDisable : addCard} alt='Add card'/>
                    Add card  
                </>}
        </button>
    )
}

export default Button;