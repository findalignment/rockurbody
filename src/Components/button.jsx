function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  onClick,
  disabled = false,
  className = ''
}) {
  const baseStyles = "font-semibold font-body rounded-lg transition-all duration-200 inline-flex items-center justify-center";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 active:scale-95 shadow-sm hover:shadow-md",
    secondary: "bg-secondary text-white hover:bg-secondary/90 active:scale-95 shadow-sm hover:shadow-md",
    accent: "bg-accent text-white hover:bg-accent/90 active:scale-95 shadow-sm hover:shadow-md",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "text-primary hover:bg-primary/10"
  };
  
  const sizes = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg"
  };
  
  const disabledStyles = "opacity-50 cursor-not-allowed hover:scale-100";
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? disabledStyles : ''}
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;