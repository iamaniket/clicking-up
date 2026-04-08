const sizeClasses = {
  xs: 'h-6 w-6',
  sm: 'h-7 w-7',
  md: 'h-9 w-9',
  lg: 'h-12 w-12',
};

interface AvatarProps {
  src: string;
  alt: string;
  size?: keyof typeof sizeClasses;
  border?: boolean;
  className?: string;
  'data-testid'?: string;
}

export function Avatar({
  src,
  alt,
  size = 'sm',
  border = false,
  className = '',
  ...rest
}: AvatarProps) {
  return (
    <img
      src={src}
      alt={alt}
      title={alt}
      className={`rounded-full object-cover ${sizeClasses[size]} ${
        border ? 'border-2 border-surface-container-lowest' : ''
      } ${className}`}
      {...rest}
    />
  );
}
