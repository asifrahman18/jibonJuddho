import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { createCompany } from "@/app/api/company/route";
import { useToast } from "@/components/ui/use-toast"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface CompDetailProps {
  compId: number | null;
}

const AddCompanyPanel: React.FC<CompDetailProps> = ({ compId }) => {

  const { toast } = useToast()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [location, setLocation] = useState('')


  const addComp = async () => {
    try {
      const response = await createCompany(compId, {
        name,
        description,
        email,
        phone,
        location
      });

      if(response){
        window.location.reload(); 
        toast({
          title: "Good News!",
          description: 'Company Added Successfully',
        })
      }

      console.log("Job created successfully:", response);

    } catch (error) {
      console.error("Error creating job:", error);
  };
}
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Add Company</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add Company</SheetTitle>
          <SheetDescription>
            Add the information of your company here. Click save when you are done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right text-sm">
              Name
            </Label>
            <Input id="name" className="col-span-3" onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input id="description" className="col-span-3" onChange={(e) => setDescription(e.target.value)}/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="location" className="text-right">
              Location
            </Label>
            <Input id="location"  className="col-span-3" onChange={(e) => setLocation(e.target.value)}/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">
              Phone
            </Label>
            <Input id="phone" className="col-span-3" onChange={(e) => setPhone(e.target.value)}/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" className="col-span-3" onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button onClick={addComp}>Add Company</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}


export default AddCompanyPanel;