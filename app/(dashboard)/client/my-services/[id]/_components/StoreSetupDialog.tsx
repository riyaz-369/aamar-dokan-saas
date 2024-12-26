import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React from "react";
import StoreSetupForm from "./StoreSetupForm";

const StoreSetupDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Setup Your Store</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Setup Your Store</DialogTitle>
        </DialogHeader>
        {/* form */}
        <StoreSetupForm />
      </DialogContent>
    </Dialog>
  );
};

export default StoreSetupDialog;
