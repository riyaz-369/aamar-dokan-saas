"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FeatureType } from "./PackageForm";

interface FeaturesDialogProps {
  featuresState: FeatureType[];
  setFeaturesState: React.Dispatch<React.SetStateAction<FeatureType[]>>;
}

const FeaturesDialog: React.FC<FeaturesDialogProps> = ({
  featuresState,
  setFeaturesState,
}) => {
  const handleCheckedChange = (index: number) => {
    setFeaturesState((prevState) =>
      prevState.map((feature, i) =>
        i === index ? { ...feature, isGet: !feature.isGet } : feature
      )
    );
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button type="button" variant="outline">
          Features
        </Button>
      </DialogTrigger>
      <DialogContent className={cn("w-1/2")}>
        <DialogHeader>
          <DialogTitle>Features</DialogTitle>
        </DialogHeader>
        <div className="h-[80vh] overflow-auto">
          <div className="grid grid-cols-4 gap-8 justify-center p-4 overflow-auto">
            {featuresState.map((feature, index) => (
              <div key={index} className="mb-4">
                <label className="text-sm mr-4">{feature.feature}</label>
                <Checkbox
                  checked={feature.isGet}
                  onCheckedChange={() => handleCheckedChange(index)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <Button>Save</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FeaturesDialog;
