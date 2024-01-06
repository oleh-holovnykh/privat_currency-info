interface Props {
  value: string;
}

export const CopyButton: React.FC<Props>  = ({ value }) => (
  <span onClick={() => navigator.clipboard.writeText(value)} className="text-blue-500 cursor-pointer hover:underline">(copy)</span>
)
