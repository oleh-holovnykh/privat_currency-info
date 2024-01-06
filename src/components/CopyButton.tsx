import React, { useState } from 'react';

interface Props {
  value: string;
}

export const CopyButton: React.FC<Props> = ({ value }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Error copying text', error);
    }
  };

  const textStyle = copied ? "text-green-500" : "text-blue-500 cursor-pointer hover:underline";

  return (
    <span onClick={handleCopy} className={`${textStyle}`}>
      {copied ? 'copied' : '(copy)'}
    </span>
  );
};
