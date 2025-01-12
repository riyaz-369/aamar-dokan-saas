"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

import React from "react";

const UpdatePackageDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button size="sm">Update Package</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upgrade Your Package</DialogTitle>
          <DialogDescription>
            {/* Packages here */}
            <ScrollArea className="h-[80vh]">
              <div className="flex gap-4 flex-col">
                <div className="p-28 bg-gray-100 text-center">
                  <h3>Basic</h3>
                </div>
                <div className="p-28 bg-gray-100 text-center">
                  <h3>Basic</h3>
                </div>
                <div className="p-28 bg-gray-100 text-center">
                  <h3>Basic</h3>
                </div>
                <div className="p-28 bg-gray-100 text-center">
                  <h3>Basic</h3>
                </div>
              </div>
            </ScrollArea>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UpdatePackageDialog;
