import React from "react";
import { useState } from "react";
import { addJobs } from "@/app/api/jobs/route";
import { useToast } from "@/components/ui/use-toast"


import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { JobTypes } from "./components/jobTypes";
import { Qualification } from "./components/qualification";

interface CompDetailProps {
  compId: number | null;
  compName: string | null;
}

interface Job {
  id: number;
  title: string;
  description: string;
  email: string;
  location: string;
  jobType: string;
  salary: number;
  openings: number;
  qualification: string;
  company: string;
  expiresAt: string;
  createdAt: string;
}

const AddJobs: React.FC<CompDetailProps> = ({ compId, compName }) => {
  const { toast } = useToast()

  const [date, setDate] = React.useState<Date>();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [qualification, setQualification] = useState("");
  const [salary, setSalary] = useState("");
  const [openings, setOpenings] = useState("");

  const handleSelectType = (selectedType: string) => {
    setType(selectedType);
  };

  const handleSelectQualification = (selectedQualification: string) => {
    setQualification(selectedQualification);
  };

  const viewAll = async () => {
    try {
      const response = await addJobs(compId, {
        title: name,
        description,
        email,
        location,
        openings,
        jobType: type,
        qualification,
        salary: parseInt(salary),
        expiresAt: date?.toISOString(),
      });

      if(response){
        toast({
          title: "Good News!",
          description: 'Job Added Successfully',
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
    <div>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Add Job for {compName}</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="jobName">Job Name</Label>
                <Input
                  id="text"
                  type="text"
                  placeholder="Job Name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="description">Job Description</Label>
                <Input
                  id="jobDescription"
                  type="text"
                  placeholder="Job Description"
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <CardTitle>Add Contact Information</CardTitle>
              <div className="flex justify-between">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="number"
                    placeholder="Phone"
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="text">Location</Label>
                  <Input
                    id="location"
                    type="text"
                    placeholder="Location"
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </div>
              </div>
              <CardTitle>Add Job Information</CardTitle>
              <div className="flex justify-between">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="types">Job Type</Label>
                  <JobTypes onSelectType={handleSelectType} />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="qualification">Qualification</Label>
                  <Qualification onSelectQualification={handleSelectQualification}/>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="salary">Salary</Label>
                  <Input
                    id="salary"
                    type="number"
                    placeholder="Salary"
                    onChange={(e) => setSalary(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="flex justify-between">
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
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="openings">Openings</Label>
                  <Input
                    id="salary"
                    type="number"
                    placeholder="Openings"
                    onChange={(e) => setOpenings(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="" onClick={viewAll}>Add</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AddJobs;
