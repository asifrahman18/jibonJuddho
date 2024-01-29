import React from "react";

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
  const [date, setDate] = React.useState<Date>();
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
                  // onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="description">Job Description</Label>
                <Input
                  id="jobDescription"
                  type="text"
                  placeholder="Job Description"
                  // onChange={(e) => setPassword(e.target.value)}
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
                    // onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="number"
                    placeholder="Phone"
                    // onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="text">Location</Label>
                  <Input
                    id="location"
                    type="text"
                    placeholder="Location"
                    // onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <CardTitle>Add Job Information</CardTitle>
              <div className="flex justify-between">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="types">Job Type</Label>
                  <JobTypes />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="qualification">Qualification</Label>
                  <Qualification />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="salary">Salary</Label>
                  <Input
                    id="salary"
                    type="number"
                    placeholder="Salary"
                    // onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="salary">Expires At</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
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
        <CardFooter>
          <Button className="">Add</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AddJobs;
