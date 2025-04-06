import "./button.css"

export interface ButtonProps {
  text: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button = ({
  text,
  size = "medium",
  onClick,
  variant = "primary",
}: ButtonProps) =>{
  const mode = variant === 'primary'
  ? "button--primary"
  : "button--secondary";
  return (
    <button 
    className={['button', `button-${variant}`,
    `button-${size}`, mode].join(' ')}
    onClick={onClick}
    >
        {text}
    </button>
  )
}