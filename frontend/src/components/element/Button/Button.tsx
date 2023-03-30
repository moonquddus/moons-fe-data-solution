import './Button.css'

function Button(props: React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>) {
  const {children, ...data} = props
  const baseClass = 'e-button'
  return (
    <button {...data} className={`${baseClass} ${data.className}`}>
      {children}
    </button>
  )
}

export default Button
