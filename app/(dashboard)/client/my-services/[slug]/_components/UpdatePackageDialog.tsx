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
import { cn } from "@/lib/utils";

import React from "react";

const UpdatePackageDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button size="sm">Update Package</Button>
      </DialogTrigger>
      <DialogContent className={cn("min-w-[90%] md:min-w-[70%]")}>
        <DialogHeader>
          <DialogTitle>Upgrade Your Package</DialogTitle>
          <DialogDescription>
            Choose the best package for your business to unlock additional
            features and grow efficiently.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[80vh]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* Basic Package */}
            <div className="bg-gray-100 border rounded-lg shadow-md text-center p-6">
              <div className="bg-primary text-white py-4 rounded-t-lg">
                <h3 className="text-2xl font-semibold">Basic</h3>
                <p className="text-lg">৳1000 / month</p>
              </div>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>✔ Basic Support</li>
                <li>✔ Limited Analytics</li>
                <li>✔ Single Store Access</li>
              </ul>
              <Button className="mt-6 w-full" variant="outline">
                Select Basic
              </Button>
            </div>

            {/* Premium Package */}
            <div className="bg-gray-100 border rounded-lg shadow-md text-center p-6">
              <div className="bg-yellow-500 text-white py-4 rounded-t-lg">
                <h3 className="text-2xl font-semibold">Premium</h3>
                <p className="text-lg">৳5000 / month</p>
              </div>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>✔ Premium Support</li>
                <li>✔ Advanced Analytics</li>
                <li>✔ Multi-Store Access</li>
                <li>✔ Custom Branding</li>
              </ul>
              <Button className="mt-6 w-full" variant="outline">
                Select Premium
              </Button>
            </div>

            {/* Custom Package */}
            <div className="bg-gray-100 border rounded-lg shadow-md text-center p-6">
              <div className="bg-slate-800 text-white py-4 rounded-t-lg">
                <h3 className="text-2xl font-semibold">Custom</h3>
                <p className="text-lg">Contact Us</p>
              </div>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>✔ Tailored Features</li>
                <li>✔ Priority Support</li>
                <li>✔ API Integration</li>
                <li>✔ Advanced Customization</li>
              </ul>
              <Button className="mt-6 w-full" variant="outline">
                Contact Sales
              </Button>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default UpdatePackageDialog;
