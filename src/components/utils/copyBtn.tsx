import { CheckCheck, Copy } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

const CopyBtn = ({ value }: { value?: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const onCopy = async () => {
    if (!value) {
      return;
    }
    setIsCopied(true);
    await navigator.clipboard.writeText(value);
    toast.success("Copied to clipboard");
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const Icon = isCopied ? CheckCheck : Copy;

  return (
    <button onClick={onCopy} disabled={!value || isCopied} className="z-50">
      <Icon className="h-4 w-4" />
    </button>
  );
};

export default CopyBtn;
