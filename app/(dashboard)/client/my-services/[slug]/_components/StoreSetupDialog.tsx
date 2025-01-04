"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React, { useState } from "react";
import StoreSetupForm from "./StoreSetupForm";

const StoreSetupDialog = ({ id }: { id: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <Button>Setup Your Store</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Setup Your Store</DialogTitle>
        </DialogHeader>
        {/* form */}
        <StoreSetupForm id={id} setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default StoreSetupDialog;
