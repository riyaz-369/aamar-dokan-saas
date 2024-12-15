import React from "react";
import { Loader2 } from "lucide-react";
import { AlertDialog, AlertDialogContent } from "./ui/alert-dialog";
import Image from "next/image";

interface LoaderProps {
  isOpen: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClose: any;
  title: string;
}

const Loader: React.FC<LoaderProps> = ({ isOpen, onClose, title }) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <div className="flex flex-col justify-center items-center">
          <Image
            // className="dark:invert"
            src="/logo.svg"
            alt="Aamar Dokan"
            width={100}
            height={38}
            priority
          />
          <Loader2 size={24} className="animate-spin text-primary" />
          <p>{title}</p>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Loader;
