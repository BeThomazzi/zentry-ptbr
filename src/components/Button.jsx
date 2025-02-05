

const Button = ({ title, id, rightIcon, leftIcon, containerClass, bgColor}) => {
  return (
    <button id={id} className={`flex relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black transition-all ease-in-out delay-150 ${containerClass} ${bgColor}`}>

        {leftIcon}

        <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">

            <div>
                {title}
            </div>

        </span>

        {rightIcon}

    </button>
  )
}

export default Button