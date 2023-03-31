import './Button.css'
/**
 * There is plenty more I can do here
 * eg. different themes, sizes, a disabled state, etc
 */
function Button(props: React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>) {
  const {children, ...data} = props
  const baseClass = 'e-button'
  return (
    <button {...data} className={`${baseClass} ${data.className ?? ''}`}>
      {children}
    </button>
  )
}

export default Button
