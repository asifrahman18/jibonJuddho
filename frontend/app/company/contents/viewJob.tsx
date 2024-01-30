import React, { useEffect, useState } from "react";
import moment from "moment";
import { Badge } from "@/components/ui/badge";
import EditJobs from "./components/editJob";
import { deleteJobs } from "@/app/api/jobs/route";
import { useToast } from "@/components/ui/use-toast";

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

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getCompanyJobs } from "../../api/company/route";

interface CompDetailProps {
  compId: number | null;
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

const ViewJobs: React.FC<CompDetailProps> = ({ compId }) => {
  const [jobs, setJobs] = useState<Job[]>([]);

  const { toast } = useToast();

  useEffect(() => {
    if (compId !== null) {
      fetchJoblist(compId);
    }
  }, [compId]);

  const fetchJoblist = async (id: number | null) => {
    //console.log("Inside fetch function- view job:", id);
    try {
      //console.log("Inside try/catch- view job:", id);
      const jobData: Job[] = await getCompanyJobs(id);
      setJobs(jobData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDeleteClick = async (id: number, cid: number | null) => {
    try {
      const response = await deleteJobs(id);
      await fetchJoblist(cid);
      console.log(response);
      if (response) {
        toast({
          title: "Job Deleted",
          description: "",
          variant: "destructive",
        });
      }
    } catch (error) {}
  };
  return (
    <div>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>{""}</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {jobs.map((job) => (
              <AccordionItem
                value={job.id.toString()}
                key={job.id}
                className="cursor-pointer"
              >
                <AccordionTrigger className="p-2">{job.title}</AccordionTrigger>
                <AccordionContent className="p-2">
                  Location: {job.location}
                </AccordionContent>
                <AccordionContent className="p-2">
                  Email: {job.email}
                </AccordionContent>
                <AccordionContent className="p-2">
                  {moment(job.expiresAt).isBefore(moment()) ? (
                    <Badge className="bg-destructive max-w-[5rem] text-center rounded-lg">
                      Expired
                    </Badge>
                  ) : (
                    <div>
                      <Badge className="bg-green-500 max-w-[5rem] text-center rounded-lg">
                        Active
                      </Badge>
                      Expires: {moment(job.expiresAt).endOf("day").fromNow()}
                      <p className="py-2">{job.expiresAt.substring(0, 10)}</p>
                    </div>
                  )}
                </AccordionContent>
                <AccordionContent className="p-2">
                  <div className="flex gap-6">
                    <EditJobs
                      id={job.id}
                      title={job.title}
                      description={job.description}
                      email={job.email}
                      location={job.location}
                      jobType={job.jobType}
                      salary={job.salary}
                      openings={job.openings}
                      qualification={job.qualification}
                      company={job.company}
                      createdAt={job.createdAt}
                      expiresAt={job.expiresAt}
                    />
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="destructive">Delete Job</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Do you want to delete?</DialogTitle>
                          <DialogDescription>
                            This action is not reversible
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                          <Button
                            variant="destructive"
                            onClick={() => handleDeleteClick(job.id, compId)}
                          >
                            Yeah, why not?
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default ViewJobs;
