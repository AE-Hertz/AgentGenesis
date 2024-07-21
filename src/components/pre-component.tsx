import { extractTextFromChildren } from '@/utils/extractText';
import { CopyButton } from './copy-button';

export const Pre = ({ children, ...props }: any) => {
  const textToCopy = extractTextFromChildren(children);
  console.log(textToCopy);
  return (
    <pre {...props} className="relative">
      <CopyButton text={textToCopy} />
      {children}
    </pre>
  );
};