export default function DangerButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `btn btn primary ${
                    disabled && 'opacity-100'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
