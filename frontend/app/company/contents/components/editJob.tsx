import { editJob } from "@/app/api/jobs/route";
import { useToast } from "@/components/ui/use-toast";
import React, { useState } from "react";
import Job from '../../../models/job'

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { JobTypes } from "./jobTypes";
import { Qualification } from "./qualification";

import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";


  const EditJobs: React.FC<Job> = ({ id, title, description, email, location, jobType, salary, openings, qualification, company, expiresAt, createdAt }) => {

    const { toast } = useToast()
    const [date, setDate] = React.useState<Date>();

    const [name, setName] = useState("");
    const [jdescription, setDescription] = useState("");
    const [jemail, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [jlocation, setLocation] = useState("");
    const [type, setType] = useState("");
    const [jqualification, setQualification] = useState("");
    const [jsalary, setSalary] = useState("");
    const [jOpenings, setOpenings] = useState("");
  
    const handleSelectType = (selectedType: string) => {
      setType(selectedType);
    };
  
    const handleSelectQualification = (selectedQualification: string) => {
      setQualification(selectedQualification);
    };

    const edit = async () => {
        try {
          const response = await editJob(id, {
            title: name,
            description: jdescription,
            email: jemail,
            location: jlocation,
            openings: jOpenings,
            jobType: type,
            qualification: jqualification,
            salary: jsalary,
            expiresAt: date?.toISOString(),
          });
    
          if(response){
            toast({
              title: "Good News!",
              description: 'Job edited Successfully',
            })
          }
    
          console.log("Job created successfully:", response);
    
        } catch (error) {
          console.error("Error creating job:", error);
          toast({
            title: "Something went wrong",
            description: 'Try again',
            variant: 'destructive'
          })
        }
      };

  return (
    <div className="overflow-y-auto max-h-[100vh]">
    <Dialog>
      <DialogTrigger asChild>
        <Button>Edit Job</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[100vh] overflow-y-scroll">
        <DialogHeader>
          <DialogTitle>Edit Job</DialogTitle>
          <DialogDescription>
            Make changes here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
        <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-xl lg:text-3xl">Edit Job for {title}</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="jobName">Job Name</Label>
                <Input
                  id="text"
                  type="text"
                  placeholder={title}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="description">Job Description</Label>
                <Input
                  id="jobDescription"
                  type="text"
                  placeholder={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <CardTitle className="text-xl lg:text-3xl">Add Contact Information</CardTitle>
              <div className="lg:flex lg:justify-between">
                <div className="flex flex-col space-y-1.5 py-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5 py-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="number"
                    placeholder={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="text">Location</Label>
                  <Input
                    id="location"
                    type="text"
                    placeholder={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />
                </div>
              <CardTitle className="text-xl lg:text-3xl">Add Job Information</CardTitle>
              <div className="lg:flex lg:justify-between">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="types">Job Type</Label>
                  <JobTypes onSelectType={handleSelectType} />
                </div>
                <div className="flex flex-col space-y-1.5 py-2 lg:py-0">
                  <Label htmlFor="qualification">Qualification</Label>
                  <Qualification onSelectQualification={handleSelectQualification}/>
                </div>
              </div>
              <div className="lg:flex lg:justify-between">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="salary">Salary</Label>
                  <Input
                    id="salary"
                    type="number"
                    placeholder={salary.toString()}
                    onChange={(e) => setSalary(e.target.value)}
                    required
                  />
                  </div>
                  <div className="flex flex-col space-y-1.5">                  <Label htmlFor="openings">Openings</Label>
                  <Input
                    id="openings"
                    type="number"
                    placeholder={openings.toString()}
                    onChange={(e) => setOpenings(e.target.value)}
                    required
                  />
                  </div>
                </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="expire">Expires At</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"secondary"}
                      className={cn(
                        "w-[240px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
        </div>
        <DialogFooter>
          <Button type="submit" onSubmit={edit}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </div>
  );
}

export default EditJobs