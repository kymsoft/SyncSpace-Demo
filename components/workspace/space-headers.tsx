interface SpaceHeaderProps{
    label: string;
};

export const SpaceHeader = ({
    label,
}: SpaceHeaderProps) => {
  return (
    <p className="text-md font-bold text-white mt-2">/{label}</p>
  )
}